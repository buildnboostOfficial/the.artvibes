module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#fffff1",
        },
      },
      fontFamily: {
        body: "Jost, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
