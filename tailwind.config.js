/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        violet:{
          123:"#343d53"
        },
        blue:{
          900:"#1f2641",
          350:"#156fb4",
          600:"#1174c2",
          700:"#146eb4",
          500:"#146fb5",
          800:"#0e4f82"
        },
        gray:{
          150:"#343c52",
          110:"#d2d5d8",
          111:"#4a5164"
        }
      }
    },
  },
  plugins: [],
}