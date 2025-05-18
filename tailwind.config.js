/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8BE8FF',
          DEFAULT: '#4CC9F0',
          dark: '#0095B6',
        },
        secondary: {
          light: '#FFD166',
          DEFAULT: '#F8961E',
          dark: '#F3722C',
        },
        accent: {
          light: '#F072B6',
          DEFAULT: '#E63F8A',
          dark: '#B50B61',
        },
        background: {
          light: '#F8F9FA',
          DEFAULT: '#E9ECEF',
          dark: '#212529',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'comic': ['"Comic Neue"', 'cursive'],
      },
      boxShadow: {
        'cartoon': '0 4px 0 0 rgba(0, 0, 0, 0.1)',
        'cartoon-hover': '0 7px 0 0 rgba(0, 0, 0, 0.1)',
        'cartoon-dark': '0 4px 0 0 rgba(255, 255, 255, 0.1)',
        'cartoon-hover-dark': '0 7px 0 0 rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        'cartoon': '1.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-short': 'bounce-short 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-short': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [],
}