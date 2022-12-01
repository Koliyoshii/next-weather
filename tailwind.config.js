/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark': '#071013',
      'light': '#F1F3F6',
      'silver': '#A2AEBB',
      'lightblue': '#0096FF',
    },
  },
  plugins: [],
}