interface Props {
  src?: string
  alt: string
}

/** Shows the project image, or a dashed placeholder until a real one is set. */
export function ImagePlaceholder({ src, alt }: Props) {
  if (src) return <img src={src} alt={alt} loading="lazy" className="size-full object-cover" />
  return (
    <div className="flex size-full flex-col items-center justify-center gap-2 border border-dashed border-ash bg-paper/60 text-ash">
      <svg aria-hidden viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="m4 18 5-5 4 4 3-3 4 4" />
      </svg>
      <span className="text-xs tracking-[0.2em] uppercase">Project image</span>
    </div>
  )
}
