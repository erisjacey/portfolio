import { Linkedin, Mail } from 'lucide-react'
import { siGithub } from 'simple-icons'

export const socialLinks = [
  {
    name: 'GitHub',
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d={siGithub.path} />
      </svg>
    ),
    href: 'https://github.com/erisjacey',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={24} />,
    href: 'https://www.linkedin.com/in/eris-jacey-masagca-309795197/',
  },
  {
    name: 'Email',
    icon: <Mail size={24} />,
    href: 'mailto:hello@erisjacey.dev',
  },
]
