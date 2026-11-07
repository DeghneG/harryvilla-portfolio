import { profile } from '../data/content'
import { Reveal } from './Reveal'

export function Philosophy() {
  return (
    <section id="philosophy" className="mx-auto max-w-4xl px-6 py-32 text-center md:px-10 md:py-48">
      <Reveal as="p" className="text-xs tracking-[0.2em] text-ash uppercase">About Me · Design Philosophy</Reveal>
      <Reveal as="blockquote" delay={0.2} className="mt-8 font-display text-4xl leading-tight text-ink md:text-6xl">
        {profile.philosophy}
      </Reveal>
      <Reveal delay={0.3} className="mt-14">
        <p className="text-xs tracking-[0.2em] text-ash uppercase">Motto</p>
        <p className="mt-3 text-lg text-slate">{profile.motto}</p>
      </Reveal>
    </section>
  )
}
