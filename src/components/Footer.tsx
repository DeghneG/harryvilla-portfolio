import { Link } from 'react-router-dom'
import { profile } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-ink text-stone">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 text-xs md:px-10">
        <span>© 2026 {profile.name}</span>
        <Link to="/#top" className="transition-colors hover:text-paper">Back to top ↑</Link>
      </div>
    </footer>
  )
}
