import { useState, type ReactNode } from 'react'
import { accents, type AccentName } from '../data/accents'

interface Props {
  accent?: AccentName
  src?: string
  /** Video file; its first frame is shown as the thumbnail. */
  video?: string
  alt: string
  /** Text shown on the empty sheet, e.g. the type of file when there is no preview. */
  label?: string
  /** Controls shown under the frame (e.g. previous / play / next). */
  footer?: ReactNode
}

/**
 * Frames a project image like an architectural drawing sheet: border,
 * corner registration marks and an optional footer for controls. Without
 * an image it shows an empty sheet with a centre mark.
 */
export function DrawingSheet({ src, video, alt, label, footer, accent = 'bronze' }: Props) {
  const a = accents[accent]
  // If an image fails to load, fall back to the empty sheet instead of a broken-image icon.
  const [failed, setFailed] = useState<string | null>(null)
  const showImage = !!src && failed !== src

  return (
    <figure className="border border-graphite/40 bg-paper p-3 md:p-4">
      <div className="relative aspect-[4/3] overflow-hidden border border-graphite/40">
        {showImage ? (
          <img key={src} src={src} alt={alt} decoding="async" onError={() => setFailed(src ?? null)} className="size-full bg-ink object-contain" />
        ) : video ? (
          <>
            <video
              src={`${video}#t=0.5`}
              preload="metadata"
              muted
              playsInline
              aria-label={alt}
              className="size-full bg-ink object-contain"
            />
            <span aria-hidden className="absolute inset-0 grid place-items-center">
              <span className="grid size-14 place-items-center rounded-full bg-ink/60 text-paper">
                <svg viewBox="0 0 24 24" className="size-6" fill="currentColor"><path d="M8 5.5v13a.5.5 0 0 0 .76.43l10.4-6.5a.5.5 0 0 0 0-.86L8.76 5.07A.5.5 0 0 0 8 5.5Z" /></svg>
              </span>
            </span>
          </>
        ) : (
          <>
            <svg aria-hidden viewBox="0 0 40 30" preserveAspectRatio="none" className="absolute inset-0 size-full text-stone">
              <path d="M20 0V30M0 15H40" stroke="currentColor" strokeWidth="0.12" vectorEffect="non-scaling-stroke" />
              <circle cx="20" cy="15" r="2.2" fill="none" stroke="currentColor" strokeWidth="0.12" vectorEffect="non-scaling-stroke" />
            </svg>
            {label && (
              <span className="absolute inset-0 grid place-items-center px-6 text-center text-sm text-slate">
                <span className="bg-paper px-3 py-1">{label}</span>
              </span>
            )}
          </>
        )}
        {/* corner registration marks */}
        {['left-1.5 top-1.5', 'right-1.5 top-1.5', 'left-1.5 bottom-1.5', 'right-1.5 bottom-1.5'].map((pos) => (
          <span key={pos} aria-hidden className={`absolute ${pos} size-3 ${a.border} ${cornerBorder(pos)}`} />
        ))}
      </div>

      {footer}
    </figure>
  )
}

function cornerBorder(pos: string) {
  const v = pos.includes('top') ? 'border-t' : 'border-b'
  const h = pos.includes('left') ? 'border-l' : 'border-r'
  return `${v} ${h}`
}
