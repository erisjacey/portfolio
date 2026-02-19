// Types for OSS contributions

export interface ContributionLink {
  label: string
  url: string
  type: 'github' | 'external'
}

export interface ContributionSummary {
  name: string
  oneLiner: string
  description: string
  techStack: string[]
  links: ContributionLink[]
  createdAt: string // ISO date string (YYYY-MM-DD) for sorting
}

export interface Contribution {
  repoName: string
  repoUrl: string
  repoOneLiner: string
  repoTechStack: string[]
  prNumber: number
  prUrl: string
  prTitle: string
  description: string
  highlights: string[]
  additionalTech?: string[]
  createdAt: string // ISO date string (YYYY-MM-DD) for sorting
}
