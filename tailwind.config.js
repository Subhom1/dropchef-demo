/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary_green: "#74C043",
        base_green: "#CAEAC7",
        deep_green:  "#057402"

      }
    },
  },
  plugins: [],
};
