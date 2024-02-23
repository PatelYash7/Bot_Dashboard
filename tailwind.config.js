/** @type {import('tailwindcss').Config} */
export default {
  content: [
	    "./src/**/*.{js,ts,jsx,tsx}",
	    "./index.html"
  ],
  theme: {
    
    fontFamily:{
      main:["Jost", "sans-serif" ]
    },
    extend: {
      colors:{
        'navColor':"#1B2028",
        'sideColor':"#202731",
        'mainColor':"#28313c",
        'lightbg':'#272B33',
        'hoverbg':'#32373E',
        'dropdownbg':'#181F25',
        'sidebarHead':'#383d45',
        'blueHead':'#41bbff'
      },
    },
  },
  plugins: [],
}