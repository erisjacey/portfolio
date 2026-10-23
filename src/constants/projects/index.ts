// Aggregates all projects and exports sorted by createdAt (newest first)

import { dailykopiProjects } from './dailykopi'
import { pantrypalProjects } from './pantrypal'
import { takeleavesgProjects } from './takeleavesg'
import { sortByDateDesc } from '@/lib/formatters'

export type { Project, ProjectLink } from './types'

export const projects = sortByDateDesc([
  ...dailykopiProjects,
  ...takeleavesgProjects,
  ...pantrypalProjects,
])
