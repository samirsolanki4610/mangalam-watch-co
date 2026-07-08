import { Link } from 'react-router-dom'
import {
  getCallLink,
  getMailLink,
  getWhatsAppLink,
  SHOP_PHONE_DISPLAY,
  SHOP_EMAIL,
} from '../utils/whatsapp.js'

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-cream border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">

        <div className="grid gap-20 md:grid-cols-[1.4fr_1fr_1fr]">

          {/* Company */}
          <div>
            <h3 className="text-sm !font-xl font-semibold uppercase tracking-[0.25em] text-gold-light">
              About Us
            </h3>

              <ul className="mt-6 space-y-4 text-sm text-cream/75">
                <li>• Watch Sales</li>
                <li>• Repair Services</li>
                <li>• Battery Replacement</li>
                <li>• Strap & Glass Replacement</li>
              </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">
              Explore
            </h4>

            <ul className="mt-6 space-y-4 text-[15px] text-cream/80">
              <li>
                <Link
                  to="/"
                  className="transition hover:text-gold-light"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="transition hover:text-gold-light"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-gold-light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">
              Visit Us
            </h4>

            <ul className="mt-6 space-y-4 text-sm text-cream/75">
              <li>
                <a
                  href={getCallLink()}
                  className="transition hover:text-gold-light"
                >
                  {SHOP_PHONE_DISPLAY}
                </a>
              </li>

              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-gold-light"
                >
                  WhatsApp Us
                </a>
              </li>

              <li>
                <a
                  href={getMailLink()}
                  className="transition hover:text-gold-light"
                >
                  {SHOP_EMAIL}
                </a>
              </li>

              <li>Bapunagar, Ahmedabad, Gujarat</li>

              <li>Open Daily • 10:30 AM – 10:00 PM</li>
            </ul>
          </div>

        </div>

        <div className="mt-14 border-t border-gold/10 pt-6">
          <p className="text-center text-sm text-cream/45">
            © {new Date().getFullYear()} Mangalam Watch Co. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}