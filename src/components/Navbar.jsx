import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? 'border-gold/25 bg-cream-soft/95 backdrop-blur-md dark:border-gold/15 dark:bg-ink-deep/95'
          : 'border-transparent bg-cream-soft/70 backdrop-blur-sm dark:bg-ink-deep/70'
      }`}
    >
      {/* Reading-progress rule, functional rather than decorative */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-maroon dark:bg-gold"
      />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/mangalam-watch-co/logo.png"
            alt="Mangalam Watch Co. crest"
            className="h-10 w-10 rounded-full border border-gold/40 object-cover sm:h-11 sm:w-11"
          />
          <span className="flex flex-col leading-none">
            <span className="font-body text-lg font-semibold tracking-tight text-ink dark:text-cream sm:text-xl">
              Mangalam Watch Co.
            </span>
            <span className="label-eyebrow mt-0.5 text-gold-dark dark:text-gold-light">
              Est. 1995 &middot; Bapunagar
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive
                    ? 'text-maroon dark:text-gold-light'
                    : 'text-ink/70 hover:text-ink dark:text-cream/70 dark:hover:text-cream'
                }`
              }
            >
              {({ isActive }) => (
                <span className="group relative pb-1">
                  {l.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-maroon transition-all duration-200 dark:bg-gold ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              transition={{ duration: 0.2 }}
              className="h-[2px] w-6 bg-ink dark:bg-cream"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="h-[2px] w-6 bg-ink dark:bg-cream"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              transition={{ duration: 0.2 }}
              className="h-[2px] w-6 bg-ink dark:bg-cream"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-gold/20 bg-cream-soft/98 backdrop-blur-md dark:bg-ink-deep/98 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-3 font-body text-base font-medium ${
                      isActive
                        ? 'bg-gold/10 text-maroon dark:text-gold-light'
                        : 'text-ink dark:text-cream'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
