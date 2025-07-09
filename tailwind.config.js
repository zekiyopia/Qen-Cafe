/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'graphite': '#0a0a0b',
        'deep-violet': '#2d1b69',
        'electric-cyan': '#00ffff',
        'neon-magenta': '#ff00ff',
        'neon-orange': '#ff6b35',
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-dark': 'rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'graffiti': ['Impact', 'Arial Black', 'sans-serif'],
        'amharic': ['Noto Sans Ethiopic', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'particle': 'particle 3s linear infinite',
        'rotate-slow': 'rotate 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px #00ffff' },
          '100%': { boxShadow: '0 0 40px #ff00ff' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        particle: {
          '0%': { transform: 'translate(0, 0) scale(0)', opacity: '1' },
          '100%': { transform: 'translate(100px, -100px) scale(1)', opacity: '0' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};