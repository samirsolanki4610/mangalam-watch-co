import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getWarranty } from '../utils/warranty.js'

export default function WatchCard({ watch, index = 0 }) {
  const warranty = getWarranty(watch.price)

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.24) }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-lg border border-ink/10 bg-cream-card shadow-card transition-shadow duration-200 hover:shadow-ledger dark:border-gold/15 dark:bg-ink-card"
    >
      <Link to={`/shop/${watch.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-sand dark:bg-ink-deep">
          <img
            src={watch.images[0]}
            alt={watch.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-sm bg-ink-deep/85 px-2.5 py-1 label-eyebrow text-gold-pale">
            {watch.category.replace(' Watches', '')}
          </span>
        </div>

        <div className="p-4 sm:p-5">
          <h3 className="font-body text-base font-semibold text-ink dark:text-cream sm:text-lg">
            {watch.name}
          </h3>
          <div className="mt-2 flex items-end justify-between gap-2">
            <span className="font-display text-lg sm:text-xl font-medium text-maroon dark:text-gold-light">
              ₹{watch.price.toLocaleString('en-IN')}
            </span>

            <span className="shrink-0 text-right label-eyebrow text-ink/45 dark:text-cream/45">
              {warranty}
            </span>
          </div>
          <span className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-gold/60 py-2 font-body text-sm font-medium tracking-wide text-gold-dark transition-colors duration-200 group-hover:bg-gold group-hover:text-ink-deep dark:text-gold-light">
            View Details
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
