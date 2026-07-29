/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'custom-blue': 'rgba(28, 100, 242, 1)',
        'banner-color1': '#fdc200',
        'banner-color2': '#ff2c2c',
        'banner-color3': '#21ad61',
        'banner-color4': '#723da6',
      },
      boxShadow: {
        'custom': '0 0 15px rgba(0, 0, 0, 0.3)',
        'right': '10px 0px 10px -5px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #111827, #1f2937)',
        'button-gradient': 'linear-gradient(to right, #7e22ce, #ef4444)',
        'custom-gradient2': 'linear-gradient(135deg, #f5f5f5, #eae7dc)',
      },
    },
  },
  plugins: [],
}