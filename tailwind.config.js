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
      },
      animation:{
        blob:"blob 3s infinite"
      },
      keyframes:{
        Blob:{
          "0%":{
            transform:"translate(0px, 0px) scale(1)",
          },
          "33%":{
            transform:"translate(30px, -50px) scale(1.2)",
          },
          "66%":{
            transform:"translate(-20px, 20px) scale(0.8)",
          },
          "100%":{
            transform:"translate(0px, 0px) scale(1)",
          },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), 
  ],
}
