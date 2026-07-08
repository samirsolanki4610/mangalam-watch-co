import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import WatchCard from '../components/WatchCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { watches, categories } from '../data/watches.js'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All'
  const [query, setQuery] = useState('')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const filtered = useMemo(() => {
    return watches.filter((w) => {
      const matchesCategory = activeCategory === 'All' || w.category === activeCategory
      const matchesQuery = w.name.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  const setCategory = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams, { replace: true })
  }

  return (
    <div className="bg-cream pb-24 pt-14 dark:bg-ink-deep sm:pt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <p className="label-eyebrow text-maroon dark:text-gold-light">The Showroom</p>
          <h1 className="mt-4 font-body text-3xl font-semibold tracking-tight text-ink dark:text-cream sm:text-4xl">
            Browse Our Collection
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink/65 dark:text-cream/65">
            Everything shown here is available to view at our Bapunagar shop. Tap any watch to see
            more, then call or WhatsApp us to check availability.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {['All', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-md border px-4 py-2 font-body text-xs font-medium tracking-wide transition-colors duration-200 sm:text-sm ${
                  activeCategory === cat
                    ? 'border-maroon bg-maroon text-cream'
                    : 'border-ink/15 text-ink/70 hover:border-gold/60 dark:border-cream/15 dark:text-cream/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search watches..."
              className="w-full rounded-md border border-ink/15 bg-cream-card px-5 py-2.5 font-body text-sm text-ink placeholder:text-ink/40 focus:border-gold dark:border-cream/15 dark:bg-ink-card dark:text-cream sm:w-64"
            />
          </div>
        </div>

        <p className="mt-6 label-eyebrow text-ink/50 dark:text-cream/50">
          {filtered.length} watch{filtered.length !== 1 ? 'es' : ''} found
        </p>

        {filtered.length > 0 ? (
          <div className="mt-6 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((w, i) => (
              <WatchCard key={w.id} watch={w} index={i} />
            ))}
          </div>
        ) : (
          <Reveal className="mt-20 text-center text-ink/60 dark:text-cream/60">
            No watches match that search. Try a different name or category.
          </Reveal>
        )}
      </div>
    </div>
  )
}
