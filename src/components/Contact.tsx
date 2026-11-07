import { profile } from '../data/content'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <footer id="contact" className="bg-graphite text-paper">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <Reveal as="h2" className="font-display text-5xl md:text-7xl">Reach out &amp; connect</Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-4">
          <a href={`mailto:${profile.email}`} className="rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-stone">
            {profile.email}
          </a>
          <a href={profile.facebook} target="_blank" rel="noreferrer" className="rounded-full border border-ash px-7 py-3.5 text-sm transition-colors hover:border-paper">
            Facebook
          </a>
        </Reveal>
        <div className="mt-24 flex flex-wrap justify-between gap-4 border-t border-slate pt-6 text-xs text-stone">
          <span>{profile.name} · {profile.section}</span>
          <span>Digital Portfolio</span>
        </div>
      </div>
    </footer>
  )
}
