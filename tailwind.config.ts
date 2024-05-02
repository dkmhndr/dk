import type { Config } from 'tailwindcss';
import { createThemes } from 'tw-colors';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/preline/preline.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#eef8ff',
          '100': '#d9efff',
          '200': '#bce4ff',
          '300': '#8dd4ff',
          '400': '#58baff',
          '500': '#319bff',
          '600': '#1b7bf5',
          '700': '#1363df',
          '800': '#1651b7',
          '900': '#184790',
          '950': '#142c57',
        },
        secondary: {
          '50': '#fef5ee',
          '100': '#fee8d6',
          '200': '#fbcead',
          '300': '#f9ab78',
          '400': '#f57f42',
          '500': '#f15412',
          '600': '#e34213',
          '700': '#bc3012',
          '800': '#962716',
          '900': '#792415',
          '950': '#410f09',
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-82%)' },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        marqueeSlow: 'marquee 45s linear infinite',
        marquee: 'marquee 27s linear infinite',
        marqueeFast: 'marquee 15s linear infinite',
        scrollSlow: 'scroll 15s linear infinite',
      },
      boxShadow: {
        xl: '8px 10px',
        xlHover: '5px 7px',
        lg: '5px 7px',
        lgHover: '3px 5px',
        md: '3px 5px',
        mdHover: '1px 3px',
        sm: '1px 3px',
        smHover: '0px 1px',
      },
      // typography: (theme: any) => ({
      //   DEFAULT: {
      //     css: {
      //       color: theme('colors.content'),
      //       headings: theme('colors.content'),
      //     }
      //   }
      // })
    },
  },
  plugins: [
    createThemes({
      light: {
        content: 'black',
        base: 'white',
      },
      dark: {
        content: 'white',
        base: 'black',
      },
    }),
    require('@tailwindcss/forms'),
    require('preline/plugin'),
    require('tailwindcss-gradient'),
    require('tailwindcss-dotted-background'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
