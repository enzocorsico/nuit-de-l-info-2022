/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '150': '43rem',
      },
      width: {
        '100': '80rem',
      },
      minHeight: {
        '30': '15rem',
      },
      minWidth: {
        '50': '20rem',
      },
    },
  },
  plugins: [],
}
