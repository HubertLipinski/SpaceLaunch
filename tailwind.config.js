module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#0087e0',
      'gray': {
        50: '#fafafa',
        500: '#abacab',
      },
      'black': '#141214',
      'white': '#fff'
    },
  },
  plugins: [],
}
