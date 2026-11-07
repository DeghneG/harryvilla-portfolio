import { useRef, useState, type KeyboardEvent } from 'react'
import { technologies } from '../data/content'
import { Reveal } from './Reveal'

export function Technologies() {
  const [active, setActive] = useState(technologies[0].id)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const current = technologies.find((t) => t.id === active) ?? technologies[0]

  const onKey = (e: KeyboardEvent, i: number) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const next = (i + dir + technologies.length) % technologies.length
    setActive(technologies[next].id)
    tabs.current[next]?.focus()
  }

  return (
    <section id="technologies" className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
        <Reveal as="h2" className="font-display text-4xl text-ink md:text-5xl">Technologies</Reveal>
        <Reveal>
          <div role="tablist" aria-label="Technologies" className="flex flex-wrap gap-2">
            {technologies.map((t, i) => {
              const selected = t.id === active
              return (
                <button
                  key={t.id}
                  ref={(el) => { tabs.current[i] = el }}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(t.id)}
                  onKeyDown={(e) => onKey(e, i)}
                  className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm transition-colors ${
                    selected ? 'border-graphite bg-graphite text-paper' : 'border-stone text-slate hover:border-graphite hover:text-ink'
                  }`}
                >
                  {t.label}
                </button>
              )
            })}
          </div>

          <div
            key={current.id}
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            className="panel-in mt-8 divide-y divide-stone border-y border-stone"
          >
            {current.items.map((item, i) => (
              <div key={i} className="flex items-baseline gap-6 py-5">
                <span className="w-6 text-xs tracking-[0.2em] text-ash">0{i + 1}</span>
                <span className="font-display text-2xl text-ink">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
