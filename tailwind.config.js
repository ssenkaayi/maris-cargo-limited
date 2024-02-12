/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'regal-violet': 'rgb(113, 99, 186, 255)',
        'menu':'#e0e0e058',
        'menu-color':'#fff'
        
      },
      width:{
        'sidebar':'110px',
        'hover':'240px'
        
      },
      height:{
        'sidebar':'100vh',
        'logo':'80px',
        'menu':'88%'
      },
      padding:{
        'sidebar-padding':'0 1.7rem',
        'logo':'16px',
        'header':'10px 2rem'
      },
      transitionProperty:{
        'sidebar':'transition-all 0.5s linear',
        'li':'transition-all 0.5s ease-in-out'
      },
      margin:{
        'li':'8px 0'
      },
      color:{
        'menu-color':'#fff'
        
      }
      
      
      

      

    },

  },
  plugins: [],
}
