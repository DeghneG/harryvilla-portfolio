import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/** A hairline divider that draws itself from left to right as it scrolls into view. */
export function Rule({ tone = 'bg-stone', className = '' }: { tone?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 94%', once: true } },
        )
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  return <span ref={ref} aria-hidden className={`block h-px w-full origin-left ${tone} ${className}`} />
}
