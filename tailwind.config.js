/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ],
  theme: {
    extend: {
      colors: {
        accent: '#BFBEBA',
        background: '#F6F5F0',
        link: '#1155CC',
        main: '#222336',
        paragraph: '#2A2A35',
        placeholder: '#75757B',
        underline: {
          blue: '#5BA8CC',
          orange: '#CC7454',
          yellow: '#CB9642'
        }
      }
    }
  }
}
