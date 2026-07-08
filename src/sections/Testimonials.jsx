import Reveal from '../components/Reveal.jsx'
import { testimonials } from '../data/testimonials.js'

export default function Testimonials() {
  return (
    <section className="bg-sand py-20 dark:bg-ink-card sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="text-center">
          <p className="label-eyebrow text-maroon dark:text-gold-light">From Our Customers</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink dark:text-cream sm:text-4xl">
            Words from the neighbourhood
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <figure className="flex h-full flex-col justify-between rounded-lg border border-ink/10 bg-cream-card p-6 shadow-card dark:border-gold/15 dark:bg-ink-deep">
                <blockquote className="font-display text-base italic leading-relaxed text-ink/85 dark:text-cream/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-gold/20 pt-4">
                  <p className="font-body text-sm font-medium text-ink dark:text-cream">{t.name}</p>
                  <p className="label-eyebrow text-maroon dark:text-gold-light">{t.area}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
