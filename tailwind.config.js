/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37', // Example of gold color
        'gold-dark': '#B38B30', // Darker gold for hover effect
      },
    },
  },
  plugins: [],
}