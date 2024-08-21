/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header': '#F2F2F2',
        'donate': '#00B5FF',
      },
    },
  },
  plugins: [],
}