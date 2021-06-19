module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'prompt-light': ['Prompt Light'],
      'prompt-medium': [ 'Prompt Medium' ],
      'prompt-semibold': [ 'Prompt SemiBold' ]
    },
    colors: {
      'warn-grey': '#9b9b9b',
      'dark-500': '#4a4a4a',
      'dark-400': '#5f5f5f',
      'white': '#FFFFFF',
      'white-100': '#FDFDFD',
      'greenish-teal': '#2ecc71',
      'greenfruit-100': '#48b6a3',
      'grapefruit': '#ff5a5a'
    },
    fontSize: {
      'heading-1': '96px',
      'heading-2': '60px',
      'heading-3': '42px',
      'heading-4': '34px',
      'heading-5': '24px',
      'heading-6': '20px',
      'body-1': '18px',
      'body-2': '14px',
      'body-3': '12px',
      'subtitle-1': '16px',
      'subtitle-2': '14px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
