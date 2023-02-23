/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      primary : 'rgba(15, 207, 236, 1)'
    },
  },
  plugins: [require("daisyui")],
}
