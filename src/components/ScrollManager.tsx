import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to the #hash target on navigation, or to the top for a new page. */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = hash.slice(1)
    const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 50)
    return () => window.clearTimeout(t)
  }, [pathname, hash])

  return null
}
