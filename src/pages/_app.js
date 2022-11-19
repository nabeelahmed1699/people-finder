import react, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../core/theme';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

// custom imports
import Layout from '../components/layout';

// Redux stuff
import { setPosts, SET_POSTS } from '../redux/actions';
import reducer from '../redux/reducer';

const initialStore = { posts: [] };
const store = createStore(reducer, initialStore);

function MyApp({ Component, pageProps, setPosts }) {
	// states
	const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
	const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);

	const openRightDrawer = () => {
		setRightDrawerOpen(true);
	};
	const closeRightDrawer = () => {
		setRightDrawerOpen(false);
	};
	const openLeftDrawer = () => {
		setLeftDrawerOpen(true);
	};
	const closeLeftDrawer = () => {
		setLeftDrawerOpen(false);
	};

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Layout
					rightbar={{
						open: rightDrawerOpen,
						openDrawer: openRightDrawer,
						closeDrawer: closeRightDrawer,
					}}
					leftbar={{
						open: leftDrawerOpen,
						openDrawer: openLeftDrawer,
						closeDrawer: closeLeftDrawer,
					}}
				>
					<CssBaseline />
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</Provider>
	);
}

export default MyApp;
