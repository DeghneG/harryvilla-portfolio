import { Link, useParams } from 'react-router-dom'
import { moreProjects, projects } from '../data/content'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { Reveal } from '../components/Reveal'

export function CategoryPage() {
  const { slug } = useParams()
  const category = projects.find((p) => p.slug === slug)

  if (!category) {
    return (
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-32 md:px-10">
        <h1 className="font-display text-5xl text-ink">Page not found</h1>
        <Link to="/#work" className="mt-8 inline-block underline underline-offset-4">Back to portfolio exhibits</Link>
      </section>
    )
  }

  return (
    <section className="bg-mist pt-40 pb-28 md:pb-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Link to="/#work" className="text-xs tracking-[0.2em] text-ash uppercase transition-colors hover:text-ink">
          ← Portfolio exhibits
        </Link>
        <Reveal as="p" delay={0.1} className="mt-10 text-xs tracking-[0.2em] text-ash uppercase">{category.term}</Reveal>
        <Reveal as="h1" delay={0.2} className="mt-3 font-display text-5xl text-ink md:text-7xl">{category.category}</Reveal>

        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((p, i) => (
            <Reveal key={i} as="article">
              <div className="aspect-[4/3] overflow-hidden">
                <ImagePlaceholder src={p.image} alt={p.title} />
              </div>
              <h2 className="mt-4 font-display text-2xl text-ink">{p.title}</h2>
              <p className="mt-1 text-sm text-slate">{p.course}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
