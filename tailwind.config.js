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
        auditLG:"linear-gradient( 145deg,#181344 10%, #0f1332 40%, #0f1332 70%, #0f1f3d 115%)",
        audit:"linear-gradient( 50deg,#0f1f3d 5%, #0f1332 40%, #0f1332 70%, #0f1f3d 85%)",
        sub:'url(/subs.jpg)'
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

