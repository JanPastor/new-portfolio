import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#87CEFA',    // Light Sky Blue
        secondary: '#1E3A5F',  // Dark Ocean Blue
        accent: '#2778a3',     // Medium Blue
        text: {
          primary: 'grey',
          secondary: 'white'
        },
        background: {
          primary: '#23232e',
          secondary: '#141418'
        }
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #87CEFA, #1E3A5F)',
      },
    },
  },
  plugins: [],
}
export default config
