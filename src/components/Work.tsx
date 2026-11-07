import { projects } from '../data/content'
import { Plate } from './Plate'
import { Reveal } from './Reveal'

export function Work() {
  return (
    <section id="work" className="bg-mist py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal as="h2" className="font-display text-4xl text-ink md:text-5xl">Portfolio exhibits</Reveal>
        <div className="mt-14 border-t border-stone">
          {projects.map((p, i) => (
            <Reveal key={p.term} as="article" className="grid items-center gap-8 border-b border-stone py-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
              <div className={`aspect-[4/3] overflow-hidden ${i % 2 ? 'md:order-2' : ''}`}>
                <Plate kind={p.kind} />
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-ash uppercase">{p.term}</p>
                <h4 className="mt-3 font-display text-3xl text-ink md:text-4xl">{p.title}</h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
