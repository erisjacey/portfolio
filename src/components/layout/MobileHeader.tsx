'use client'

import { motion } from 'framer-motion'
import { socialLinks } from '@/constants/socialLinks'
import { siteMetadata } from '@/constants/siteMetadata'

const MobileHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6 }}
    className="border-border mb-12 flex flex-col items-center border-b px-6 py-8 lg:hidden"
  >
    <h1 className="mb-3 text-3xl font-bold">{siteMetadata.name}</h1>
    <p className="text-text-secondary font-mono text-lg">
      {siteMetadata.motto}
    </p>
    <p className="text-text-secondary mt-1 text-sm">
      I build solutions that are{' '}
      <span className="text-accent font-semibold">meticulously elegant</span>.
    </p>

    {/* Social Links */}
    <div className="mt-6 flex gap-5">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent glow-on-hover transition-all hover:-translate-y-1"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  </motion.div>
)

export default MobileHeader
