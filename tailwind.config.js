/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '25px'
      },
      borderRadius: {
        'custom': '0px 20px 20px 0px',
      },
      fontFamily: {
        primary: ['"Fixel Text"', 'sans-serif'],
        secondary: ['"SF Pro Text"', 'sans-serif'],
        third: ['"Inter"', 'sans-serif'],
        font3: ['"SF Pro"', 'sans-serif'],
        font4: ['"Fixel Display"', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#040B2C',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        blob: "blob 7s infinite",
        'wave': 'wave 3s ease-in-out infinite',
        'borderWave': 'borderWave 2s ease-in-out infinite',
        'cardWave': 'cardWave 3s ease-in-out infinite',
        'wave-1': 'move-forever 7s cubic-bezier(0.55,0.5,0.45,0.5) infinite',
        'wave-2': 'move-forever 10s cubic-bezier(0.55,0.5,0.45,0.5) infinite',
        'wave-3': 'move-forever 13s cubic-bezier(0.55,0.5,0.45,0.5) infinite',
        'wave-4': 'move-forever 20s cubic-bezier(0.55,0.5,0.45,0.5) infinite'
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        wave: {
          '0%': { 
            d: 'path("M0,0 L100,0 L100,100 L0,100 Z")',
            strokeOpacity: '0.5'
          },
          '50%': { 
            d: 'path("M0,3 L5,0 L100,5 L95,100 L5,95 L0,100 Z")',
            strokeOpacity: '1'
          },
          '100%': { 
            d: 'path("M0,0 L100,0 L100,100 L0,100 Z")',
            strokeOpacity: '0.5'
          }
        },
        borderWave: {
          '0%': { 
            transform: 'scale(1)',
            opacity: 0.8
          },
          '50%': { 
            transform: 'scale(1.01)',
            opacity: 0.4
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: 0.8
          }
        },
        cardWave: {
          '0%': { 
            transform: 'scale(0.98)',
            opacity: '0.5'
          },
          '50%': { 
            transform: 'scale(1)',
            opacity: '0.8'
          },
          '100%': { 
            transform: 'scale(0.98)',
            opacity: '0.5'
          }
        },
        'move-forever': {
          '0%': { transform: 'translate3d(-90px,0,0)' },
          '100%': { transform: 'translate3d(85px,0,0)' }
        }
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#06142E",
          "secondary": "#667183",
          "accent": "#005CF9",
          "neutral": "#ECF8FF",
          "base-100": "#06142E",
          "info": "#333E51",
          "error": "#FF4D4D",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};