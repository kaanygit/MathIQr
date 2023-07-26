/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors:{
        "palette-1":"#9fb2c2",
        "palette-2":"#1d7393",
        "palette-3":"#065b83",
        "palette-4":"#1a3a6f",
        "palette-5":"#20285c",
        "instagram-color":"#bc2a8d"
      }
    },
  },
  plugins: [],
}
