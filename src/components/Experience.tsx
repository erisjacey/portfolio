'use client'

import { motion } from 'framer-motion'
import { FileText, MapPin } from 'lucide-react'
import { experiences, formatDateRange } from '@/constants/experience'

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Timeline line */}
      <div className="border-border absolute top-0 left-0 h-full w-px border-l-2" />

      {/* Timeline dot */}
      <div className="bg-accent absolute top-1 -left-[5px] h-3 w-3 rounded-full" />

      {/* Content */}
      <div className="pl-8">
        {/* Date range */}
        <p className="text-accent mb-1 font-mono text-sm">
          {formatDateRange(experience.startDate, experience.endDate)}
        </p>

        {/* Role & Company */}
        <h3 className="text-text-primary mb-1 text-lg font-semibold">
          {experience.role}{' '}
          <span className="text-text-secondary font-normal">@</span>{' '}
          <span className="text-accent">{experience.company}</span>
        </h3>

        {/* Team & Location */}
        <div className="text-text-secondary mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          {experience.team && <span>{experience.team}</span>}
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {experience.location}
          </span>
        </div>

        {/* Highlights */}
        <ul className="text-text-secondary mb-4 space-y-2 text-sm leading-relaxed">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-accent mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-current" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {experience.techStack.map((tech) => (
            <span
              key={tech}
              className="text-accent bg-accent/5 rounded px-2 py-1 font-mono text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  return (
    <section id="work" className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-text-secondary text-md space-y-8 leading-relaxed lg:max-w-xl"
      >
        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.startDate}`}
              experience={experience}
              index={index}
            />
          ))}
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
