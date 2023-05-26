/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      navTitle: ["Lobster Two", "cursive"],
      bannerTitle: ["Rubik Mono One", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
