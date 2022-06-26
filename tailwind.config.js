const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontWeight: {
        normal: 400
      },
      colors: {
        rose: colors.rose
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}