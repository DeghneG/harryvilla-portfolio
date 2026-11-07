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
    <section id="technologies" className="bg-graphite text-paper">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
          <Reveal as="h2" className="font-display text-4xl md:text-5xl">Technologies</Reveal>
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
                      selected ? 'border-paper bg-paper text-ink' : 'border-slate text-stone hover:border-paper hover:text-paper'
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
              className="panel-in mt-8 divide-y divide-slate border-y border-slate"
            >
              {current.items.map((item) => (
                <p key={item} className="py-5 font-display text-3xl md:text-4xl">{item}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
