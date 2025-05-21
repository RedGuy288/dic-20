/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- IMPORTANT : active le dark mode par classe CSS
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // ici tes extensions de thème
    },
  },
  plugins: [],
}