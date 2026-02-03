'use client'

import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section id="projects" className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-text-secondary text-md max-w-xl space-y-6 leading-relaxed"
      >
        <p className="text-text-secondary mb-8">
          Exciting projects launching soon!
        </p>
        <div className="border-border bg-surface rounded-lg border p-12">
          <div className="space-y-4">
            <p className="font-semibold">Currently building:</p>
            <ul className="text-text-secondary space-y-2">
              <li>• PantryPal - Smart pantry inventory manager</li>
              <li>• More exciting projects in the pipeline</li>
            </ul>
            <p className="text-text-secondary mt-6 font-mono text-sm">
              Check back soon or follow me on GitHub!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
