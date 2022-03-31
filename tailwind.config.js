const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@platform-bridge/platform-bridge/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: '#795548',
          50: '#efebe9',
          100: '#d7ccc8',
          200: '#bcaaa4',
          300: '#a1887f',
          400: '#8d6e63',
          500: '#795548',
          600: '#6d4c41',
          700: '#5d4037',
          800: '#4e342e',
          900: '#3e2723',
        },
      },
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
        zcool: ['ZCOOL XiaoWei', 'sans-serif'],
      },
      height: {
        18: '4.5rem',
      },
    },
  },
  daisyui: {
    themes: [
      // {
      //   platform: {
      //     primary: '#10b269',
      //     secondary: '#7B92B2',
      //     accent: '#67CBA0',
      //     neutral: '#181A2A',
      //     'base-100': '#F9FAFB', // gray-100 页面背景
      //     'base-200': '#FFFFFF', // white card/item 背景 白色
      //     'base-300': '#6B7280', // gray-500
      //     // 'base-300': '#E5E7EB', // gray-200
      //     info: '#3ABFF8',
      //     success: '#36D399',
      //     warning: '#FBBD23',
      //     error: '#F87272',
      //   },
      // },
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          'base-100': '#F9FAFB', // gray-100 页面背景
          'base-200': '#FFFFFF', // white card/item 背景 白色
          'base-300': '#6B7280', // gray-500
          success: '#059669', // 定义按钮 主颜色
        },
      },
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          'base-300': '#9CA3AF', // gray-500
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-safe-area'),
    require('daisyui'),
  ],
};
