export function getTimeAgo(timestampInSeconds: number): string {
  const now = Math.floor(Date.now() / 1000)
  const diff = now - timestampInSeconds

  if (diff < 60) return `${diff}s ago`

  const minutes = Math.floor(diff / 60)
  if (minutes < 60) return `${minutes}m ago`

  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`

  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d ago`

  const weeks = Math.floor(days / 7)
  if (weeks < 4) return `${weeks}w ago`

  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`

  const years = Math.floor(days / 365)
  return `${years}y ago`
}
