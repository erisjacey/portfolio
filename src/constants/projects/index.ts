// Aggregates all projects and exports sorted by createdAt (newest first)

import { pantrypalProjects } from './pantrypal'
import { yagfiSummary, yagfiContributions } from './yagfi'
import { sortByDateDesc } from '@/lib/formatters'

export type { Project, ProjectLink, ProjectType, Contribution } from './types'
export { projectTypeLabels } from './types'

// Homepage projects list (summary cards only)
export const projects = sortByDateDesc([yagfiSummary, ...pantrypalProjects])

// All contributions for the /contributions page (sorted newest first)
export const contributions = sortByDateDesc(yagfiContributions)
