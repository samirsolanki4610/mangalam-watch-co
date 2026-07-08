// The site's recurring signature motif: a watch bezel rendered as a ring of
// tick marks, with every fifth tick emphasised as an hour index. Static by
// default — quiet enough to sit behind a photo or frame a section without
// competing with the content.
export default function DialMark({ className = '', ticks = 60 }) {
  const cx = 50
  const cy = 50
  const r1 = 44
  const r2minor = 40
  const r2major = 36

  const marks = []
  for (let i = 0; i < ticks; i++) {
    const isMajor = i % 5 === 0
    const angle = (i / ticks) * Math.PI * 2 - Math.PI / 2
    const inner = isMajor ? r2major : r2minor
    const x1 = cx + Math.cos(angle) * r1
    const y1 = cy + Math.sin(angle) * r1
    const x2 = cx + Math.cos(angle) * inner
    const y2 = cy + Math.sin(angle) * inner
    marks.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        strokeWidth={isMajor ? 1.6 : 0.7}
        strokeLinecap="round"
        opacity={isMajor ? 0.9 : 0.45}
      />
    )
  }

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {marks}
    </svg>
  )
}
