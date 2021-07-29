const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        primary: "#45494d",
        secondary: "#ffefe0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
