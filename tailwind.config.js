/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '360px', // Ukuran mobile biasa
        iphone11: '375px', // iPhone 11 Pro
        ipad: '1024px', // iPad Pro 12.9" (portrait)
        desktop: '1440px', // Deskto[]
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        sm: '0.8125rem', //13px
        base: '0.875rem', //14px
        15: '0.9375rem', //15px
        16: '1rem', //16px
        'vertical-menu-item-font-size': '0.875rem',
      },
      colors: {
        primary: '#EF4444', // Merah dari Tailwind
        darkRed: '#DC2626', // Merah lebih gelap
      },
    },
  },
  plugins: [],
};
