/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                inherit: 'inherit',
                'dodger-blue': '#49B9FF',
                'onahau': '#CCEBFF',
                'gray-sec': '#F3F4F7',
                'd-gray-sec': '#15181E',
                'gray-high': '#F1F6F9',
                'd-gray-high': '#222630',
                'red': '#DD4333',
                'd-red': '#DD3929',
                'yellow': '#FFDC49',
                'green': '#15A250',
                'd-green': '#159846',
                'gray-santas': '#959DAE',
                'gray-river': '#444B59',
                'alto': '#D3D3D3',
                'mercury': '#E5E5E5',
                'alabaster': '#FAFAFA',
                'gallery': '#F0F0F0',
                'gray-dusty': '#999999',
                'gray-dove': '#666666',
                'silver': '#C4C4C4',
                'silverdark': '#AAAAAA',
                'wildsand': '#F4F4F4',
                'mineshaft': '#333333',
                'red-tw': colors.red,
                'yellow-tw': colors.amber,
                'green-tw': colors.emerald,
                'beige': '#F4F1D9',
                'spring-wood': '#f2f4e8',
            },
        },
    },
  plugins: [],
}