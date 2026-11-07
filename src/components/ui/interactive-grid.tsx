import { useEffect, useRef } from 'react'

interface InteractiveGridProps {
  className?: string
  /** Cell size in px. */
  size?: number
  /** Radius (in cells) lit around the pointer. */
  radius?: number
}

/**
 * A line grid that lights up the cells near the pointer and fades them out
 * slowly behind it. Colours come from the element's CSS `color`.
 * Pointer-events are off, so content above it stays clickable.
 */
export function InteractiveGrid({ className = '', size = 44, radius = 2.4 }: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let cols = 0
    let rows = 0
    let heat = new Float32Array(0)
    let raf = 0
    let running = false

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const r = canvas.getBoundingClientRect()
      w = r.width
      h = r.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(w / size)
      rows = Math.ceil(h / size)
      heat = new Float32Array(cols * rows)
      draw()
    }

    const draw = () => {
      const color = getComputedStyle(canvas).color
      ctx.clearRect(0, 0, w, h)
      ctx.globalAlpha = 1
      for (let i = 0; i < heat.length; i++) {
        const v = heat[i]
        if (v < 0.01) continue
        ctx.globalAlpha = v * 0.22
        ctx.fillStyle = color
        ctx.fillRect((i % cols) * size, Math.floor(i / cols) * size, size, size)
      }
      ctx.globalAlpha = 0.28
      ctx.strokeStyle = color
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let x = 0; x <= cols; x++) {
        ctx.moveTo(x * size + 0.5, 0)
        ctx.lineTo(x * size + 0.5, h)
      }
      for (let y = 0; y <= rows; y++) {
        ctx.moveTo(0, y * size + 0.5)
        ctx.lineTo(w, y * size + 0.5)
      }
      ctx.stroke()
    }

    const tick = () => {
      let alive = false
      for (let i = 0; i < heat.length; i++) {
        if (heat[i] > 0.01) {
          heat[i] *= 0.94
          alive = true
        } else heat[i] = 0
      }
      draw()
      if (alive) raf = requestAnimationFrame(tick)
      else running = false
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      const px = (e.clientX - r.left) / size
      const py = (e.clientY - r.top) / size
      if (px < -radius || py < -radius || px > cols + radius || py > rows + radius) return
      for (let cy = Math.max(0, Math.floor(py - radius)); cy <= Math.min(rows - 1, Math.ceil(py + radius)); cy++) {
        for (let cx = Math.max(0, Math.floor(px - radius)); cx <= Math.min(cols - 1, Math.ceil(px + radius)); cx++) {
          const d = Math.hypot(cx + 0.5 - px, cy + 0.5 - py)
          if (d < radius) heat[cy * cols + cx] = Math.max(heat[cy * cols + cx], 1 - d / radius)
        }
      }
      if (!running) {
        running = true
        raf = requestAnimationFrame(tick)
      }
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    if (!reduce) window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [size, radius])

  return <canvas ref={canvasRef} aria-hidden className={`pointer-events-none absolute inset-0 size-full text-slate ${className}`} />
}
