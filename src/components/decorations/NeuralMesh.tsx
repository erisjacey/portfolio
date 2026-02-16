'use client'

const NeuralMesh = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.2]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="neural-pattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Circuit board style connections */}
            <path
              d="M 0 100 L 50 100 L 50 50 L 100 50"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M 100 50 L 150 50 L 150 100 L 200 100"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M 0 150 L 50 150 L 50 100"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M 150 150 L 150 100"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M 100 150 L 100 100 L 150 100"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              fill="none"
            />

            {/* Neural nodes (circles) */}
            <circle cx="50" cy="50" r="3" fill="rgba(59, 130, 246, 0.4)" />
            <circle cx="100" cy="50" r="3" fill="rgba(59, 130, 246, 0.4)" />
            <circle cx="150" cy="50" r="3" fill="rgba(59, 130, 246, 0.4)" />
            <circle cx="50" cy="100" r="3" fill="rgba(59, 130, 246, 0.4)" />
            <circle cx="100" cy="100" r="3" fill="rgba(59, 130, 246, 0.4)" />
            <circle cx="150" cy="100" r="3" fill="rgba(59, 130, 246, 0.4)" />
            <circle cx="50" cy="150" r="3" fill="rgba(59, 130, 246, 0.4)" />
            <circle cx="100" cy="150" r="3" fill="rgba(59, 130, 246, 0.4)" />
            <circle cx="150" cy="150" r="3" fill="rgba(59, 130, 246, 0.4)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-pattern)" />
      </svg>
    </div>
  )
}

export default NeuralMesh
