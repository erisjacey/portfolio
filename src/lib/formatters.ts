// Formatting utilities

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
