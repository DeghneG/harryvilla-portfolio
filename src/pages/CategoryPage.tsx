import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { moreProjectsFor, projects } from '../data/content'
import { DrawingSheet } from '../components/DrawingSheet'
import { ItemLink } from '../components/ItemLink'
import { Lightbox } from '../components/Lightbox'
import { Reveal } from '../components/Reveal'
import { SheetControls } from '../components/SheetControls'
import { accents } from '../data/accents'

export function CategoryPage() {
  const { slug } = useParams()
  const category = projects.find((p) => p.slug === slug)
  const [view, setView] = useState<{ open: boolean; index: number }>({ open: false, index: 0 })

  if (!category) {
    return (
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-32 md:px-10">
        <h1 className="font-display text-5xl text-ink">Page not found</h1>
        <Link to="/#work" className="mt-8 inline-block underline underline-offset-4">Back to portfolio exhibits</Link>
      </section>
    )
  }

  const items = moreProjectsFor(category.term)
  // Only projects that have an image or video can be opened in the larger view.
  const viewable = items.filter((p) => p.image || p.video)

  return (
    <section className="bg-mist pt-40 pb-28 md:pb-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Link to="/#work" className="text-sm text-slate underline-offset-4 transition-colors hover:text-ink hover:underline">
          ← Portfolio exhibits
        </Link>
        <Reveal as="h1" delay={0.1} className="mt-10 font-display text-5xl text-ink md:text-7xl">{category.category}</Reveal>
        <Reveal as="p" delay={0.2} className={`mt-4 text-lg ${accents[category.accent].text}`}>{category.term}</Reveal>

        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={i} as="article">
              <DrawingSheet
                src={p.image}
                video={p.video}
                label={p.fileLabel}
                alt={p.title}
                accent={category.accent}
                footer={
                  <SheetControls
                    accent={category.accent}
                    canPlay={!!(p.image || p.video)}
                    onPlay={() => setView({ open: true, index: viewable.indexOf(p) })}
                  />
                }
              />
              <h2 className="mt-4 font-display text-2xl text-ink">{p.title}</h2>
              <p className="mt-1 text-sm text-slate">{p.course}</p>
              <ItemLink item={p} accent={category.accent} className="mt-3" />
            </Reveal>
          ))}
        </div>
      </div>
      <Lightbox
        items={viewable}
        index={view.index}
        open={view.open && viewable.length > 0}
        onClose={() => setView((v) => ({ ...v, open: false }))}
        onIndex={(index) => setView({ open: true, index })}
      />
    </section>
  )
}
