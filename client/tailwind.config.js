/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "aliceblue": {
          100: "#ecf9ff",
          200: "#DFF3FD"
        },
        "softgreen": "#8CF3E9",
        "primary": "#060640",
        "gray": {
          200: "#9090A7"
        },
        "off-white": "#FAFAFB",
        "dark-blue": "#060640",
      }
    },
  },
  plugins: [],
}

