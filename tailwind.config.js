/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        cyber: {
          DEFAULT: '#00FFFF', // Cyan color
          dark: '#008B8B', // Dark cyan
        },
        green: {
          DEFAULT: '#00FF00', // Green color
          dark: '#006400', // Dark green
        },
      },
      backgroundImage: {
        'grid-cyber': "url('path/to/cyber-grid.png')",
        'grid-green': "url('path/to/green-grid.png')",
      },
    },
  },
  variants: {},
  plugins: [],
};
