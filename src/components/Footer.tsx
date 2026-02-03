'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl"
    >
      <footer className="border-border border-t px-8 pt-12">
        <div className="text-text-secondary text-sm">
          <p>© {new Date().getFullYear()} Eris Jacey Masagca</p>
          <p className="mt-1 font-mono text-xs">
            Built with Next.js & Tailwind CSS.
          </p>
        </div>
        {/* <div className="mt-6">
          <p className="text-text-secondary font-mono text-sm">
            Built with focus and dedication in Singapore.
          </p>
        </div> */}
      </footer>
    </motion.div>
  )
}

export default Footer
