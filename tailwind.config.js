module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        surface: "var(--surface)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
