import { Linkedin, Mail } from 'lucide-react'
import { GitHubIcon } from '@/components/shared'
import { siteMetadata } from '@/constants/siteMetadata'

export const socialLinks = [
  {
    name: 'GitHub',
    icon: <GitHubIcon className="h-6 w-6" />,
    href: siteMetadata.social.github,
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={24} />,
    href: siteMetadata.social.linkedin,
  },
  {
    name: 'Email',
    icon: <Mail size={24} />,
    href: `mailto:${siteMetadata.email}`,
  },
]
