/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b00',
          dark: '#cc5500',
          light: '#ff8533',
        },
        secondary: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      screens: {
        'xs': '375px',
      },
      fontSize: {
        'xxs': '0.625rem',
      },
    },
  },
  plugins: [],
}