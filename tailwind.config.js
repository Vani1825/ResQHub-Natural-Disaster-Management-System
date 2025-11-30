/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0d1b2a',
          darker: '#0d0d1f',
          light: '#1b263b',
        },
        accent: {
          red: '#ff3b3f',
          yellow: '#fbbf24',
          blue: '#4da6ff',
          green: '#10b981',
          purple: '#a855f7',
        }
      },
    },
  },
  plugins: [],
}
