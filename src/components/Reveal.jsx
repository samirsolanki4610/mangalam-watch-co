import { motion } from 'framer-motion'

/**
 * Generic scroll-reveal wrapper. A short, restrained fade + lift as content
 * enters the viewport — kept under 300ms per the site's subtle-motion rule.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 14,
  className = '',
  as = 'div',
  once = true,
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.3, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
