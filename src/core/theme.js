import { createTheme } from '@mui/material';
export const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				'*': {
					boxSizing: 'border-box',
					margin: 0,
					padding: 0,
				},
				html: {
					MozOsxFontSmoothing: 'grayscale',
					WebkitFontSmoothing: 'antialiased',
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100%',
					width: '100%',
				},
				body: {
					display: 'flex',
					flex: '1 1 auto',
					flexDirection: 'column',
					minHeight: '100%',
					width: '100%',
				},
				'#__next': {
					display: 'flex',
					flex: '1 1 auto',
					flexDirection: 'column',
					height: '100%',
					width: '100%',
				},
				'.MuiTextField-root': {
					borderRadius: '20px',
					background: '#1e1e1e',
				},
				'.MuiInputBase-input.MuiOutlinedInput-input': {
					// padding: '10px 16px',
					// 'padding-top': '10px',
					// 'padding-bottom': '10px',
				},

				'.MuiButtonBase-root.MuiButton-contained': {
					color: 'black',
				},
			},
		},
	},
	shape: {
		borderRadius: 20,
	},
	palette: {
		neutral: {
			50: '#ffffff',
			100: '#F3F4F6',
			200: '#E5E7EB',
			300: '#D1D5DB',
			400: '#9CA3AF',
			500: '#6B7280',
			600: '#4B5563',
			700: '#374151',
			800: '#1F2937',
			900: '#111827',
		},
		action: {
			active: '#6B7280',
			focus: 'rgba(55, 65, 81, 0.12)',
			hover: 'rgba(55, 65, 81, 0.04)',
			selected: 'rgba(55, 65, 81, 0.08)',
			disabledBackground: 'rgba(55, 65, 81, 0.12)',
			disabled: 'rgba(55, 65, 81, 0.26)',
		},
		background: {
			default: '#1A1A1A',
			paper: '#282828',
			alternate: '#222222',
		},
		divider: '#333333',
		secondary: {
			main: '#673ab7',
			light: '#7c4dff',
			dark: '#6200ea',
			contrastText: '#FFFFFF',
		},
		primary: {
			main: '#CAC822',
			light: '#F1EF2D',
			dark: '#D0CE07',
			contrastText: '#FFFFFF',
		},
		success: {
			main: '#14B8A6',
			light: '#43C6B7',
			dark: '#0E8074',
			contrastText: '#FFFFFF',
		},
		info: {
			main: '#2196F3',
			light: '#64B6F7',
			dark: '#0B79D0',
			contrastText: '#FFFFFF',
		},
		warning: {
			main: '#FFB020',
			light: '#FFBF4C',
			dark: '#B27B16',
			contrastText: '#FFFFFF',
		},
		error: {
			main: '#D14343',
			light: '#DA6868',
			dark: '#922E2E',
			contrastText: '#FFFFFF',
		},
		text: {
			primary: '#FEFEFE',
			secondary: '#979797',
			disabled: 'rgba(55, 65, 81, 0.48)',
		},
	},

	typography: {
		button: {
			fontWeight: 600,
		},
		fontFamily:
			'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
		body1: {
			fontSize: '1rem',
			fontWeight: 400,
			lineHeight: 1.5,
		},
		body2: {
			fontSize: '0.875rem',
			fontWeight: 400,
			lineHeight: 1.57,
		},
		subtitle1: {
			fontSize: '1rem',
			fontWeight: 500,
			lineHeight: 1.75,
		},
		subtitle2: {
			fontSize: '0.875rem',
			fontWeight: 500,
			lineHeight: 1.57,
		},
		overline: {
			fontSize: '0.75rem',
			fontWeight: 600,
			letterSpacing: '0.5px',
			lineHeight: 2.5,
			textTransform: 'uppercase',
		},
		caption: {
			fontSize: '0.75rem',
			fontWeight: 400,
			lineHeight: 1.66,
		},
		h1: {
			fontWeight: 700,
			fontSize: '3.5rem',
			lineHeight: 1.375,
		},
		h2: {
			fontWeight: 700,
			fontSize: '3rem',
			lineHeight: 1.375,
		},
		h3: {
			fontWeight: 700,
			fontSize: '2.25rem',
			lineHeight: 1.375,
		},
		h4: {
			fontWeight: 700,
			fontSize: '2rem',
			lineHeight: 1.375,
		},
		h5: {
			fontWeight: 600,
			fontSize: '1.5rem',
			lineHeight: 1.375,
		},
		h6: {
			fontWeight: 600,
			fontSize: '1.125rem',
			lineHeight: 1.375,
		},
	},
});
