/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F2B48',
        teal: '#00A896',
        gold: '#D4AF37',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15,43,72,.10)',
      },
    },
  },
  plugins: [],
}
