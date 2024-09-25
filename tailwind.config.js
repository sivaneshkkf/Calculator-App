/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./data/history.js",
    "./data/data.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
      },
      colors: {
        btn: '#222427',
        secondary: '#ecc94b',
      },
      animation: {
        'pulse-fast': 'pulse 1s linear infinite', 
        blink: 'blink 0.5s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0' },  
          '70%': { opacity: '1' },
          '80%': { opacity: '0' },
        },
      },
      blur: {
        xs: '2px',
      }
    },
    
  },
  plugins: [],
}

