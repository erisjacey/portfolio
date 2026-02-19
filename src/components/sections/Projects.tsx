'use client'

import { motion } from 'framer-motion'
import { ExternalLink, GitPullRequest } from 'lucide-react'
import { GitHubIcon } from '@/components/shared'
import { projects, type Project } from '@/constants/projects'

const getLinkIcon = (type: string) => {
  switch (type) {
    case 'github':
      return <GitHubIcon className="h-4 w-4" />
    case 'pr':
      return <GitPullRequest className="h-4 w-4" />
    case 'demo':
      return <ExternalLink className="h-4 w-4" />
    default:
      return <ExternalLink className="h-4 w-4" />
  }
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group border-border bg-surface hover:border-accent/30 hover:shadow-accent/5 rounded-lg border p-6 transition-shadow"
    >
      {/* Header: Name + Type Badge */}
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-text-primary group-hover:text-accent text-lg font-semibold transition-colors">
          {project.name}
        </h3>
        <span className="bg-accent/10 text-accent border-accent/20 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-xs font-medium">
          Personal
        </span>
      </div>

      {/* One-liner */}
      <p className="text-text-secondary mb-3 font-mono text-sm">
        {project.oneLiner}
      </p>

      {/* Description */}
      <p className="text-text-secondary mb-4 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="mb-4">
          <p className="text-text-secondary mb-2 text-xs font-semibold tracking-wider uppercase">
            What I Built
          </p>
          <ul className="text-text-secondary space-y-1 text-sm">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-current" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      <div className="mb-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-accent bg-accent/5 rounded px-2 py-1 font-mono text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent glow-on-hover inline-flex items-center gap-1.5 font-mono text-sm transition-colors"
            >
              {getLinkIcon(link.type)}
              <span>{link.label}</span>
              <span className="text-accent">→</span>
            </a>
          ))}
        </div>
      )}

      {/* Coming Soon indicator for projects without links */}
      {project.links.length === 0 && (
        <p className="text-text-secondary font-mono text-sm italic">
          Coming soon...
        </p>
      )}
    </motion.div>
  )
}

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
