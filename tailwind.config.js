// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      maxWidth:{
        container: "1300px"
      },
      fontFamily: {
        'dm': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'dropdownColor': '#262626',
      },
    },
  },
  plugins: [],
};