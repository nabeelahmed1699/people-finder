import React, { useState } from 'react';

import { Box, Grid } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// Custom imports
import Layout from '../components/layout';
import PostUploader from '../components/postUploader';
import Post from '../components/post';
export default function Home() {
	const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
	const openRightDrawer = () => {
		setRightDrawerOpen(true);
	};
	const closeRightDrawer = () => {
		setRightDrawerOpen(false);
	};
	return (
		<>
			<Head>
				<title>People Finder</title>
				<meta
					name='description'
					content='People finder app helps people to find their missing one'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Box
				component='main'
				sx={{
					minHeight: '100vh',
				}}
			>
				<Layout
					rightbar={{
						open: rightDrawerOpen,
						openDrawer: openRightDrawer,
						closeDrawer: closeRightDrawer,
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<PostUploader />
						</Grid>
					</Grid>
					<Grid container spacing={2} sx={{ mt: 2 }}>
						<Grid item xs={12} sm={6}>
							<Post />
						</Grid>
						<Grid item xs={12} sm={6}>
							<Post />
						</Grid>
					</Grid>
				</Layout>
			</Box>
		</>
	);
}
