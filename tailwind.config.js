/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f0123',
        secondary: '#38D2D9',
        'main-purple': '#935dc2',
      },
      screens: {
        ph: '768px',
        tb: '1132px',
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
}
