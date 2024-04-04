/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      kumbh: ["Kumbh Sans", "sans-serif"],
    },
    extend: {
      screens: {
        tab: "920px",
      },
    },
  },
  plugins: [],
};
