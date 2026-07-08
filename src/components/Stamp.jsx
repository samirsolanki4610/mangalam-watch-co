import { useId } from 'react'

/**
 * The Hallmark — Mangalam's signature mark. Modelled on the ink-stamped
 * authenticity seals used on warranty cards and receipts at the shop
 * counter: a ring of hand-set circular type around a small watch-hands
 * mark, set very slightly off true to read as stamped rather than printed.
 * Static by design — no spin, no float. It earns its place once per view.
 */
export default function Stamp({ className = '', tilt = -4, ring = 'ESTD 1995 · BAPUNAGAR · AHMEDABAD · ' }) {
  const uid = useId()
  const pathId = `stamp-ring-${uid}`

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ transform: `rotate(${tilt}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id={pathId} d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
      </defs>

      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.9" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />

      <text fill="currentColor" fontSize="12.4" letterSpacing="2.6" fontFamily="'Work Sans', sans-serif" fontWeight="600">
        <textPath href={`#${pathId}`} startOffset="0%">
          {ring}
        </textPath>
      </text>

      {/* watch-hands mark, center */}
      <circle cx="100" cy="100" r="34" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="100" y1="100" x2="100" y2="72" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="100" y1="100" x2="120" y2="108" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="100" cy="100" r="4" fill="currentColor" />
      {[0, 90, 180, 270].map((a) => (
        <line
          key={a}
          x1={100 + 30 * Math.cos((a * Math.PI) / 180)}
          y1={100 + 30 * Math.sin((a * Math.PI) / 180)}
          x2={100 + 26 * Math.cos((a * Math.PI) / 180)}
          y2={100 + 26 * Math.sin((a * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="2"
        />
      ))}
    </svg>
  )
}
