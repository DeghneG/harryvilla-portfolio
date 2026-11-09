import { useEffect, useRef, type KeyboardEvent } from 'react'
import type { MoreProject } from '../data/content'

interface Props {
  items: MoreProject[]
  index: number
  open: boolean
  onClose: () => void
  onIndex: (i: number) => void
}

const ctrl =
  'cursor-pointer rounded-full border border-slate px-4 py-2 text-sm text-paper transition-colors hover:bg-paper hover:text-ink disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-paper'

/** Full-size viewer for a project image. Esc closes; arrow keys move between projects. */
export function Lightbox({ items, index, open, onClose, onIndex }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  const item = items[index]
  const many = items.length > 1

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  const step = (dir: number) => onIndex((index + dir + items.length) % items.length)

  const onKey = (e: KeyboardEvent) => {
    if (!many) return
    if (e.key === 'ArrowLeft') step(-1)
    if (e.key === 'ArrowRight') step(1)
  }

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onKeyDown={onKey}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      aria-label={item ? `${item.title}, larger view` : 'Larger view'}
      className="m-auto max-h-[94vh] max-w-[94vw] overflow-visible bg-transparent p-0 backdrop:bg-ink/90"
    >
      {open && item && (
        <div className="flex flex-col items-center gap-4">
          {item.video ? (
            <video
              key={item.video}
              src={item.video}
              controls
              autoPlay
              playsInline
              className="max-h-[78vh] max-w-[90vw] bg-ink"
            />
          ) : (
            item.image && <img src={item.image} alt={item.title} className="max-h-[78vh] max-w-[90vw] bg-ink object-contain" />
          )}
          <div className="flex w-full flex-wrap items-center justify-between gap-4 text-paper">
            <div>
              <p className="font-display text-2xl">{item.title}</p>
              <p className="text-sm text-stone">
                {item.course}
                {many ? ` · ${index + 1} / ${items.length}` : ''}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {item.href && (
                <a href={item.href} target="_blank" rel="noreferrer" className={ctrl}>
                  {item.hrefLabel ?? 'Open ↗'}
                </a>
              )}
              {many && (
                <>
                  <button type="button" onClick={() => step(-1)} className={ctrl} aria-label="Previous project">←</button>
                  <button type="button" onClick={() => step(1)} className={ctrl} aria-label="Next project">→</button>
                </>
              )}
              <button type="button" onClick={onClose} className={ctrl}>Close</button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}
