module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#34547f',
          200: '#1a3e6f',
          300: '#01295F',
        },
        sky: {
          100: '#7ab7e0',
          200: '#6aaedc',
          300: '#59A5D8',
        },
        orange: {
          100: '#ff9733',
          200: '#ff8a1a',
          300: '#FF7D00',
        },
      },
      fontFamily: {
        body: ['Montserrat']
      },
    },
  },
  plugins: [],
}
