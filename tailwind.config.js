module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.ts',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
