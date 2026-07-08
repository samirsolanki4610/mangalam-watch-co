/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm, ledger-paper neutrals — the primary (light) surface family
        cream: {
          DEFAULT: '#F5EFDF',
          soft: '#FAF6EC',
          card: '#FFFDF7',
        },
        sand: {
          DEFAULT: '#EBE1C8',
          dark: '#DCCEA8',
        },
        // Warm near-black ink, used for text and the dark theme — never pure black/navy
        ink: {
          DEFAULT: '#2B2620',
          soft: '#4A4238',
          faint: '#7A6F5F',
          deep: '#18140F',
          card: '#231D16',
        },
        // Deep bottle green — the shop's heritage colour
        green: {
          DEFAULT: '#1F4B3F',
          deep: '#123028',
          light: '#3B7360',
        },
        // Signature maroon — shop-signage red, used for primary actions
        maroon: {
          DEFAULT: '#8C2F39',
          deep: '#6B222A',
          light: '#AC4B54',
        },
        // Muted gold — hallmark/stamp colour, used sparingly for rules & accents
        gold: {
          DEFAULT: '#B0813C',
          light: '#D2AC6E',
          pale: '#E9D8AE',
          dark: '#8A6329',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'serif'],
        body: ['"Work Sans"', 'ui-sans-serif', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.14em' }],
      },
      boxShadow: {
        ledger: '0 16px 40px -18px rgba(24, 20, 15, 0.28)',
        stamp: '0 1px 0 rgba(176,129,60,0.5), 0 10px 26px -14px rgba(24,20,15,0.45)',
        card: '0 1px 2px rgba(24,20,15,0.06), 0 10px 24px -16px rgba(24,20,15,0.22)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.3s ease-out both',
      },
      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [],
}
