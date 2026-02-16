// Formatting and sorting utilities

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

export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  const day = date.getUTCDate()
  const month = date.toLocaleDateString('en-US', {
    month: 'short',
    timeZone: 'UTC',
  })
  const year = date.getUTCFullYear()
  return `${day} ${month}, ${year}`
}

export const sortByDateDesc = <T extends { createdAt: string }>(
  items: T[],
): T[] =>
  [...items].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
