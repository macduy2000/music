/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        'screen-navbar-play':'calc(100vh - 6rem - 6rem)',
        'screen-navbar':'calc(100vh - 6rem)',
        '27':"6.7rem"
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-stop': 'spin 0s linear infinite'
      },
      width:{
        "search":"21rem",
        "song_name":"30.1rem",
        "author":"6.3rem",
        "option":"6.5rem",
        "author_name":"14.3rem"
      },
      margin:{
        "margin_top_search":"1.3rem"
      },
      screens: {
       
        'lg': {'max': '1000px'},
        'laptop': '1024px'
      }
    
      
    },
  },
  
  plugins: [],
}
