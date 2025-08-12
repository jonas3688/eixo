/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a0a0a',
        'brand-primary': '#1d71b8',
        'brand-secondary': '#36a9e1',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'cursive'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};