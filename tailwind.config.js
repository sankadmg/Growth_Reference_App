/** @type {import('tailwindcss').Config} */
const colors = require('./colors');
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './Navigations/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
