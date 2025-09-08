/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./*.html",
      "./src/**/*.html",
      "./public/**/*.html",
      "./assets/js/**/*.js",
      "./public/js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#fdb101ff",
          orange: "#eb8317",
          dark: "#1a1a1a",
          rose: "#FF6666",
          blue: "#BCE7FD",
          white: "#f5f5dc",
          purple: "#5D2E8C",
          red: "#5F0B15"
        }
      }
    }
  },
  plugins: [],
}