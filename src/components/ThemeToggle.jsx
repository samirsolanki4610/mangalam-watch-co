import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className="relative flex h-8 w-14 items-center rounded-full border border-gold/50 bg-ink/5 px-1 transition-colors duration-200 dark:bg-cream/10"
    >
      <motion.span
        layout
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-ink-deep shadow-stamp"
        style={{ marginLeft: isDark ? 'auto' : 0 }}
      >
        {isDark ? (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
            <path d="M12 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm0 15a5 5 0 100-10 5 5 0 000 10zm9-6a1 1 0 010 2h-1a1 1 0 110-2h1zM4 12a1 1 0 010 2H3a1 1 0 110-2h1zm14.36-6.36a1 1 0 011.42 1.42l-.71.7a1 1 0 11-1.42-1.41l.71-.71zM6.34 17.66a1 1 0 011.42 1.41l-.71.71a1 1 0 11-1.42-1.42l.71-.7zM17.66 17.66l.71.7a1 1 0 11-1.42 1.42l-.7-.71a1 1 0 111.41-1.41zM6.34 6.34l-.7-.71A1 1 0 117.05 4.2l.71.71A1 1 0 116.34 6.34zM12 20a1 1 0 011 1v-1a1 1 0 10-2 0v1a1 1 0 011-1z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
            <path d="M20.742 13.045a8.088 8.088 0 01-2.077.273c-4.556 0-8.25-3.694-8.25-8.25 0-1.517.409-2.937 1.126-4.157a.5.5 0 00-.585-.733A10.09 10.09 0 002 10.5C2 16.299 6.701 21 12.5 21c4.634 0 8.573-3.007 9.958-7.178a.5.5 0 00-.716-.577z" />
          </svg>
        )}
      </motion.span>
    </button>
  )
}
