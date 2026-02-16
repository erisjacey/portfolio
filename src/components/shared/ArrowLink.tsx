import type { ReactNode } from 'react'
import Link from 'next/link'

const baseClassName =
  'text-text-secondary hover:text-accent glow-on-hover inline-flex items-center gap-2 font-mono text-sm transition-colors'

const ArrowLink = ({
  href,
  icon,
  children,
  external = false,
}: {
  href: string
  icon?: ReactNode
  children: ReactNode
  external?: boolean
}) => {
  const content = (
    <>
      {icon}
      <span>{children}</span>
      <span className="text-accent">→</span>
    </>
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClassName}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={baseClassName}>
      {content}
    </Link>
  )
}

export default ArrowLink
