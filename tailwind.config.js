/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#FFD700',
          300: '#FFE44D',
        },
        sienna: {
          400: '#A0522D',
          300: '#A0522D', // You can adjust the shade as needed
        },
      },
    },
  },
  plugins: [],
};
