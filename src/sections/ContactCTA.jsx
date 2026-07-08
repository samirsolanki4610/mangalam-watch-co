import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import DialMark from '../components/DialMark.jsx'
import { getCallLink, getWhatsAppLink, SHOP_PHONE_DISPLAY } from '../utils/whatsapp.js'

export default function ContactCTA() {
  return (
    <section className="relative bg-cream py-20 dark:bg-ink-deep sm:py-28">
      <div className="ledger-rule mb-16 text-ink/10 dark:text-cream/10">
        <span className="h-1.5 w-1.5 rotate-45 shrink-0 bg-current" />
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <Reveal
          as="div"
          className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gold/10 px-6 py-14 text-center shadow-stamp dark:border-gold/25 dark:bg-gold/[0.06] sm:px-14 sm:py-16"
        >
          <DialMark className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 text-gold/10 dark:text-gold/10" />

          <div className="relative">
            <p className="label-eyebrow text-maroon dark:text-gold-light">Visit The Counter</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink dark:text-cream sm:text-4xl">
              Found a watch you like?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-ink/70 dark:text-cream/70">
              Call us, message us on WhatsApp, or walk right in — we're at the shop every day,
              10:30 AM to 10:00 PM.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getCallLink()}
                className="rounded-md bg-maroon px-7 py-3 font-body text-sm font-medium tracking-wide text-cream shadow-stamp transition-colors duration-200 hover:bg-maroon-deep"
              >
                Call {SHOP_PHONE_DISPLAY}
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border-2 border-ink/25 px-7 py-3 font-body text-sm font-medium tracking-wide text-ink transition-colors duration-200 hover:border-gold hover:text-gold-dark dark:border-cream/25 dark:text-cream dark:hover:border-gold dark:hover:text-gold-light"
              >
                WhatsApp Us
              </a>
              <Link
                to="/contact"
                className="rounded-md px-7 py-3 font-body text-sm font-medium tracking-wide text-ink/70 underline decoration-ink/30 underline-offset-4 transition-colors duration-200 hover:text-ink dark:text-cream/70 dark:decoration-cream/30 dark:hover:text-cream"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
