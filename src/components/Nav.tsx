import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/content'

const links = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'technologies', label: 'Tech' },
  { id: 'philosophy', label: 'Philosophy' },
]

export function Nav() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const bar = useRef<HTMLSpanElement>(null)

  // Slim bar + progress line once the page has scrolled.
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      if (bar.current) bar.current.style.transform = `scaleX(${p})`
      setScrolled(window.scrollY > 24)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [pathname])

  // Highlight the section that crosses the middle of the viewport.
  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter((e): e is HTMLElement => !!e)
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => {
      io.disconnect()
      setActive(null)
    }
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-[background-color,border-color] duration-500 ${
        scrolled ? 'border-b border-stone bg-paper/95' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 text-ink transition-[padding] duration-500 md:px-10 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
        aria-label="Primary"
      >
        <Link to="/" className="hidden text-sm font-medium tracking-wide whitespace-nowrap md:inline">
          {profile.name}
        </Link>
        <ul className="flex w-full justify-between text-[11px] tracking-[0.12em] whitespace-nowrap uppercase md:w-auto md:gap-8 md:text-xs">
          {links.map((l) => (
            <li key={l.id}>
              <Link
                to={`/#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`border-b pb-1 transition-[opacity,border-color] ${
                  active === l.id ? 'border-bronze opacity-100' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <span
        ref={bar}
        aria-hidden
        className="absolute bottom-0 left-0 block h-px w-full origin-left scale-x-0 bg-bronze"
      />
    </header>
  )
}
