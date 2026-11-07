import { profile } from '../data/content'
import { Reveal } from './Reveal'
import { InteractiveGrid } from './ui/interactive-grid'

export function Hero() {
  const words = profile.name.split(' ')

  return (
    <section id="top" className="relative flex min-h-[92svh] items-center justify-center overflow-hidden bg-mist text-ink">
      <InteractiveGrid className="[mask-image:radial-gradient(640px_circle_at_center,white,transparent)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 text-center md:px-10">
        <h1 aria-label={profile.name} className="font-display text-6xl leading-[0.95] tracking-tight text-balance md:text-8xl">
          {words.map((w, i) => (
            <span key={w} aria-hidden className="inline-block overflow-hidden pb-[0.14em] align-bottom">
              <span className="hero-word inline-block" style={{ animationDelay: `${0.1 + i * 0.14}s` }}>{w}</span>
              {i < words.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>
        <Reveal as="p" delay={0.7} className="mt-8 font-display text-2xl text-slate italic md:text-3xl">
          {profile.motto}
        </Reveal>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-6xl items-center justify-between px-6 pb-8 text-xs tracking-[0.2em] text-ash uppercase md:px-10">
        <span>{profile.section}</span>
        <a href="#about" className="transition-colors hover:text-ink">Scroll ↓</a>
      </div>
    </section>
  )
}
