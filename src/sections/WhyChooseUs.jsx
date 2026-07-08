import Reveal from '../components/Reveal.jsx'
import { IconSeal, IconTag, IconWrench, IconWatch } from '../components/Icons.jsx'

const points = [
  {
    title: 'Trusted Since 1995',
    text: 'Serving customers in Bapunagar for more than 30 years with quality products and reliable service.',
    Icon: IconSeal,
  },
  {
    title: 'Honest Pricing',
    text: 'Fair prices with no hidden charges or unnecessary sales pressure.',
    Icon: IconTag,
  },
  {
    title: 'Repair Services Available',
    text: 'Battery replacement, strap changes, glass replacement, and general watch repairs.',
    Icon: IconWrench,
  },
  {
    title: 'Wide Range of Watches',
    text: 'Affordable watches for men, women, and children from trusted brands.',
    Icon: IconWatch,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-cream pb-24 pt-16 dark:bg-ink-deep sm:pt-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="ledger-rule mb-16 text-ink/10 dark:text-cream/10">
          <span className="h-1.5 w-1.5 rotate-45 shrink-0 bg-current" />
        </div>

        <Reveal className="max-w-xl">
          <p className="label-eyebrow !text-3xl text-maroon dark:text-gold-light">Why Mangalam</p>
          <h2 className="mt-4 font-body text-3xl font-bold tracking-tight text-ink dark:text-cream sm:text-4xl">
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="group h-full rounded-xl border border-ink/10 bg-cream-card p-7 shadow-card transition-all duration-250 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-ledger dark:border-gold/15 dark:bg-ink-card dark:hover:border-gold/40">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold-dark transition-colors duration-250 group-hover:bg-gold/20 dark:text-gold-light">
                    <p.Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-semibold text-ink/20 dark:text-cream/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-5 font-body text-xl font-bold text-ink dark:text-cream">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-cream/65">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
