const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/ui')],
}
