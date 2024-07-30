/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C92071',
        secondary: '#B5B6F2',
        tertiary: '#991956',
        error: '#EE4266',
        success: '#52CA76',
        warning: '#F6AA1C',
        'dark-gray': '#1F1F1F',
        'dark-gray-2': '#474747',
        'dark-gray-3': '#666666',
        'light-gray': '#8F8F8F',
        'light-gray-2': '#CCCCCC',
        'light-gray-3': '#F5F5F5',
        'white': '#FFFFFF'
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #C92071, #EDABCA)',
        'secondary-gradient': 'linear-gradient(90deg, #B5B6F2, #EFEFFF)',
      }
    },
  },
  plugins: [],
}

