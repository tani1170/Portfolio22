/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      beige_light: "#f8ebdb",
      beige_dark: "#d4c6a9",
      green_light: "#a1a67c",
      green_dark: "#6c7653",
      dark: "#484F37",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      backgroundImage: {
        "footer-figur":
          "url('img/expand_footer.svg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
