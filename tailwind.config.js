/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        select: "#FCF7FF",
        primary: "#8576FF",
        primaryDark: "#484554",
        primarySelect: "#ADA9BB",
      },
    },
  },
  plugins: [],
};
