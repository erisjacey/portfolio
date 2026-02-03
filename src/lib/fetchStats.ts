import { statsConfig } from '@/constants/statsConfig'

export interface Stats {
  githubCommits: number
  leetcodeSolved: number
  yearsOfExperience: number
  divesLogged: number
}

// Calculate years of experience from career start date
const calculateYearsOfExperience = (): number => {
  const startDate = new Date(statsConfig.careerStartDate)
  const now = new Date()
  const years =
    (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  return Math.round(years * 10) / 10 // Round to 1 decimal
}

// Fetch total GitHub contributions using the unofficial API
const fetchGitHubCommits = async (): Promise<number> => {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${statsConfig.github.username}?y=all`,
      { next: { revalidate: 86400 } }, // Cache for 24 hours
    )
    if (!response.ok) {
      throw new Error('GitHub API failed')
    }
    const data = await response.json()
    // Sum all yearly contributions
    const total = data.total as Record<string, number> | undefined
    if (!total) {
      return statsConfig.fallback.githubCommits
    }
    return Object.values(total).reduce((sum, count) => sum + count, 0)
  } catch {
    return statsConfig.fallback.githubCommits
  }
}

// Fetch LeetCode solved count using unofficial API
const fetchLeetCodeSolved = async (): Promise<number> => {
  try {
    const response = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${statsConfig.leetcode.username}`,
      { next: { revalidate: 86400 } }, // Cache for 24 hours
    )
    if (!response.ok) {
      throw new Error('LeetCode API failed')
    }
    const data = await response.json()
    return data.totalSolved ?? statsConfig.fallback.leetcodeSolved
  } catch {
    return statsConfig.fallback.leetcodeSolved
  }
}

// Fetch all stats
export const fetchStats = async (): Promise<Stats> => {
  const [githubCommits, leetcodeSolved] = await Promise.all([
    fetchGitHubCommits(),
    fetchLeetCodeSolved(),
  ])

  return {
    githubCommits,
    leetcodeSolved,
    yearsOfExperience: calculateYearsOfExperience(),
    divesLogged: statsConfig.divesLogged,
  }
}
