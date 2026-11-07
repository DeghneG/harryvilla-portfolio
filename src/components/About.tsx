import { categories } from '../data/content'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
        <Reveal as="h2" className="font-display text-4xl text-ink md:text-5xl">Architecture categories</Reveal>
        <Reveal stagger className="divide-y divide-stone border-y border-stone">
          {categories.map((c, i) => (
            <article key={c.id} className="grid items-baseline gap-3 py-8 md:grid-cols-[3rem_1fr]">
              <span className="text-xs tracking-[0.2em] text-ash">0{i + 1}</span>
              <h3 className="font-display text-3xl text-ink md:text-4xl">{c.title}</h3>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
