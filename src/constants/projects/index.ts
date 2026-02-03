// Aggregates all projects and exports sorted by createdAt (newest first)

import { pantrypalProjects } from './pantrypal'
import { yagfiContributions } from './yagfi'

export type { Project, ProjectLink, ProjectType } from './types'
export { projectTypeLabels } from './types'

// Combine all project arrays
const allProjects = [...yagfiContributions, ...pantrypalProjects]

// Sort by createdAt descending (newest first)
export const projects = allProjects.sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
)
