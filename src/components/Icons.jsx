// A small set of hand-picked line icons in the site's ledger-stamp idiom —
// thin strokes, rounded joins, no fill. Kept in one file since each is only
// a handful of paths and none are reused outside the homepage highlight
// sections (Why Choose Us / Repair Services).

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconBattery({ className = '' }) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="7.5" width="16" height="9" rx="2" />
      <path d="M21 10.5v3" />
      <path d="M6.5 10.5v3M9.5 10.5v3" />
    </svg>
  )
}

export function IconStrap({ className = '' }) {
  return (
    <svg {...base} className={className}>
      <rect x="7" y="2.5" width="10" height="6" rx="1.6" />
      <rect x="7" y="15.5" width="10" height="6" rx="1.6" />
      <circle cx="12" cy="12" r="4.2" />
      <path d="M9.6 12h4.8" />
    </svg>
  )
}

export function IconDial({ className = '' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
      <path d="M12 2.7v1.4M12 19.9v1.4" />
    </svg>
  )
}

export function IconSparkle({ className = '' }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3c.5 3.4 2.1 5 5.5 5.5-3.4.5-5 2.1-5.5 5.5-.5-3.4-2.1-5-5.5-5.5C9.9 8 11.5 6.4 12 3Z" />
      <path d="M18.5 15.2c.25 1.5.95 2.2 2.5 2.45-1.55.25-2.25.95-2.5 2.45-.25-1.5-.95-2.2-2.5-2.45 1.55-.25 2.25-.95 2.5-2.45Z" />
    </svg>
  )
}

export function IconDroplet({ className = '' }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.2s6 6.4 6 10.6a6 6 0 1 1-12 0c0-4.2 6-10.6 6-10.6Z" />
    </svg>
  )
}

export function IconGear({ className = '' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2.3M12 18.2v2.3M20.5 12h-2.3M5.8 12H3.5M17.8 6.2l-1.6 1.6M7.8 16.2l-1.6 1.6M17.8 17.8l-1.6-1.6M7.8 7.8 6.2 6.2" />
    </svg>
  )
}

export function IconSeal({ className = '' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="10.5" r="7" />
      <path d="M9 10.6l2 2 4-4.2" />
      <path d="M8.2 16.7 6.5 21l5.5-2.4L17.5 21l-1.7-4.3" />
    </svg>
  )
}

export function IconTag({ className = '' }) {
  return (
    <svg {...base} className={className}>
      <path d="M11.6 3.5H6.2a1 1 0 0 0-1 1v5.4c0 .27.1.52.3.7l9 9a1 1 0 0 0 1.4 0l5.1-5.1a1 1 0 0 0 0-1.4l-9-9a1 1 0 0 0-.4-.6Z" />
      <circle cx="9" cy="8.3" r="1.2" />
    </svg>
  )
}

export function IconWrench({ className = '' }) {
  return (
    <svg {...base} className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.6L3.8 16.4a1.7 1.7 0 0 0 2.4 2.4l5.5-5.5a4 4 0 0 0 4.6-5.4l-2.6 2.6-2-.5-.5-2 2.5-2.7Z" />
    </svg>
  )
}

export function IconWatch({ className = '' }) {
  return (
    <svg {...base} className={className}>
      <path d="M8.5 3.5h7M8.5 20.5h7" />
      <rect x="7" y="6.5" width="10" height="11" rx="3" />
      <path d="M12 9.7V12l1.8 1.1" />
    </svg>
  )
}
