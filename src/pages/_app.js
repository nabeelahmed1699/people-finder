import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../core/theme';
function MyApp({ Component, pageProps }) {
	console.log(theme);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
