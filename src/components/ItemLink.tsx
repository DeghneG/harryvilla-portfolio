import { accents, type AccentName } from '../data/accents'
import type { MoreProject } from '../data/content'

/** Link shown under a project when it has an `href` (a PDF, a Canva design, a downloadable file…). */
export function ItemLink({ item, accent, className = '' }: { item: MoreProject; accent: AccentName; className?: string }) {
  if (!item.href) return null
  const external = item.download ? { download: true } : { target: '_blank', rel: 'noreferrer' }
  return (
    <a
      href={item.href}
      {...external}
      className={`inline-block text-sm underline underline-offset-4 ${accents[accent].text} ${className}`}
    >
      {item.hrefLabel ?? (item.download ? 'Download ↓' : 'Open ↗')}
    </a>
  )
}
