import type { PlateKind } from '../data/content'

/** Original line-drawn architectural plates, used in place of photography. */
export function Plate({ kind, className = '' }: { kind: PlateKind; className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label={labels[kind]}
      className={`block h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill="#dededa" />
      {kind === 'arches' && <Arches />}
      {kind === 'columns' && <Columns />}
      {kind === 'materials' && <Materials />}
      {kind === 'blend' && <Blend />}
    </svg>
  )
}

const labels: Record<PlateKind, string> = {
  arches: 'Line drawing of a row of stone archways',
  columns: 'Line drawing of fluted columns beneath an entablature',
  materials: 'Abstract study of stone, timber and concrete surfaces',
  blend: 'Drawing of a classical arch beside a modern concrete block',
}

const stroke = { stroke: '#2b2b29', strokeWidth: 1.5 } as const

function Arches() {
  return (
    <g>
      <rect x="0" y="236" width="400" height="64" fill="#cfcfcb" />
      {[0, 1, 2].map((i) => {
        const x = 40 + i * 110
        return (
          <g key={i}>
            <rect x={x} y="90" width="90" height="146" fill="#b9b9b4" />
            <path d={`M${x + 14} 236 V150 a31 31 0 0 1 62 0 V236 Z`} fill="#161615" opacity={0.85 - i * 0.2} />
            <path d={`M${x} 90 H${x + 90}`} fill="none" {...stroke} />
            <path d={`M${x + 14} 236 V150 a31 31 0 0 1 62 0 V236`} fill="none" {...stroke} />
          </g>
        )
      })}
      <path d="M30 90 H370 M30 76 H370" fill="none" {...stroke} />
    </g>
  )
}

function Columns() {
  return (
    <g>
      <path d="M40 60 H360 V80 H40 Z" fill="#b9b9b4" {...stroke} />
      <path d="M30 46 H370 V60 H30 Z" fill="#a3a39e" {...stroke} />
      {[0, 1, 2, 3, 4].map((i) => {
        const x = 62 + i * 68
        return (
          <g key={i}>
            <rect x={x} y="80" width="28" height="150" fill="#cfcfcb" />
            {[6, 12, 18, 24].map((f) => (
              <path key={f} d={`M${x + f} 80 V230`} stroke="#8c8c88" strokeWidth="1" />
            ))}
            <rect x={x - 5} y="230" width="38" height="8" fill="#a3a39e" {...stroke} />
            <rect x={x - 4} y="74" width="36" height="6" fill="#a3a39e" {...stroke} />
          </g>
        )
      })}
      <rect x="20" y="238" width="360" height="12" fill="#8c8c88" />
    </g>
  )
}

function Materials() {
  return (
    <g>
      <rect x="0" y="0" width="200" height="150" fill="#c9c9c4" />
      {Array.from({ length: 9 }).map((_, i) => (
        <path key={i} d={`M0 ${i * 17 + 10} H200`} stroke="#b0b0aa" strokeWidth="1" />
      ))}
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <path key={`${r}${c}`} d={`M${c * 42 + (r % 2) * 21} ${r * 34} v34`} stroke="#a3a39e" strokeWidth="1" />
        )),
      )}
      <rect x="200" y="0" width="200" height="150" fill="#9b9b96" />
      {Array.from({ length: 28 }).map((_, i) => (
        <circle key={i} cx={212 + ((i * 97) % 176)} cy={12 + ((i * 61 + (i % 3) * 29) % 126)} r={1.6 + (i % 3)} fill="#85857f" />
      ))}
      <rect x="0" y="150" width="400" height="150" fill="#7a7a74" />
      {Array.from({ length: 12 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${158 + i * 12} C100 ${150 + i * 12} 200 ${170 + i * 12} 400 ${158 + i * 12}`}
          stroke="#5f5f5a"
          strokeWidth="1.2"
          fill="none"
        />
      ))}
    </g>
  )
}

function Blend() {
  return (
    <g>
      <rect x="0" y="240" width="400" height="60" fill="#cfcfcb" />
      <path d="M50 240 V140 a50 50 0 0 1 100 0 V240 Z" fill="#b9b9b4" {...stroke} />
      <path d="M72 240 V146 a28 28 0 0 1 56 0 V240 Z" fill="#161615" opacity="0.8" />
      <rect x="190" y="70" width="170" height="170" fill="#55554f" />
      <rect x="190" y="70" width="170" height="14" fill="#2b2b29" />
      <rect x="215" y="110" width="120" height="70" fill="#dededa" opacity="0.85" />
      <path d="M275 110 V180 M215 145 H335" stroke="#55554f" strokeWidth="1.5" />
    </g>
  )
}
