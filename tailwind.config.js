export default {
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Josefin Sans"','sans-serif'] },
      colors: {
        brand: {
          blue:     '#336699',
          grey:     '#D2D2D2',
          black:    '#000000',
          white:    '#FFFFFF',
          sky:      '#A8D1E7',
          orange:   '#E88B4D',
          lavender: '#8E7CC3',
          sage:     '#8FBC8F',
          silver:   '#D3D3D3',
        }
      },
      letterSpacing: { ultra: '0.5em', widest: '0.3em' },
    }
  },
  plugins: [],
}
