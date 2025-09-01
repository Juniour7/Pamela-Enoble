/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#fcd34d',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};