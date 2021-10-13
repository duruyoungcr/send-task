const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '450px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        light: 'rgba(255, 131, 119, 0.1)',
        DEFAULT: '#ffffff',
        dark: '#858E93',
      },
      gray: {
        darkest: '#303030',
        dark: '#acb1bb',
        DEFAULT: '#e0e0e0',
        light: '#F1F2F5',
        lightest: '#d0d5d9',
      },
      green: {
        light: '#2C665D',
        DEFAULT: '#4DC274',
        dark: '#2A2A2A'
      },
      blue: {
        DEFAULT: '#0747a6',
        dark: '#0847a6'
      }
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'xl': '20px',
      '2xl': '26px',
      '3xl': '34px'
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover', 'focus'],
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
