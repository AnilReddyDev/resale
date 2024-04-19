/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cardColor:"#121212",
        darkgray:"#050505",
        inputgray:"#2b2625"
      },
      boxShadow: {
        '3xl': '0 4px 6px -1px rgb(255 255 255 / 0.1), 0 2px 4px -2px rgb(255 255 255 / 0.1);',
      }
    },
  },
  plugins: [],
}