/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1150px",
        },
      },
      colors: {
        primary: "#19191C",
        black: "#000",
        white: "#FFF",
        red: "#EA3838",
        "glowing-brake-disc": "#eb4444",
        gray: "#888888",
        "harrison-grey": "#979c9e",
        jupiter: " #e1e1e1",
        "cascading-white": "#f6f6f6",
        "white-edgar": " #ededed ",
        "black-out": "#222222",
        "dark-void": "#131418",
        "coarse-wool": "#181d27",
        "black-out": " #222222",
        placebo: "#e7e7e7",
        dugong: "#707070",
        "light-pensive": "#d1d1d6",
        "wood-charcoal": "#464646",
        "chefs-hat": "#f2f4f5",
        ice: "#23E5DB",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
