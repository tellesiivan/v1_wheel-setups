const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      brand: {
        main: "rgb(247, 249, 249)",
        gray: {
          active: "#f4f4f4",
        },
        pastelYellow: "#fffcb4",
        border: "#e6e6e6",
      },
      default: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
    },
  },

  plugins: [],
};
