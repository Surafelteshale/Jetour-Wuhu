/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-red-500',
  'bg-red-600',
  'bg-red-700',
  'bg-blue-500',
  'bg-blue-600',
  'bg-blue-700',
  'bg-white',
  'bg-yellow-400',
  'bg-yellow-500',
  'bg-yellow-600',
  'bg-gray-300',
  'bg-gray-400',
  'bg-gray-500',
  'bg-green-400',
  'bg-green-500',
  'bg-green-600',
  'bg-black',
  'bg-cyan-400',
  'bg-cyan-500',
  'bg-cyan-600',
  'bg-pink-500',
  'bg-pink-600',
  'bg-purple-500',
  'bg-purple-600',
  'bg-indigo-500',
  'bg-indigo-600',
  'bg-orange-400',
  'bg-orange-500',
  'bg-orange-600',
  'bg-teal-400',
  'bg-teal-500',
  'bg-lime-400',
  'bg-lime-500',
  'bg-emerald-400',
  'bg-emerald-500',
  'bg-sky-400',
  'bg-sky-500',
    // Add any more dynamic color classes you might use from Firestore
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['72px', '82px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "cyan-blue": "#39afb3",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      // backgroundImage: {
      //   'hero': "url('assets/images/collection-background.svg')",
      //   'card': "url('assets/images/thumbnail-background.svg')",
      // },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}