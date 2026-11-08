import { useState } from 'react'
import { accents, type AccentName } from '../data/accents'
import type { MoreProject } from '../data/content'
import { DrawingSheet } from './DrawingSheet'
import { Lightbox } from './Lightbox'
import { SheetControls } from './SheetControls'

interface Props {
  items: MoreProject[]
  accent: AccentName
}

/** A drawing sheet you can step through with the arrows; play opens the larger view. */
export function ExhibitViewer({ items, accent }: Props) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  // Keep the position valid even if the project list changes while the page is open.
  const current = Math.min(index, items.length - 1)
  const item = items[current]
  const many = items.length > 1
  const step = (dir: number) => setIndex(() => (current + dir + items.length) % items.length)

  return (
    <div>
      <DrawingSheet
        src={item.image}
        video={item.video}
        label={item.fileLabel}
        alt={item.title}
        accent={accent}
        footer={
          <SheetControls
            accent={accent}
            onPrev={() => step(-1)}
            onNext={() => step(1)}
            onPlay={() => setOpen(true)}
            canNav={many}
            canPlay={!!(item.image || item.video)}
          />
        }
      />
      {many && (
        <p className="mt-3 text-sm text-slate" aria-live="polite">
          {item.title} · {current + 1} / {items.length}
        </p>
      )}
      {item.href && !(item.image || item.video) && (
        <a href={item.href} download className={`mt-2 inline-block text-sm underline underline-offset-4 ${accents[accent].text}`}>
          {item.hrefLabel ?? 'Download ↓'}
        </a>
      )}
      <Lightbox items={items} index={current} open={open} onClose={() => setOpen(false)} onIndex={setIndex} />
    </div>
  )
}
