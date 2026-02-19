// Aggregates all contributions and exports sorted by createdAt (newest first)

import { yagfiSummary, yagfiContributions } from './yagfi'
import { sortByDateDesc } from '@/lib/formatters'

export type {
  ContributionSummary,
  ContributionLink,
  Contribution,
} from './types'

// Homepage contribution summary cards (one per repo)
export const contributionSummaries = sortByDateDesc([yagfiSummary])

// All individual contributions for the /contributions page
export const contributions = sortByDateDesc(yagfiContributions)
