import { accents, type AccentName } from '../data/accents'

interface Props {
  accent?: AccentName
  /** Omit onPrev/onNext for a single-item strip that only has the play button. */
  onPrev?: () => void
  onNext?: () => void
  onPlay?: () => void
  canNav?: boolean
  canPlay?: boolean
}

const btn =
  'flex cursor-pointer items-center justify-center py-3 transition-colors hover:bg-graphite hover:text-paper focus-visible:bg-graphite focus-visible:text-paper disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit'

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {dir === 'left' ? <path d="M19 12H5m6-6-6 6 6 6" /> : <path d="M5 12h14m-6-6 6 6-6 6" />}
    </svg>
  )
}

/** Previous / play / next buttons that sit under a drawing sheet. */
export function SheetControls({ accent = 'bronze', onPrev, onNext, onPlay, canNav = true, canPlay = true }: Props) {
  const a = accents[accent]
  const hasNav = !!onPrev && !!onNext

  return (
    <div className={`mt-3 grid border border-graphite/40 text-ink ${hasNav ? 'grid-cols-3 divide-x divide-graphite/40' : 'grid-cols-1'}`}>
      {hasNav && (
        <button type="button" onClick={onPrev} disabled={!canNav} aria-label="Previous project" className={btn}>
          <Arrow dir="left" />
        </button>
      )}
      <button type="button" onClick={onPlay} disabled={!canPlay} aria-label="View larger" className={`${btn} ${a.text}`}>
        <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="currentColor">
          <path d="M8 5.5v13a.5.5 0 0 0 .76.43l10.4-6.5a.5.5 0 0 0 0-.86L8.76 5.07A.5.5 0 0 0 8 5.5Z" />
        </svg>
      </button>
      {hasNav && (
        <button type="button" onClick={onNext} disabled={!canNav} aria-label="Next project" className={btn}>
          <Arrow dir="right" />
        </button>
      )}
    </div>
  )
}
