/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'Cbg' : '#131a22',
        'lGreen' : '#01ff86',
        'dGreen' : '#00ff7c'
      }
    },
  },
  plugins: [],
}

