module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a1173',
        secondary: '#ff3366',
        primary: '#1B1464',
        secondary: '#E91E63',
      },
      
        theme: {
          extend: {
            colors: {
              'pink-300': '#F8B4D9',
              'purple-600': '#7C3AED',
              'purple-700': '#6D28D9'
            }
          }
        },
      
      
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom, #2a0a4a, #4a1173)',
      }
    }
  },
  plugins: [],
}