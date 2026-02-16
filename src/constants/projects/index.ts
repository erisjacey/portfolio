// Aggregates all projects and exports sorted by createdAt (newest first)

import { pantrypalProjects } from './pantrypal'
import { yagfiSummary, yagfiContributions } from './yagfi'

export type { Project, ProjectLink, ProjectType, Contribution } from './types'
export { projectTypeLabels } from './types'

// Homepage projects list (summary cards only)
const allProjects = [yagfiSummary, ...pantrypalProjects]

// Sort by createdAt descending (newest first)
export const projects = allProjects.sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
)

// All contributions for the /contributions page
export const contributions = yagfiContributions
