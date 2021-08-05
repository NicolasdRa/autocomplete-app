import { createTheme } from '@material-ui/core/styles';

export default createTheme({
	palette: {
		primary: {
			main: 'hsl(229, 25%, 31%)',
		},
		secondary: {
			main: 'hsl(349, 71%, 52%)',
		},
		common: {
			white: '#ffffff',
			grey: '#dde0e1',
			shadow: '#a3b0c7',
		},
		background: {
			default: 'white',
		},
	},

	typography: {
		fontFamily: ['Barlow Semi Condensed', 'sans-serif'].join(','),
	},

	overrides: {},

	breakpoints: {
		values: {
			xs: 0,
			sm: 375,
			md: 960,
			lg: 1366,
			xl: 1920,
		},
	},
});
