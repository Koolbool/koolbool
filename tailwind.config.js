/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        button: {
          primary: '#EF9A53',
          active: '#FFA65B',
          disabled: '#EDEDED'
        },
        input: {
          primary: '#7C7C7C',
          secondary: '#C0BCBC'
        }
      }
      
    },
  },
  plugins: [],
}
