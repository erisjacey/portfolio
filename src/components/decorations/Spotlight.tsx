'use client'

import { useState, useEffect, useSyncExternalStore } from 'react'
import { DESKTOP_BREAKPOINT } from '@/constants/layout'

const mediaQuery = `(min-width: ${DESKTOP_BREAKPOINT}px)`

const subscribe = (callback: () => void) => {
  const mql = window.matchMedia(mediaQuery)
  mql.addEventListener('change', callback)
  return () => mql.removeEventListener('change', callback)
}

const getSnapshot = () => window.matchMedia(mediaQuery).matches
const getServerSnapshot = () => false

const Spotlight = () => {
  const isDesktop = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  )
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!isDesktop) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isDesktop])

  if (!isDesktop) {
    return null
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
      }}
    />
  )
}

export default Spotlight
