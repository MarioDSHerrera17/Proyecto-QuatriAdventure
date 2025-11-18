/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nature': {
          // Blancos y grises limpios
          'white': '#ffffff',
          'light': '#f8fafc',
          'muted': '#64748b',
          
          // Verdes como acentos (más sutiles)
          'primary': '#16a34a',    // Verde vibrante pero no invasivo
          'secondary': '#22c55e',  // Verde más claro
          'dark': '#15803d',       // Verde oscuro para hover
          'light': '#dcfce7',      // Verde muy claro para fondos
          
          // Tierras neutras
          'stone': '#78716c',
          'sand': '#e7e5e4'
        }
      },
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
        'green-gradient': 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
      }
    },
  },
  plugins: [],
}