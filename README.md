# Mangalam Watch Co. — Digital Showroom

A React + Vite + Tailwind CSS website for Mangalam Watch Co., Bapunagar, Ahmedabad.
This is a digital showroom, not an online store — customers browse watches, then call,
WhatsApp, or visit the shop to buy.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/     Navbar, Footer, WatchCard, ThemeToggle, Gear icon, etc.
  sections/       Individual Home-page sections (Hero, About, Categories, ...)
  pages/          Home.jsx, Shop.jsx, ProductDetails.jsx, Contact.jsx
  data/
    watches.js      <-- YOUR PRODUCT CATALOGUE (see below)
    testimonials.js  Customer quotes shown on Home
    faq.js           FAQ shown on Home
  utils/
    warranty.js     Auto-calculates warranty from price
    whatsapp.js     WhatsApp / call / email link builders + shop contact info
```

## Replacing Sample Products with Your Own

Open `src/data/watches.js`. It currently holds ~74 sample watches with
placeholder photos. Each entry looks like this:

```js
{
  id: 1,
  slug: "your-watch-name-1",       // used in the URL, must be unique
  name: "Solanki Heritage Auto",
  category: "Men's Watches",       // must be one of: Men's Watches / Women's Watches / Kids' Watches
  price: 1250,
  description: "A short 2-3 line description shown on the details page.",
  images: ["image-url-1.jpg", "image-url-2.jpg"],
},
```

To use your own photos:

1. Drop your images into `public/products/` (create the folder).
2. Reference them as `"/products/your-photo.jpg"` in the `images` array.
3. Warranty is calculated automatically from `price` — you never need to set it manually:
   - ₹100–₹499 → 3 Months
   - ₹500–₹999 → 6 Months
   - ₹1000+ → 12 Months

## Replacing the Logo

Swap `public/logo.png` with your own logo (used in the navbar, footer, loading
screen, and contact page). The `public/favicon-*.png` files are generated from
the logo for the browser tab icon — regenerate them from your new logo using
any favicon generator, or ask a developer to resize your logo to 16×16, 32×32,
48×48, and 180×180 PNGs with the same filenames.

## Shop Contact Info

Phone, WhatsApp number, and email live in one place:
`src/utils/whatsapp.js`. Update `SHOP_PHONE` and `SHOP_EMAIL` there if they
ever change, and every button across the site (Call Shop, Ask on WhatsApp,
footer, contact page) updates automatically.

The Instagram handle and Google Maps query are set directly in
`src/pages/Contact.jsx` near the top of the file.

## Theme

Colors are defined in `tailwind.config.js` under `theme.extend.colors`
(`navy`, `brass`, `leather`, `ivory`) — derived from the shop's logo. Dark/light
mode is handled by `src/context/ThemeContext.jsx` and persists per visitor via
localStorage.

## Notes

- This project only has three pages (Home, Shop, Contact) intentionally —
  per the brief, no cart, checkout, or account pages exist anywhere.
- Product cards and the details page deliberately omit ratings, reviews,
  "only a few left" messaging, and add-to-cart — this is a showroom, not a store.
