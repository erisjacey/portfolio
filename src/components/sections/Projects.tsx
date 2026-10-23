'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/shared'
import { projects } from '@/constants/projects'

const Projects = () => {
  return (
    <section id="projects" className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-text-secondary text-md space-y-6 leading-relaxed lg:max-w-xl"
      >
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
