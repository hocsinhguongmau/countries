/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      main: '#a78bfa',
      secondary: '#f97316',
      gray: '#6b7280',
      error: '#ef4444',
      success: '#22c55e',
    },
  },
  plugins: [],
}
