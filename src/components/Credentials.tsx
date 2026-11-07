import { credentials, profile } from '../data/content'
import { Reveal } from './Reveal'

export function Credentials() {
  return (
    <div id="credentials" className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
      <Reveal as="h2" className="font-display text-4xl text-ink md:text-5xl">About me</Reveal>
      <Reveal stagger className="divide-y divide-stone border-y border-stone">
        <div className="py-6">
          <p className="font-display text-2xl text-ink">{profile.name}</p>
          <p className="mt-1 text-slate">{credentials.standing}, {credentials.school}</p>
          <p className="mt-1 text-sm text-ash">Course: {credentials.course} · {profile.location}</p>
        </div>
        <div className="py-6">
          <p className="text-xs tracking-[0.2em] text-ash uppercase">Education</p>
          <ul className="mt-4 space-y-3">
            {credentials.education.map((e) => (
              <li key={e.level} className="flex items-baseline justify-between gap-6">
                <span className="font-display text-2xl text-ink">{e.level}</span>
                <span className="text-sm text-slate tabular-nums">{e.years}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  )
}
