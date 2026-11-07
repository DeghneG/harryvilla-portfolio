import { Link } from 'react-router-dom'
import { profile } from '../data/content'

const links = [
  { to: '/#about', label: 'About' },
  { to: '/#work', label: 'Work' },
  { to: '/#technologies', label: 'Tech' },
  { to: '/#philosophy', label: 'Philosophy' },
  { to: '/#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-ink md:px-10" aria-label="Primary">
        <Link to="/" className="hidden text-sm font-medium tracking-wide whitespace-nowrap md:inline">
          {profile.name}
        </Link>
        <ul className="flex w-full justify-between text-[11px] tracking-[0.12em] whitespace-nowrap uppercase md:w-auto md:gap-8 md:text-xs">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="opacity-70 transition-opacity hover:opacity-100">{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
