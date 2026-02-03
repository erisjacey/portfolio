'use client'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-text-secondary text-md max-w-xl space-y-6 leading-relaxed"
      >
        <p className="text-text-secondary mb-8">
          Open to senior software engineering opportunities in Singapore.
        </p>
        <div className="border-border bg-surface rounded-lg border p-12">
          <p className="text-text-secondary mb-6">
            Contact form coming soon. For now, reach out via:
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:hello@erisjacey.dev"
              className="bg-accent hover:bg-accent/80 glow-strong rounded-lg px-8 py-4 text-white transition-all"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/eris-jacey-masagca-309795197/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-border text-text-primary hover:border-accent hover:text-accent glow-on-hover rounded-lg border px-8 py-4 transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
