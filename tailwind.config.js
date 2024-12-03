  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Purple-100":"hsl(254, 88%, 90%)",
        "Purple-500":"hsl(256, 67%, 59%)",
        "Yellow-100": "hsl(31, 66%, 93%)",
        "Yellow-500": "hsl(39, 100%, 71%)",
      },
      fontFamily:{
        "DM-Sans": "Dm Sans"
      },
     screens: { 
      'xs': '475px', 
      '2xl': '1440px', 
      '3xl': '1600px',
      'md' : "1000px"
    },
  },
  plugins: [],
  }
}