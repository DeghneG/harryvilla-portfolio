import { accents, type AccentName } from '../data/accents'

interface Props {
  accent?: AccentName
  src?: string
  alt: string
  /** Exhibit name shown in the title block, e.g. "Prelim". */
  exhibit: string
  /** Sheet number shown in the title block, e.g. "A-101". */
  sheet: string
}

/**
 * Frames a project image like an architectural drawing sheet: border,
 * corner registration marks and a title block. Without an image it shows
 * an empty sheet with a centre mark.
 */
export function DrawingSheet({ src, alt, exhibit, sheet, accent = 'bronze' }: Props) {
  const a = accents[accent]
  const cells = [
    { label: 'Exhibit', value: exhibit },
    { label: 'Scale', value: 'N.T.S.' },
    { label: 'Sheet', value: sheet, accent: true },
  ]

  return (
    <figure className="border border-graphite/40 bg-paper p-3 md:p-4">
      <div className="relative aspect-[4/3] overflow-hidden border border-graphite/40">
        {src ? (
          <img src={src} alt={alt} loading="lazy" className="size-full object-cover" />
        ) : (
          <svg aria-hidden viewBox="0 0 40 30" preserveAspectRatio="none" className="absolute inset-0 size-full text-stone">
            <path d="M20 0V30M0 15H40" stroke="currentColor" strokeWidth="0.12" vectorEffect="non-scaling-stroke" />
            <circle cx="20" cy="15" r="2.2" fill="none" stroke="currentColor" strokeWidth="0.12" vectorEffect="non-scaling-stroke" />
          </svg>
        )}
        {/* corner registration marks */}
        {['left-1.5 top-1.5', 'right-1.5 top-1.5', 'left-1.5 bottom-1.5', 'right-1.5 bottom-1.5'].map((pos) => (
          <span key={pos} aria-hidden className={`absolute ${pos} size-3 ${a.border} ${cornerBorder(pos)}`} />
        ))}
      </div>

      <figcaption className="mt-3 grid grid-cols-[1.4fr_1fr_1fr] border border-graphite/40">
        {cells.map((c, i) => (
          <div key={c.label} className={`px-3 py-2 ${i > 0 ? 'border-l border-graphite/40' : ''}`}>
            <p className="text-[11px] tracking-[0.18em] text-ash uppercase">{c.label}</p>
            <p className={`mt-0.5 text-xs tabular-nums ${c.accent ? `font-medium ${a.text}` : 'text-ink'}`}>{c.value}</p>
          </div>
        ))}
      </figcaption>
    </figure>
  )
}

function cornerBorder(pos: string) {
  const v = pos.includes('top') ? 'border-t' : 'border-b'
  const h = pos.includes('left') ? 'border-l' : 'border-r'
  return `${v} ${h}`
}
