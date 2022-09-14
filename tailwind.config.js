/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      fontFamily:{
        vazir:["vazir"]
      },
      keyframes:{
        fadein:['fadein']
      },
      animation:{
        'fadein': 'fadein 0.3s ease-in',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}