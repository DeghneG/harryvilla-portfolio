import { profile } from '../data/content'
import { Reveal } from './Reveal'
import { Rule } from './Rule'

export function Contact() {
  const rows = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Facebook', value: 'Facebook', href: profile.facebook, external: true },
    { label: 'Location', value: profile.location },
  ]

  return (
    <section id="contact" className="bg-graphite text-paper">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <Reveal as="h2" className="font-display text-5xl md:text-7xl">Reach out &amp; connect</Reveal>
        <div className="mt-14">
          <Rule tone="bg-slate" />
          {rows.map((r) => (
            <div key={r.label}>
              <Reveal className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 py-6">
                <span className="text-xs tracking-[0.2em] text-stone uppercase">{r.label}</span>
                {r.href ? (
                  <a
                    href={r.href}
                    {...(r.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="font-display text-2xl underline decoration-slate underline-offset-8 transition-colors hover:decoration-paper md:text-4xl"
                  >
                    {r.value}
                  </a>
                ) : (
                  <span className="font-display text-2xl md:text-4xl">{r.value}</span>
                )}
              </Reveal>
              <Rule tone="bg-slate" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
