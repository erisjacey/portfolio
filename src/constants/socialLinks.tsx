import { Linkedin, Mail } from 'lucide-react'
import { GitHubIcon } from '@/components/Icons'

export const socialLinks = [
  {
    name: 'GitHub',
    icon: <GitHubIcon className="h-6 w-6" />,
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
