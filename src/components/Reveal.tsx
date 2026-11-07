import type { ReactNode, ElementType } from 'react'
import { useReveal } from '../hooks/useReveal'

interface Props {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  stagger?: boolean
  duration?: number
}

export function Reveal({ children, as: Tag = 'div', className, delay, stagger, duration }: Props) {
  const ref = useReveal({ delay, duration, children: stagger })
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
