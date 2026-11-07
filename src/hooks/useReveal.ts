import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface RevealOptions {
  /** Pixels the element travels upward while revealing. */
  y?: number
  /** Seconds the reveal takes. Slow by design. */
  duration?: number
  /** Delay before this reveal starts, in seconds. */
  delay?: number
  /** Stagger between direct children when `children` is true. */
  stagger?: number
  /** Reveal direct children one after another instead of the element itself. */
  children?: boolean
  /** Viewport position where the reveal fires. */
  start?: string
}

/**
 * Slowly fades and lifts an element into view as it scrolls into the viewport.
 * Respects prefers-reduced-motion (content is simply shown).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>({
  y = 36,
  duration = 1.4,
  delay = 0,
  stagger = 0.18,
  children = false,
  start = 'top 88%',
}: RevealOptions = {}) {
  const ref = useRef<T>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      const targets = children ? Array.from(el.children) : el
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          targets,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            delay,
            stagger: children ? stagger : 0,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start, once: true },
          },
        )
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  return ref
}
