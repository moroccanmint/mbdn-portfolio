/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'taupe': '#443C32',
        'ebony': '#595A3E',
        'blackolive': '#3B3731',
        'beaver': '#A78D74',
        'ecru': '#B5AA7F',
        'khaki': '#B3A79A',
        'coyote': '#735B40',
        'battleshipgray': '#8D8568',
      },
    },
  },
  plugins: [],
}