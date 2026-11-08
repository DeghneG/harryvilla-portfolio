import { useState } from 'react'
import type { AccentName } from '../data/accents'
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
  const item = items[index]
  const many = items.length > 1
  const step = (dir: number) => setIndex((i) => (i + dir + items.length) % items.length)

  return (
    <div>
      <DrawingSheet
        src={item.image}
        video={item.video}
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
          {item.title} · {index + 1} / {items.length}
        </p>
      )}
      <Lightbox items={items} index={index} open={open} onClose={() => setOpen(false)} onIndex={setIndex} />
    </div>
  )
}
