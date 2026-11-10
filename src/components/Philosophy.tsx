import { profile } from '../data/content'
import { Reveal } from './Reveal'

export function Philosophy() {
  return (
    <section id="philosophy" className="mx-auto max-w-5xl px-6 py-36 text-center md:px-10 md:py-56">
      <Reveal as="h2" className="font-display text-3xl text-slate md:text-4xl">Design Philosophy</Reveal>
      <Reveal as="blockquote" duration={1.8} delay={0.2} className="mt-10 font-display text-5xl leading-[1.05] text-balance text-ink md:mt-12 md:text-7xl">
        {profile.philosophy}
      </Reveal>
    </section>
  )
}
