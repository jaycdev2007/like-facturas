/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          700: "#020202"
        },
        blue: {
          700: "#3331A6"
        }
      }
    },
  },
  plugins: [],
}
