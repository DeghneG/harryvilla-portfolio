import { Link } from 'react-router-dom'
import { profile } from '../data/content'

const nav = [
  { to: '/#about', label: 'About' },
  { to: '/#work', label: 'Work' },
  { to: '/#technologies', label: 'Technologies' },
  { to: '/#philosophy', label: 'Philosophy' },
  { to: '/#contact', label: 'Contact' },
]

const linkClass = 'transition-colors hover:text-bronze-soft'

export function Footer() {
  return (
    <footer className="bg-ink text-stone">
      {/* A row of arches: the site's ancient/modern idea, drawn in hairlines. */}
      <svg aria-hidden className="block h-14 w-full text-slate" preserveAspectRatio="xMidYMax slice">
        <defs>
          <pattern id="arcade" width="72" height="56" patternUnits="userSpaceOnUse">
            <path d="M12 56V28a24 24 0 0 1 48 0v28" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="56" fill="url(#arcade)" />
      </svg>
      <div className="border-t border-slate">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16 md:px-10 md:py-20">
          <div>
            <p className="font-display text-4xl text-paper">{profile.name}</p>
            <p className="mt-3 font-display text-xl text-stone italic">{profile.motto}</p>
            <p className="mt-6 text-sm">{profile.section} · {profile.location}</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-sm text-stone">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={`${linkClass} underline-offset-4 hover:underline`}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm text-stone">Connect</p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper">
              <li>
                <a href={`mailto:${profile.email}`} className={`${linkClass} underline-offset-4 hover:underline`}>{profile.email}</a>
              </li>
              <li>
                <a href={profile.facebook} target="_blank" rel="noreferrer" className={`${linkClass} underline-offset-4 hover:underline`}>Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 text-xs md:px-10">
            <span>© 2026 {profile.name}</span>
            <Link to="/#top" className={linkClass}>Back to top ↑</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
