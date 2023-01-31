/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pizza': "url('../../public/images/pizza.jpeg')",
      },
      colors: {
        'regal-blue': '#121619',
      },
    },
  },
  plugins: [],
}
