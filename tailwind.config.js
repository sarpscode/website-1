/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    'index.html',
    'index2.html',
    'index3.html',
    'page-details.html',
    'about.html',
    'projects.html',
    'search.html',
    'articles.html',
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        'saira': ['"Saira Condensed"', ...defaultTheme.fontFamily.serif],
        'sarabun': ['Sarabun', ...defaultTheme.fontFamily.sans]
      },
      backgroundSize: {
        '50%': '50%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

