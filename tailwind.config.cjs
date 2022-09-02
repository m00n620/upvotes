/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rectangle: '#f4f6f8',
        arrow: '#343a40',
        'rectangle-selected': '#e5e8fd',
        'arrow-selected': '#253cf2',
      }
    },
  },
  plugins: [],
};
