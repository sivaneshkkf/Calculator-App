/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
          '50%': { opacity: '1' },
        },
      },
      blur: {
        xs: '2px',
      }
    },
    
  },
  plugins: [],
}

