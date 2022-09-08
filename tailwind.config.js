/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#03102B',
        backgroundSection: '#01194B',
        btnGrad: '#CC2239',
        btnGrad2: '#DC5435',
        btnGrad3: '#EC8531',
      },
      fontFamily: {
        'Sans-Pro': ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}