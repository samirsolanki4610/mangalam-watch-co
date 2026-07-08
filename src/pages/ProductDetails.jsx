import { useEffect, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { watches } from '../data/watches.js'
import { getWarranty } from '../utils/warranty.js'
import { getCallLink, getWhatsAppLink } from '../utils/whatsapp.js'

export default function ProductDetails() {
  const { slug } = useParams()
  const watch = watches.find((w) => w.slug === slug)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setActiveImage(0)
  }, [slug])

  if (!watch) return <Navigate to="/shop" replace />

  const warranty = getWarranty(watch.price)

  return (
    <div className="bg-cream pb-24 pt-10 dark:bg-ink-deep sm:pt-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 label-eyebrow text-ink/60 transition-colors duration-200 hover:text-maroon dark:text-cream/60 dark:hover:text-gold-light"
        >
          &larr; Back to Shop
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="overflow-hidden rounded-lg border border-ink/10 shadow-ledger dark:border-gold/15">
              <img
                src={watch.images[activeImage]}
                alt={watch.name}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="mt-4 flex gap-3">
              {watch.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`h-20 w-20 overflow-hidden rounded-md border-2 transition-colors duration-200 ${
                    activeImage === i ? 'border-gold' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${watch.name} view ${i + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.06 }}
          >
            <span className="inline-block rounded-md bg-gold/10 px-3 py-1 label-eyebrow text-gold-dark dark:text-gold-light">
              {watch.category}
            </span>
            <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink dark:text-cream sm:text-4xl">
              {watch.name}
            </h1>

            <div className="mt-5 flex items-center gap-4">
              <span className="font-display text-2xl font-medium text-maroon dark:text-gold-light">
                ₹{watch.price.toLocaleString('en-IN')}
              </span>
              <span className="rounded-md border border-gold/40 px-3 py-1 label-eyebrow text-ink/70 dark:text-cream/70">
                {warranty} Warranty
              </span>
            </div>

            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75 dark:text-cream/75">
              {watch.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={getCallLink()}
                className="inline-flex items-center gap-2 rounded-md bg-ink-deep px-7 py-3 font-body text-sm font-medium tracking-wide text-cream shadow-ledger transition-colors duration-200 hover:bg-ink dark:bg-gold dark:text-ink-deep dark:hover:bg-gold-light"
              >
                Call Shop
              </a>
              <a
                href={getWhatsAppLink(watch.name)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border-2 border-maroon px-7 py-3 font-body text-sm font-medium tracking-wide text-maroon transition-colors duration-200 hover:bg-maroon hover:text-cream dark:border-gold dark:text-gold-light dark:hover:bg-gold dark:hover:text-ink-deep"
              >
                Ask on WhatsApp
              </a>
            </div>

            <p className="mt-8 text-xs text-ink/50 dark:text-cream/50">
              This is a digital showroom — purchases are completed in person at our Bapunagar
              shop or by arrangement over phone/WhatsApp.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
