/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#000000",
        primary: "#302340 ",
        secondary: "#1F2544 ",
        darkText: "#6A1E55",
        darkLink: "#474F7A "
      },
      height: {
        screen: "100dvh",
        "screen-small": "100svh",
        "screen-large": "100lvh",
      },
      weight: {
        screen: "100dvw",
        "screen-small": "100svw",
        "screen-large": "100lvw",
      },
    },
  },
  plugins: [],
};