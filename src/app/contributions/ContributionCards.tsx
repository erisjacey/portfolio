'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GitPullRequest } from 'lucide-react'
import { GitHubIcon } from '@/components/shared'
import type { Contribution } from '@/constants/contributions'
import { formatDate } from '@/lib/formatters'

const getCardId = (contribution: Contribution) =>
  `${contribution.repoName}-${contribution.prNumber}`

const ContributionCard = ({
  contribution,
  index,
  isExpanded,
  onToggle,
}: {
  contribution: Contribution
  index: number
  isExpanded: boolean
  onToggle: () => void
}) => {
  const allTech = [
    ...contribution.repoTechStack,
    ...(contribution.additionalTech || []),
  ]
  const techStack = [...new Set(allTech)]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onToggle}
      className="group border-border bg-surface hover:border-accent/30 cursor-pointer rounded-lg border p-6"
    >
      {/* Repo name + badge + date */}
      <div className="mb-3">
        <div className="mb-1 flex items-start justify-between gap-2">
          {/* Mobile: repo name + date stacked | Desktop: repo · date inline */}
          <div className="text-text-secondary flex flex-col gap-1 font-mono text-xs lg:gap-0">
            <p>
              {contribution.repoName}
              <span className="hidden lg:inline">
                {' '}
                · {formatDate(contribution.createdAt)}
              </span>
            </p>
            <p className="lg:hidden">{formatDate(contribution.createdAt)}</p>
          </div>
          <span className="bg-success/10 text-success border-success/20 inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-xs font-medium">
            <GitPullRequest className="h-3 w-3" />
            PR #{contribution.prNumber}
          </span>
        </div>
        <h3 className="text-text-primary group-hover:text-accent text-lg font-semibold transition-colors">
          {contribution.prTitle}
        </h3>
      </div>

      {/* Description (always visible) */}
      <p className="text-text-secondary text-sm leading-relaxed">
        {contribution.description}
      </p>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4">
              {/* Highlights */}
              {contribution.highlights.length > 0 && (
                <div className="mb-4">
                  <p className="text-text-secondary mb-2 text-xs font-semibold tracking-wider">
                    What I Built
                  </p>
                  <ul className="text-text-secondary space-y-1 text-sm">
                    {contribution.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-current" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech stack */}
              <div className="mb-4 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-accent bg-accent/5 rounded px-2 py-1 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={contribution.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-text-secondary hover:text-accent inline-flex items-center gap-1.5 font-mono text-sm transition-colors"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Repo
                  <span className="text-accent">→</span>
                </a>
                <a
                  href={contribution.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-text-secondary hover:text-accent inline-flex items-center gap-1.5 font-mono text-sm transition-colors"
                >
                  <GitPullRequest className="h-4 w-4" />
                  PR
                  <span className="text-accent">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ContributionCards = ({
  contributions,
}: {
  contributions: Contribution[]
}) => {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set())

  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => {
      const next = new Set(prev)
      if (next.has(cardId)) {
        next.delete(cardId)
      } else {
        next.add(cardId)
      }
      return next
    })
  }

  return (
    <div className="space-y-6">
      {contributions.map((contribution, index) => {
        const cardId = getCardId(contribution)
        return (
          <ContributionCard
            key={cardId}
            contribution={contribution}
            index={index}
            isExpanded={expandedCards.has(cardId)}
            onToggle={() => toggleCard(cardId)}
          />
        )
      })}
    </div>
  )
}

export default ContributionCards
