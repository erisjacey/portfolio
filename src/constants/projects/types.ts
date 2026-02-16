// Shared types for projects

export type ProjectType = 'personal' | 'oss'

export interface ProjectLink {
  label: string
  url: string
  type: 'github' | 'pr' | 'external' | 'demo'
}

export interface Project {
  name: string
  type: ProjectType
  oneLiner: string
  description: string
  techStack: string[]
  highlights?: string[]
  links: ProjectLink[]
  featured?: boolean
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

export const projectTypeLabels: Record<ProjectType, string> = {
  personal: 'Personal',
  oss: 'OSS',
}
