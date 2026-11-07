import { projects } from '../data/content'
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
                {p.image ? (
                  <img src={p.image} alt={p.title} loading="lazy" className="size-full object-cover" />
                ) : (
                  <div className="flex size-full flex-col items-center justify-center gap-2 border border-dashed border-ash bg-paper/60 text-ash">
                    <svg aria-hidden viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <rect x="3" y="4" width="18" height="16" rx="1" />
                      <circle cx="9" cy="10" r="1.6" />
                      <path d="m4 18 5-5 4 4 3-3 4 4" />
                    </svg>
                    <span className="text-xs tracking-[0.2em] uppercase">Project image</span>
                  </div>
                )}
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-ash uppercase">{p.term} · {p.category}</p>
                <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">{p.title}</h3>
                <p className="mt-2 text-sm text-slate">{p.course}</p>
                <p className="mt-4 max-w-md leading-relaxed text-slate">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
