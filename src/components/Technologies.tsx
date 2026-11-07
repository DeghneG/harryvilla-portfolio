import { technologies } from '../data/content'
import { accents } from '../data/accents'
import { Reveal } from './Reveal'

export function Technologies() {
  return (
    <section id="technologies" className="bg-graphite text-paper">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
          <Reveal as="h2" className="font-display text-4xl md:text-5xl">Technologies</Reveal>
          <Reveal stagger className="space-y-12">
            {technologies.map((t) => (
              <div key={t.id}>
                <h3 className="flex items-center gap-3 text-sm text-stone">
                  <span aria-hidden className={`size-2 rounded-full ${accents[t.accent].dot}`} />
                  {t.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {t.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-full border border-slate px-5 py-2.5 text-sm text-paper transition-colors ${accents[t.accent].hover}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
