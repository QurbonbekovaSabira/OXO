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
        gray: "#888888",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
