/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      rotate: {
        270: "270deg",
      },
      fontSize: {
        "10xl": "20.8vw",
      },
      colors: {
        fontColor: "#f4eee0",
        bgColor: "#000",
        bgColorLight: "rgba(57, 54, 70, 0.1)",
        titleColor: "rgba(57, 54, 70, 0.300)",
        highlight: "#f8e559",
        fontColor2: "#000",
        bgColor2: "#f4eee0",
        bgColorLight2: "rgba(57, 54, 70, 0.978)",
        titleColor2: "rgba(200, 197, 213, 0.1)",
        highlight2: "#4e94ff",
      },
      height: {
        xl: "500px",
      },
      borderWidth: {
        1: "1px",
      },
      top: {
        18: "4.5rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
