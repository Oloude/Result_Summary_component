/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Hanken_Grotesk": ['"Hanken Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "lightRed" : "#ff5757",
        "oYellow" : "#ffb01f",
        "gTeal" : "#00bd91",
        "cBlue" : "#1125d4",
        "lSBlue" : "#7857ff",
        "lRBlue" : " #2e2be9",
        "vBlue" :  "#4e21ca",
        "pBlue" : "#2421ca",
        "paleBlue" : "#ebf1ff",
        "lLavender" : "#c8c7ff",
        "dGBlue" : "#303b5a",
      }
    },
  },
  plugins: [],
}