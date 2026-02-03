'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const Experience = () => {
  return (
    <section id="work" className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-text-secondary text-md max-w-xl space-y-6 leading-relaxed"
      >
        <p className="text-text-secondary mb-8">
          Interactive work timeline coming soon!
        </p>
        <div className="border-border bg-surface rounded-lg border p-12">
          <p className="text-text-secondary font-mono">
            Building the interactive work section...
          </p>
        </div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="pt-4"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent glow-on-hover inline-flex items-center gap-2 font-mono text-sm transition-colors"
          >
            <FileText className="h-4 w-4" />
            <span>View Full Résumé</span>
            <span className="text-accent">→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience
