import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        changeColor: {
          '0%, 100%': { fill: 'white' },
          '50%': { fill: 'yellow' },
        },
      },
      colors: {
        orange: '#F58700',
        'dark-blue': '#070a13',
      },
      maxWidth: {
        '8xl': '1100px',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        changeColor: 'changeColor 2s infinite',
      },
    },
  },
  plugins: [],
}
export default config
