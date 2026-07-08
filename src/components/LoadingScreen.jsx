import { motion } from 'framer-motion'

/**
 * Minimal loading screen — a single hairline spinner on the site's base
 * surface. No mark, no motion beyond the spin itself, gone in under a
 * second. The spin is a plain CSS animation (animate-spin) so it's
 * automatically stilled by the prefers-reduced-motion rule in index.css.
 */
export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-cream-soft dark:bg-ink-deep"
    >
      <div
        className="h-9 w-9 animate-spin rounded-full border-2 border-gold/25 border-t-gold-dark dark:border-gold/20 dark:border-t-gold-light"
        role="status"
        aria-label="Loading"
      />
    </motion.div>
  )
}
