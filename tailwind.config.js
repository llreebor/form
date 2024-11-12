/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		screens: {
			xl: { max: '1449.99px' },
			lg: { max: '1199.99px' },
			md: { max: '991.99px' },
			sm: { max: '767.99px' },
			xs: { max: '479.99px' },
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				neutral: {
					50: '#C6C5D0',
					100: '#BDBDBF',
					200: '#E6E8ED',
					300: '#E7E7E7',
					400: '#F5F7FA',
					600: '#333333',
				},
				primary: {
					300: '#005FF0',
					400: '#2A63EE',
				},
			},
			backgroundImage: {
				progress: 'linear-gradient(0deg, #F6F6F8 0%, #F6F6F8 100%)',
				'progress-fill': 'linear-gradient(0deg, #005FF0 0%, #005FF0 100%)',
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				fadeIn: 'fade-in .3s ease',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
