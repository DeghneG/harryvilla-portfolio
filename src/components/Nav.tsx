import { profile } from '../data/content'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#philosophy', label: 'About Me' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-ink md:px-10" aria-label="Primary">
        <a href="#top" className="text-sm font-medium tracking-wide whitespace-nowrap"><span className="md:hidden">H. Villa</span><span className="hidden md:inline">{profile.name}</span></a>
        <ul className="flex gap-4 text-[11px] tracking-[0.12em] whitespace-nowrap uppercase md:gap-8 md:text-xs">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="opacity-70 transition-opacity hover:opacity-100">{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
