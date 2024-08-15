/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Define custom breakpoints
        'sm': '320px',  // Small screens and up
        'md': '768px',  // Medium screens and up
        // Add other breakpoints as needed
      },
    },
  },
  plugins: [],
}
