// Experience/work history data

export interface Experience {
  company: string
  role: string
  team?: string
  location: string
  startDate: string // YYYY-MM format
  endDate?: string // YYYY-MM format, undefined = Present
  highlights: string[]
  techStack: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Visa',
    role: 'Software Engineer',
    team: 'Value-Added Services (Transaction Services)',
    location: 'Singapore',
    startDate: '2023-06',
    highlights: [
      'Own and maintain critical Visa Transaction Controls and Visa Flexible Credentials APIs integrated with VisaNet, serving issuer applications with sub-300ms response times and 99.999% availability',
      'Led development of real-time operational analytics platform providing granular DB performance metrics, reducing incident remediation time by 50%+ through pre-emptive anomaly detection',
      'Executed MongoDB migration from replica sets to sharded clusters, supporting scale from 300M to 5B+ cards with zero downtime',
      'Pioneered AI integration: deployed production AI feature validating merchant category codes, cutting client onboarding time by 90%; developed MCP server for internal debugging',
      'Mentored 3 new engineers as onboarding buddy, achieving <2 week time-to-first-commit',
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'MongoDB',
      'Kafka',
      'React',
      'Spring AI',
    ],
  },
]

// Format date range for display
export const formatDateRange = (
  startDate: string,
  endDate?: string,
): string => {
  const formatMonth = (dateStr: string): string => {
    const [year, month] = dateStr.split('-')
    const date = new Date(parseInt(year), parseInt(month) - 1)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  const start = formatMonth(startDate)
  const end = endDate ? formatMonth(endDate) : 'Present'

  return `${start} — ${end}`
}
