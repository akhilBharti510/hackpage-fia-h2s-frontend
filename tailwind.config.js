/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fia: {
          black: '#09090c',
          panel: '#191923',
          panelSoft: '#252435',
          purple: '#7d35f4',
          purpleLight: '#9c61ff',
          violet: '#26104d',
          line: '#33284f'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif']
      },
      boxShadow: {
        nav: '0 18px 60px rgba(0, 0, 0, 0.32)',
        purple: '0 12px 36px rgba(125, 53, 244, 0.34)',
        purpleSoft: '0 0 42px rgba(125, 53, 244, 0.28)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(-2deg)' },
          '50%': { transform: 'translate3d(0, -18px, 0) rotate(2deg)' }
        },
        orbit: {
          to: { transform: 'rotate(360deg)' }
        },
        shimmer: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(0.95)' },
          '50%': { opacity: '0.9', transform: 'scale(1.06)' }
        }
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        orbit: 'orbit 18s linear infinite',
        shimmer: 'shimmer 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
