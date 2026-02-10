// Adapted from React Bits — https://reactbits.dev/backgrounds/light-rays
'use client'

import { useRef, useEffect } from 'react'
import { Renderer, Program, Triangle, Mesh } from 'ogl'

type RaysOrigin =
  | 'top-center'
  | 'top-left'
  | 'top-right'
  | 'right'
  | 'left'
  | 'bottom-center'
  | 'bottom-right'
  | 'bottom-left'

const RAYS_ORIGIN_DESKTOP: RaysOrigin = 'top-left'
const RAYS_ORIGIN_MOBILE: RaysOrigin = 'top-center'
const MOBILE_BREAKPOINT = 1024
const RAYS_COLOR = '#ffffff'
const RAYS_SPEED = 1
const LIGHT_SPREAD = 2
const RAY_LENGTH = 3
const PULSATING = false
const FADE_DISTANCE = 0.2
const SATURATION = 1
const FOLLOW_MOUSE = true
const MOUSE_INFLUENCE = 0
const NOISE_AMOUNT = 0
const DISTORTION = 0

const hexToRgb = (hex: string): [number, number, number] => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return m
    ? [
        parseInt(m[1], 16) / 255,
        parseInt(m[2], 16) / 255,
        parseInt(m[3], 16) / 255,
      ]
    : [1, 1, 1]
}

const getAnchorAndDir = (
  origin: RaysOrigin,
  w: number,
  h: number,
): { anchor: [number, number]; dir: [number, number] } => {
  const outside = 0.2
  switch (origin) {
    case 'top-left':
      return { anchor: [0, -outside * h], dir: [0, 1] }
    case 'top-right':
      return { anchor: [w, -outside * h], dir: [0, 1] }
    case 'left':
      return { anchor: [-outside * w, 0.5 * h], dir: [1, 0] }
    case 'right':
      return { anchor: [(1 + outside) * w, 0.5 * h], dir: [-1, 0] }
    case 'bottom-left':
      return { anchor: [0, (1 + outside) * h], dir: [0, -1] }
    case 'bottom-center':
      return { anchor: [0.5 * w, (1 + outside) * h], dir: [0, -1] }
    case 'bottom-right':
      return { anchor: [w, (1 + outside) * h], dir: [0, -1] }
    default: // "top-center"
      return { anchor: [0.5 * w, -outside * h], dir: [0, 1] }
  }
}

type Vec2 = [number, number]
type Vec3 = [number, number, number]

interface Uniforms {
  iTime: { value: number }
  iResolution: { value: Vec2 }
  rayPos: { value: Vec2 }
  rayDir: { value: Vec2 }
  raysColor: { value: Vec3 }
  raysSpeed: { value: number }
  lightSpread: { value: number }
  rayLength: { value: number }
  pulsating: { value: number }
  fadeDistance: { value: number }
  saturation: { value: number }
  mousePos: { value: Vec2 }
  mouseInfluence: { value: number }
  noiseAmount: { value: number }
  distortion: { value: number }
  scrollFade: { value: number }
}

const LightRays = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const uniformsRef = useRef<Uniforms | null>(null)
  const rendererRef = useRef<Renderer | null>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 })
  const animationIdRef = useRef<number | null>(null)
  const meshRef = useRef<Mesh | null>(null)
  const scrollRef = useRef(0)

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    })
    rendererRef.current = renderer

    const gl = renderer.gl
    gl.canvas.style.width = '100%'
    gl.canvas.style.height = '100%'

    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild)
    }
    containerRef.current.appendChild(gl.canvas)

    const vert = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`

    const frag = `precision highp float;

uniform float iTime;
uniform vec2  iResolution;

uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2  mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;
uniform float scrollFade;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                  float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);

  float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;

  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));

  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);

  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;

  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
    0.0, 1.0
  );

  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);

  vec2 finalRayDir = rayDir;
  if (mouseInfluence > 0.0) {
    vec2 mouseScreenPos = mousePos * iResolution.xy;
    vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
    finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
  }

  vec4 rays1 = vec4(1.0) *
               rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349,
                           1.5 * raysSpeed);
  vec4 rays2 = vec4(1.0) *
               rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234,
                           1.1 * raysSpeed);

  fragColor = rays1 * 0.5 + rays2 * 0.4;

  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.01 + iTime * 0.1);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }

  float brightness = 1.0 - (coord.y / iResolution.y);
  fragColor.x *= 0.1 + brightness * 0.8;
  fragColor.y *= 0.3 + brightness * 0.6;
  fragColor.z *= 0.5 + brightness * 0.5;

  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }

  fragColor.rgb *= raysColor;

  // Fade out as user scrolls down (diving deeper)
  fragColor *= scrollFade;
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor  = color;
}`

    const uniforms: Uniforms = {
      iTime: { value: 0 },
      iResolution: { value: [1, 1] },

      rayPos: { value: [0, 0] },
      rayDir: { value: [0, 1] },

      raysColor: { value: hexToRgb(RAYS_COLOR) },
      raysSpeed: { value: RAYS_SPEED },
      lightSpread: { value: LIGHT_SPREAD },
      rayLength: { value: RAY_LENGTH },
      pulsating: { value: PULSATING ? 1.0 : 0.0 },
      fadeDistance: { value: FADE_DISTANCE },
      saturation: { value: SATURATION },
      mousePos: { value: [0.5, 0.5] },
      mouseInfluence: { value: MOUSE_INFLUENCE },
      noiseAmount: { value: NOISE_AMOUNT },
      distortion: { value: DISTORTION },
      scrollFade: { value: 1.0 },
    }
    uniformsRef.current = uniforms

    const geometry = new Triangle(gl)
    const program = new Program(gl, {
      vertex: vert,
      fragment: frag,
      uniforms,
    })
    const mesh = new Mesh(gl, { geometry, program })
    meshRef.current = mesh

    const updatePlacement = () => {
      if (!containerRef.current || !renderer) {
        return
      }

      renderer.dpr = Math.min(window.devicePixelRatio, 2)

      const { clientWidth: wCSS, clientHeight: hCSS } = containerRef.current
      renderer.setSize(wCSS, hCSS)

      const dpr = renderer.dpr
      const w = wCSS * dpr
      const h = hCSS * dpr

      uniforms.iResolution.value = [w, h]

      const origin =
        wCSS >= MOBILE_BREAKPOINT ? RAYS_ORIGIN_DESKTOP : RAYS_ORIGIN_MOBILE
      const { anchor, dir } = getAnchorAndDir(origin, w, h)
      uniforms.rayPos.value = anchor
      uniforms.rayDir.value = dir
    }

    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight
      scrollRef.current = maxScroll > 0 ? window.scrollY / maxScroll : 0
    }

    const loop = (t: number) => {
      if (!rendererRef.current || !uniformsRef.current || !meshRef.current) {
        return
      }

      uniforms.iTime.value = t * 0.001

      // Fade rays based on scroll: full at top, gone by ~40% scroll depth
      uniforms.scrollFade.value = Math.max(0, 1 - scrollRef.current * 2.5)

      if (FOLLOW_MOUSE && MOUSE_INFLUENCE > 0.0) {
        const smoothing = 0.92

        smoothMouseRef.current.x =
          smoothMouseRef.current.x * smoothing +
          mouseRef.current.x * (1 - smoothing)
        smoothMouseRef.current.y =
          smoothMouseRef.current.y * smoothing +
          mouseRef.current.y * (1 - smoothing)

        uniforms.mousePos.value = [
          smoothMouseRef.current.x,
          smoothMouseRef.current.y,
        ]
      }

      try {
        renderer.render({ scene: mesh })
        animationIdRef.current = requestAnimationFrame(loop)
      } catch (error) {
        console.warn('WebGL rendering error:', error)
        return
      }
    }

    window.addEventListener('resize', updatePlacement)
    window.addEventListener('scroll', handleScroll, { passive: true })
    updatePlacement()
    handleScroll()
    animationIdRef.current = requestAnimationFrame(loop)

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
        animationIdRef.current = null
      }

      window.removeEventListener('resize', updatePlacement)
      window.removeEventListener('scroll', handleScroll)

      try {
        const loseContextExt = renderer.gl.getExtension('WEBGL_lose_context')
        if (loseContextExt) {
          loseContextExt.loseContext()
        }

        const canvas = renderer.gl.canvas
        if (canvas && canvas.parentNode) {
          canvas.parentNode.removeChild(canvas)
        }
      } catch (error) {
        console.warn('Error during WebGL cleanup:', error)
      }

      rendererRef.current = null
      uniformsRef.current = null
      meshRef.current = null
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !rendererRef.current) {
        return
      }
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      mouseRef.current = { x, y }
    }

    if (FOLLOW_MOUSE) {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-3">
      <div
        ref={containerRef}
        className="relative h-full w-full overflow-hidden"
      />
    </div>
  )
}

export default LightRays
