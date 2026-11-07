import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { profile } from '../data/content'
import { Reveal } from './Reveal'
import { InteractiveGrid } from './ui/interactive-grid'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function Hero() {
  const words = profile.name.split(' ')
  const section = useRef<HTMLElement>(null)
  const photo = useRef<HTMLImageElement>(null)

  // Parallax: the photo drifts down and eases in as the hero scrolls away.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          photo.current,
          { yPercent: 0, scale: 1.06 },
          {
            yPercent: 12,
            scale: 1.18,
            ease: 'none',
            scrollTrigger: { trigger: section.current, start: 'top top', end: 'bottom top', scrub: true },
          },
        )
      })
      return () => mm.revert()
    },
    { scope: section },
  )

  return (
    <section
      ref={section}
      id="top"
      className="relative isolate flex min-h-[92svh] items-center justify-center overflow-hidden bg-mist text-ink"
    >
      <img
        ref={photo}
        src="/building_white_minimalism_153610_1920x1080.jpg"
        alt=""
        aria-hidden
        fetchPriority="high"
        className="absolute inset-0 -z-10 size-full object-cover will-change-transform"
      />
      {/* Multiply tint pulls the white photo into the site's gray. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-mist mix-blend-multiply" />
      <InteractiveGrid className="[--grid-heat:var(--color-bronze)] [mask-image:radial-gradient(640px_circle_at_center,white,transparent)]" />
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
      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-6xl items-center justify-between px-6 pb-8 text-xs tracking-[0.2em] text-graphite uppercase md:px-10">
        <span>{profile.section}</span>
      </div>
    </section>
  )
}
