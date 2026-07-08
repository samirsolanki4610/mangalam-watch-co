import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Stamp from '../components/Stamp.jsx'
import { getWhatsAppLink } from '../utils/whatsapp.js'

export default function Hero() {
  return (
    <section className="bg-cream py-20 dark:bg-ink-deep sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="label-eyebrow text-center text-maroon dark:text-gold-light"
          >
            Bapunagar, Ahmedabad &middot; Since 1995
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.06 }}
            className="mt-6 text-center text-5xl font-bold leading-tight lg:text-7xl"
          >
            Your Trusted
            <span className="block text-maroon dark:text-gold-light">
              Watch Shop 
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.12 }}
            className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-ink/80 dark:text-cream/80 sm:text-xl"
          >
            Discover quality watches for men, women, and children. Visit our store in Bapunagar or chat with us on WhatsApp to know more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.18 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Link
              to="/shop"
              className="rounded-md border border-ink/25 px-7 py-3 font-body text-sm font-medium tracking-wide text-ink transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink dark:border-cream/25 dark:text-cream dark:hover:border-gold dark:hover:bg-gold dark:hover:text-ink"
            >
              Browse the Shop
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-ink/25 px-7 py-3 font-body text-sm font-medium tracking-wide text-ink transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink dark:border-cream/25 dark:text-cream dark:hover:border-gold dark:hover:bg-gold dark:hover:text-ink"
            >
              Ask on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.24 }}
            className="mt-10 flex items-center gap-6  border-ink/10 pt-6 dark:border-cream/10"
          >
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
        </motion.div>
      </div>
    </section>
  )
}
