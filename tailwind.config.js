/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg: '#0a0a0a',
        surface: '#111111',
        'surface-2': '#1a1a1a',
        border: 'rgba(255,255,255,0.08)',
        muted: 'rgba(255,255,255,0.45)',
        'muted-2': 'rgba(255,255,255,0.25)',
      },
      maxWidth: { container: '1200px' },
    },
  },
  plugins: [],
};
