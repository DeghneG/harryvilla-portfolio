import { Link } from 'react-router-dom'
import { projects } from '../data/content'
import { ImagePlaceholder } from './ImagePlaceholder'
import { Reveal } from './Reveal'

export function Work() {
  return (
    <section id="work" className="bg-mist py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal as="h2" className="font-display text-4xl text-ink md:text-5xl">Portfolio exhibits</Reveal>
        <div className="mt-14 border-t border-stone">
          {projects.map((p, i) => (
            <Reveal key={p.term} as="article" className="grid items-center gap-8 border-b border-stone py-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
              <div className={`aspect-[4/3] overflow-hidden ${i % 2 ? 'md:order-2' : ''}`}>
                <ImagePlaceholder src={p.image} alt={p.title} />
              </div>
              <div>
                <h3 className="font-display text-5xl text-ink md:text-6xl">{p.term}</h3>
                {p.category && <p className="mt-3 text-lg text-slate">{p.category}</p>}
                <p className={`${p.category ? 'mt-8' : 'mt-5'} max-w-md font-display text-2xl text-balance text-ink`}>{p.title}</p>
                {p.course && <p className="mt-1 text-sm text-slate">{p.course}</p>}
                {p.description && <p className="mt-4 max-w-md leading-relaxed text-slate">{p.description}</p>}
                {p.slug && (
                  <Link
                    to={`/category/${p.slug}`}
                    className="group mt-8 inline-flex items-center gap-3 rounded-full border border-graphite px-6 py-3 text-sm text-ink transition-colors hover:bg-graphite hover:text-paper"
                  >
                    Explore more projects
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
