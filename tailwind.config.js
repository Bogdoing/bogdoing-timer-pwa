/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		container: {
			center: true,
			padding: '2rem',
			color: '#red',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}


/*
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
*/