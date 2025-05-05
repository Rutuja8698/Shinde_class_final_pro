// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 3s ease-in-out infinite',
        'scroll-text': 'scrollText 10s linear infinite',
        'glow-text': 'glowText 1.5s ease-in-out infinite alternate',
        'pulse-slow': 'pulseSlow 6s ease-in-out infinite',
        'pulse-slower': 'pulseSlower 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scrollText: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        glowText: {
          '0%': {
            textShadow: '0 0 10px #4682b4, 0 0 20px #4682b4, 0 0 30px #4682b4',
          },
          '100%': {
            textShadow: '0 0 20px #4682b4, 0 0 30px #4682b4, 0 0 40px #4682b4',
          },
        },
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        pulseSlower: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
