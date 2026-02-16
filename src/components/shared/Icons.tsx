// Shared icon components using simple-icons

import { siGit, siGithub, siLeetcode } from 'simple-icons'

interface IconProps {
  className?: string
}

const createSimpleIcon = (path: string, defaultClassName = 'h-5 w-5') => {
  const IconComponent = ({ className = defaultClassName }: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
    >
      <path d={path} />
    </svg>
  )
  return IconComponent
}

export const GitIcon = createSimpleIcon(siGit.path)
export const GitHubIcon = createSimpleIcon(siGithub.path)
export const LeetCodeIcon = createSimpleIcon(siLeetcode.path)
