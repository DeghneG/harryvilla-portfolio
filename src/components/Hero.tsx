import { profile } from '../data/content'
import { Reveal } from './Reveal'
import { InteractiveGrid } from './ui/interactive-grid'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[88svh] items-center justify-center overflow-hidden bg-mist text-ink">
      <InteractiveGrid className="[mask-image:radial-gradient(520px_circle_at_center,white,transparent)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 text-center md:px-10">
        <Reveal as="p" className="mb-6 text-xs tracking-[0.2em] text-ash uppercase">{profile.section}</Reveal>
        <Reveal as="h1" delay={0.15} className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">
          {profile.name}
        </Reveal>
        <Reveal as="p" delay={0.35} className="mt-8 font-display text-2xl text-ink italic md:text-3xl">
          {profile.motto}
        </Reveal>
      </div>
    </section>
  )
}
