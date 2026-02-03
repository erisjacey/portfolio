'use client'

const Caustics = () => {
  // Extended bounds to prevent clipping during animation
  const extendedLayer = 'absolute -inset-[10%] w-[120%] h-[120%]'

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.08]">
      {/* Layer 1 - Large slow-moving caustics */}
      <div
        className={`animate-caustics-1 ${extendedLayer}`}
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 70% 60%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 50% 60% at 40% 80%, rgba(96, 165, 250, 0.3) 0%, transparent 50%)
          `,
        }}
      />
      {/* Layer 2 - Medium caustics */}
      <div
        className={`animate-caustics-2 ${extendedLayer}`}
        style={{
          background: `
            radial-gradient(ellipse 40% 30% at 60% 20%, rgba(147, 197, 253, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 50% 35% at 25% 50%, rgba(59, 130, 246, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse 45% 40% at 80% 70%, rgba(96, 165, 250, 0.3) 0%, transparent 50%)
          `,
        }}
      />
      {/* Layer 3 - Small faster caustics */}
      <div
        className={`animate-caustics-3 ${extendedLayer}`}
        style={{
          background: `
            radial-gradient(ellipse 30% 25% at 35% 40%, rgba(147, 197, 253, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 25% 30% at 75% 35%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 35% 25% at 50% 75%, rgba(96, 165, 250, 0.25) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  )
}

export default Caustics
