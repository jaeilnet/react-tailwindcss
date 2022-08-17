/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: false,
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
      },
    },
  },
  variants: {
    extends: {},
  },
  plugins: [],
};
