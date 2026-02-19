// Types for personal projects

export interface ProjectLink {
  label: string
  url: string
  type: 'github' | 'pr' | 'external' | 'demo'
}

export interface Project {
  name: string
  oneLiner: string
  description: string
  techStack: string[]
  highlights?: string[]
  links: ProjectLink[]
  featured?: boolean
  createdAt: string // ISO date string (YYYY-MM-DD) for sorting
}
