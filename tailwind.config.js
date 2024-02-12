/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
padding:{
  DEFAULT:'25px'
}
    },
    extend: {
      screens:{
        sl:'720px',
      },
      colors:{
        primary:' #151934',
        navCol:'#8F9BB7',
        secondary:'#8F9BB7',

      },
      fontFamily:{
        Saira: '"Saira Condensed", sans-serif',
      }
    },
  },
  plugins: [],
}

