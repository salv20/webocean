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
      backgroundImage:{
        encrypt:"linear-gradient( 130deg, #1c164b  10%, #111335 30%, #111335 50%,#0e1330 60%,#162744 75%,#132c4c 85%)",
        encryptLG:"linear-gradient( 50deg, #1c164b  10%, #111335 30%, #111335 50%,#0e1330 60%,#162744 75%,#132c4c 85%)",
      },
      fontFamily:{
        Lexend: "Lexend"
      },
      colors:{
        primary:' #151934',
        navCol:'#8F9BB7',
        secondary:'#8F9BB7',
        
      },
    },
  },
  plugins: [],
}

