/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#F99001"
      },
      backgroundImage: {
        heroBg: "url('../src/assets/Slider.svg')"
      }
    },
  },
  plugins: [],
}