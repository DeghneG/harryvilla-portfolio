// Muted accents that sit on the gray palette. Full class names are listed so Tailwind can find them.
export type AccentName = 'bronze' | 'steel' | 'sage' | 'clay'

export const accents: Record<
  AccentName,
  { text: string; bg: string; border: string; dot: string; hover: string }
> = {
  bronze: {
    text: 'text-bronze',
    bg: 'bg-bronze',
    border: 'border-bronze',
    dot: 'bg-bronze-soft',
    hover: 'hover:border-bronze-soft hover:bg-bronze-soft hover:text-ink',
  },
  steel: {
    text: 'text-steel',
    bg: 'bg-steel',
    border: 'border-steel',
    dot: 'bg-steel-soft',
    hover: 'hover:border-steel-soft hover:bg-steel-soft hover:text-ink',
  },
  sage: {
    text: 'text-sage',
    bg: 'bg-sage',
    border: 'border-sage',
    dot: 'bg-sage-soft',
    hover: 'hover:border-sage-soft hover:bg-sage-soft hover:text-ink',
  },
  clay: {
    text: 'text-clay',
    bg: 'bg-clay',
    border: 'border-clay',
    dot: 'bg-clay-soft',
    hover: 'hover:border-clay-soft hover:bg-clay-soft hover:text-ink',
  },
}
