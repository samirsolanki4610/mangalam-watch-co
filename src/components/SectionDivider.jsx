export default function SectionDivider({ className = '' }) {
  return (
    <div className={`ledger-rule mx-auto max-w-5xl px-6 ${className}`}>
      <span className="h-1.5 w-1.5 rotate-45 shrink-0 bg-current" />
    </div>
  )
}
