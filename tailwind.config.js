const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
    fontFamily: {},
    colors: {
      'primary': '#0393f1',
      transparent: 'transparent',
      current: 'currentColor',
      black: '#141214',
      white: '#ffffff',
      'gray': {
        ...colors.gray,
        50: '#fafafa',
        500: '#abacab',
      },
      sky: colors.sky,
    },
    backgroundImage: {
      'hero-landing': "url('~@/static/landing.svg')",
      'hero-landing-full': "url('~@/static/landing-full.jpg')"
    }
  },
  plugins: [],
}
