// Aggregates all projects and exports sorted by createdAt (newest first)

import { pantrypalProjects } from './pantrypal'
import { takeleavesgProjects } from './takeleavesg'
import { yagfiSummary, yagfiContributions } from './yagfi'
import { sortByDateDesc } from '@/lib/formatters'

export type { Project, ProjectLink, ProjectType, Contribution } from './types'
export { projectTypeLabels } from './types'

// Homepage: OSS summary cards
export const ossProjects = sortByDateDesc([yagfiSummary])

// Homepage: Personal project cards
export const personalProjects = sortByDateDesc([
  ...takeleavesgProjects,
  ...pantrypalProjects,
])

// All contributions for the /contributions page (sorted newest first)
export const contributions = sortByDateDesc(yagfiContributions)
