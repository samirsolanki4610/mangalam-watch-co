import Reveal from '../components/Reveal.jsx'
import DialMark from '../components/DialMark.jsx'
import { IconBattery, IconStrap, IconDial, IconSparkle, IconDroplet, IconGear } from '../components/Icons.jsx'
import { getWhatsAppLink } from '../utils/whatsapp.js'

const services = [
  { name: 'Battery Replacement', Icon: IconBattery },
  { name: 'Strap & Belt Repair', Icon: IconStrap },
  { name: 'Glass / Dial Replacement', Icon: IconDial },
  { name: 'Full Servicing & Cleaning', Icon: IconSparkle },
  { name: 'Waterproofing Check', Icon: IconDroplet },
  { name: 'Movement Repair', Icon: IconGear },
]

export default function RepairServices() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 dark:bg-ink-deep sm:py-28">
      <div className="ledger-rule mb-16 text-ink/10 dark:text-cream/10">
        <span className="h-1.5 w-1.5 rotate-45 shrink-0 bg-current" />
      </div>

      {/* Faint watch-bezel watermark — the section's quiet signature, not a colour block */}
      <DialMark className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] text-ink/[0.035] dark:text-cream/[0.04] sm:-right-16 sm:-top-16" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow !text-3xl text-maroon dark:text-gold-light">Repair Counter</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink dark:text-cream sm:text-4xl lg:text-5xl">
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65 dark:text-cream/65">
            A watch is a small piece of family history — worth repairing, not replacing. Our
            in-house technicians service watches of every make, bought here or anywhere else.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ name, Icon }) => (
              <div
                key={name}
                className="group flex items-center gap-4 rounded-xl border border-ink/10 bg-cream-card p-5 shadow-card transition-all duration-250 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-ledger dark:border-gold/15 dark:bg-ink-card dark:hover:border-gold/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold-dark transition-colors duration-250 group-hover:bg-gold/20 dark:text-gold-light">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-body text-sm font-medium text-ink dark:text-cream">{name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-ink/25 px-7 py-3 font-body text-sm font-medium tracking-wide text-ink transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink dark:border-cream/25 dark:text-cream dark:hover:border-gold dark:hover:bg-gold dark:hover:text-ink"
            >
              Contact for Repair
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
