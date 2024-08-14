const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"Oxygen Mono"', ...defaultTheme.fontFamily.mono]
      },
    },
    colors: {
      'text': {
        DEFAULT: '#0e0c12',
        'dark': '#efedf3',
      },
      'background': {
        DEFAULT: '#f9f7fd',
        'dark': '#040208'
      },
      'primary': {
        DEFAULT: '#2c037c',
        'dark': '#aa82fc',
      },
      'secondary': {
        DEFAULT: '#f46ca5',
        'dark': '#950b44'
      },
      'accent': {
        DEFAULT: '#3fa643',
        'dark': '#5ac05e'
      },
     },     
  },
  plugins: [],
}

