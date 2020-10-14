export default function canPrefetch(href) {
  if (!href || !href.startsWith('/')) return false
  return true
}
