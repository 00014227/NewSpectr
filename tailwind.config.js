/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
       },
     },

     listStyleType: {
       square: 'square',
       disc: 'disc',
     },
     

    //  backgroundSize: {
    //   'auto': 'auto',
    //   'cover': 'cover',
    //   'contain': 'contain',
    //   '50%': '50%',
    //   '16': '4rem',
    // }
  },
  plugins: [],
}