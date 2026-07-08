import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import WatchCard from '../components/WatchCard.jsx'
import { watches } from '../data/watches.js'

const featured = watches.filter((_, i) => i % 9 === 1).slice(0, 8)

export default function FeaturedWatches() {
  return (
    <section className="bg-cream py-20 dark:bg-ink-deep sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="label-eyebrow text-maroon dark:text-gold-light">Featured Pieces</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink dark:text-cream sm:text-4xl">
              A few current favourites
            </h2>
          </div>
          <Link
            to="/shop"
            className="rounded-md border border-gold/50 px-6 py-2.5 font-body text-sm font-medium tracking-wide text-gold-dark transition-colors duration-200 hover:bg-gold hover:text-ink-deep dark:text-gold-light"
          >
            View Full Shop
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4">
          {featured.map((w, i) => (
            <WatchCard key={w.id} watch={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
