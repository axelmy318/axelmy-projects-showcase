module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './src/views/homepage/ColoredCard.js'
    ],
    darkMode: 'class',
    theme: {
        screen: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
            sxl: '1500',
            xxl: '1600px',
            xxxl: '1800px',
            xxxxl: '2000px'
        },
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {},
      },
    },
    plugins: [],
  }