/** @type {import('tailwindcss').Config} */
export default {
  // Enable dark mode using a CSS class
  darkMode: 'class',

  // Tell Tailwind where to find your HTML and JS/TS/React files
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  // Extend or customize your theme (optional)
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', //  (blue-600)
        accent: '#f97316',  //  (orange-500)
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif'], // optional custom font
      },
    },
  },

  // Add plugins (optional)
  plugins: [],
}