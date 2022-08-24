/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat : "'Montserrat',sans-serif",
      },
      screens:{
        '600pix':'600px',
        '800pix':'800px',
        '900pix':'900px',
        '1300pix':'1300px',
        '1550pix':'1550px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), 
  ],
}
