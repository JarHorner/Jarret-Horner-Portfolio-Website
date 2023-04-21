/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStopPositions: {
        33: '33%',
      }
    },
    fontFamily: {
      'sans': ["Montserrat", 'ui-sans-serif', 'system-ui'],
      'serif': ["Secular One", 'ui-serif', 'Georgia']
    }
  },
  plugins: [],
}
