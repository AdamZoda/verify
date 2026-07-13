/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyelite: {
          dark: '#202A36',
          darkHover: '#1a2229',
        }
      }
    },
  },
  plugins: [],
}
