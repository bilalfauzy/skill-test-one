/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '360px',
        iphone11: '375px',
        ipad: '1024px',
        desktop: '1440px',
      },
      fontFamily: {
        sans: ['Open Sans', 'Inter'],
      },
      fontSize: {
        sm: '0.8125rem',
        base: '0.875rem',
        15: '0.9375rem',
        16: '1rem',
        'vertical-menu-item-font-size': '0.875rem',
      },
      colors: {
        primary: '#EF4444',
        darkRed: '#DC2626',
        blackf: '#1E293B',
      },
    },
  },
  plugins: [],
};
