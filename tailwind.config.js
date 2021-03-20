module.exports = {
  purge: [`_site/**/*.html`],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      red: 'var(--color-red)',
      green: 'var(--color-green)',
      yellow:  'var(--color-yellow)',
      orange: 'var(--color-orange)',
      purple: 'var(--color-purple)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
