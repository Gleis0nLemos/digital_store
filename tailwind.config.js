/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C92071',
        secondary: '#B5B6F2',
        secondary_2: '#EFEFFF',
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
        'lime': '#E7FF86',
        'blue-gray': '#D8E3F2',
        'white': '#FFFFFF'
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #C92071, #EDABCA)',
        'secondary-gradient': 'linear-gradient(180deg, rgba(66, 0, 255, 0.25) -40.67%, rgba(255, 255, 255, 0) 100%)',    
      },
      spacing: {
        '5': '20px',
        // '34.5': '138px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

