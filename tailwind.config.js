/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        main: '#FF9d7b',
        secondary: '#E95C63'
      }
    }
  },
  plugins: []
}
