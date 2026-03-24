/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#d4af37',
          navy: '#123456',
        },
      },
      boxShadow: {
        soft: '0 10px 40px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        hero: "linear-gradient(to right, rgba(2,6,23,.8), rgba(2,6,23,.35)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80')",
      },
    },
  },
  plugins: [],
}
