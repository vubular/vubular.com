module.exports = {
	theme: {
		minWidth: {
			'0': '0',
			'20': '20%',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			'full': '100%',
		},
		extend: {
			colors: {
				primary: '#662D91',
				secondary: '#00AEEF',
				borderCard: '#dadce0'
			}
		}
	},
	variants: {
  		backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  		textColor: ['responsive', 'hover', 'focus', 'visited'],
  		gridTemplateColumns: ['responsive', 'hover', 'focus'],
	},
	plugins: []
}
