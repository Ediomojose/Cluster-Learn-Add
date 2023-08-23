/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'natural-black': '#0F172A',
        'natural-orange': '#E76F51',
        'natural-light-green': '#2A9D8F',

      },
    },
  },
  plugins: [],
}

