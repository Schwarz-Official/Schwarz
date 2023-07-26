/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens :{
        'max-md' : {'max': '1024px'},
      },
      colors: {
        'blue': '#0085FF',
        'red' : '#FF1818',
        'green' : '#00B612',
        'yellow' : '#FD9902',
        'blue_bg' : '#B9DDFF',
        'red_bg' : '#FFE3E3',
        'green_bg' : '#C3FFBE',
        'yellow_bg' : '#FFEDD2',

        // Light theme colors
        'l_grey' : '#868686',
        'l_light_grey' : '#E3E1E3',

        // Dark theme colors
        'd_black' : '#0E0E0E',
        'd_grey_prim' : '#202020',
        'd_white' : '#EAEAEA',
        'd_light_grey' : '#D3D3D3',
        'd_grey_border' : '#363636',
        'd_white_button' : '#EFEFEF',
        'd_grey_sec' : '#363636',
        'd_light_grey_ph' : '#9F9F9F'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}