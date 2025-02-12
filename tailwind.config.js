/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideInFromRight: "slideInFromRight 1.5s ease-out",
        slideInFromLeft: "slideInFromLeft 1s ease-out",
      },
    },
  },
  plugins: [],
};
