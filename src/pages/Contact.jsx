import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getCallLink, getMailLink, getWhatsAppLink, SHOP_EMAIL, SHOP_PHONE_DISPLAY } from '../utils/whatsapp.js'

const INSTAGRAM_HANDLE = 'mangalam.watch.co'
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`
const MAPS_URL = 'https://maps.app.goo.gl/eyjaJfcwgB2yGP3N9'

function Icon({ path, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={path} />
    </svg>
  )
}

const icons = {
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z',
  chat: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  mail: 'M4 4h16v16H4zM4 6l8 7 8-7',
  camera: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  pin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
}

const contactMethods = [
  { icon: icons.phone, label: 'Phone', value: SHOP_PHONE_DISPLAY, href: getCallLink() },
  { icon: icons.chat, label: 'WhatsApp', value: 'Message us directly', href: getWhatsAppLink() },
  { icon: icons.mail, label: 'Email', value: SHOP_EMAIL, href: getMailLink() },
  { icon: icons.camera, label: 'Instagram', value: `@${INSTAGRAM_HANDLE}`, href: INSTAGRAM_URL },
  { icon: icons.pin, label: 'Address', value: 'Bapunagar, Ahmedabad, Gujarat', href: MAPS_URL },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="relative bg-cream pb-24 pt-14 dark:bg-ink-deep sm:pt-20">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <p className="label-eyebrow text-maroon dark:text-gold-light">Get In Touch</p>
          <h1 className="mt-4 font-body text-3xl font-semibold tracking-tight text-ink dark:text-cream sm:text-4xl">
            Visit Our Watch Store
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink/65 dark:text-cream/65">
            Call, message, or drop by — whichever is easiest for you. We're open every day, 10:30 AM to 10:00 PM.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.06 }}
            className="space-y-3"
          >
            {contactMethods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.label === 'Instagram' || m.label === 'Address' ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-ink/10 bg-cream-card p-5 shadow-card transition-colors duration-200 hover:border-gold/50 dark:border-gold/15 dark:bg-ink-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold-dark dark:text-gold-light">
                  <Icon path={m.icon} />
                </span>
                <span>
                  <span className="block label-eyebrow text-maroon dark:text-gold-light">
                    {m.label}
                  </span>
                  <span className="block font-body text-sm text-ink dark:text-cream">{m.value}</span>
                </span>
              </a>
            ))}

            <div className="flex items-center gap-4 rounded-lg border border-ink/10 bg-cream-card p-5 shadow-card dark:border-gold/15 dark:bg-ink-card">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold-dark dark:text-gold-light">
                <Icon path={icons.clock} />
              </span>
              <span>
                <span className="block label-eyebrow text-maroon dark:text-gold-light">
                  Business Hours
                </span>
                <span className="block font-body text-sm text-ink dark:text-cream">
                  10:30 AM – 10:00 PM, Daily
                </span>
              </span>
            </div>

            <div className="overflow-hidden rounded-lg border border-gold/25 shadow-card">
              
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-lg border border-gold/25 shadow-card"
              >
                <iframe
                  title="Mangalam Watch Co."
                  src="https://www.google.com/maps?q=Bapunagar,+Ahmedabad,+Gujarat&output=embed"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="pointer-events-none"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.12 }}
            className="rounded-lg border border-ink/10 bg-cream-card p-7 shadow-card dark:border-gold/15 dark:bg-ink-card sm:p-9"
          >
            <h2 className="font-body text-xl font-semibold text-ink dark:text-cream">
              Send us a quick message
            </h2>
            <p className="mt-2 text-sm text-ink/60 dark:text-cream/60">
              This form doesn't place an order — for the fastest reply, use WhatsApp above.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-8 rounded-lg border border-gold/40 bg-gold/10 p-6 text-center"
              >
                <p className="font-display text-lg text-ink dark:text-cream">Thank you, {form.name || 'friend'}!</p>
                <p className="mt-2 text-sm text-ink/70 dark:text-cream/70">
                  We've noted your message. For a quicker response, feel free to WhatsApp or call us directly too.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block label-eyebrow text-ink/60 dark:text-cream/60">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-ink/15 bg-cream px-4 py-3 text-sm text-ink focus:border-gold dark:border-cream/15 dark:bg-ink-deep dark:text-cream"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block label-eyebrow text-ink/60 dark:text-cream/60">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-ink/15 bg-cream px-4 py-3 text-sm text-ink focus:border-gold dark:border-cream/15 dark:bg-ink-deep dark:text-cream"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block label-eyebrow text-ink/60 dark:text-cream/60">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-ink/15 bg-cream px-4 py-3 text-sm text-ink focus:border-gold dark:border-cream/15 dark:bg-ink-deep dark:text-cream"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md border border-cream/20 bg-transparent py-3 font-body text-sm font-medium tracking-wide text-cream transition-all duration-300 hover:bg-gold hover:border-gold hover:text-ink"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
