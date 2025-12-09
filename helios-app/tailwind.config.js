/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#059669', // Emerald-600
        accent: '#a3e635',  // Lime-400
        background: '#fafaf9', // Stone-50
      }
    },
  },
  plugins: [],
}
