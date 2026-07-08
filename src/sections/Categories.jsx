import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import SectionDivider from '../components/SectionDivider.jsx'

const categories = [
  {
    name: "Men's Watches",
    image: 'https://picsum.photos/seed/mangalam-men-cat/600/750',
    blurb: 'Sturdy, classic builds for daily wear and formal occasions alike.',
  },
  {
    name: "Women's Watches",
    image: 'https://picsum.photos/seed/mangalam-women-cat/600/750',
    blurb: 'Graceful dials and comfortable straps, sized for every wrist.',
  },
  {
    name: "Kids' Watches",
    image: 'https://picsum.photos/seed/mangalam-kids-cat/600/750',
    blurb: 'Playground-tough watches that make learning to tell time fun.',
  },
]

export default function Categories() {
  return (
    <section className="bg-sand py-20 dark:bg-ink-card sm:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
        <Reveal>
          <p className="label-eyebrow text-maroon dark:text-gold-light">Shop By Category</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink dark:text-cream sm:text-4xl">
            Something for every wrist in the family.
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-8 px-6 sm:px-8 md:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.name} delay={i * 0.06}>
            <Link
              to={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="group relative block overflow-hidden rounded-lg shadow-ledger"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-96 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                <h3 className="font-display text-2xl font-semibold text-cream">{cat.name}</h3>
                <p className="mt-2 text-sm text-cream/70">{cat.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-2 label-eyebrow text-gold-light">
                  Explore
                  <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 text-gold-dark dark:text-gold-light">
        <SectionDivider />
      </div>
    </section>
  )
}
