import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Image from 'next/image';
import { connect } from 'react-redux';

// mui imports
import { Box, CircularProgress, Grid } from '@mui/material';

// Custom imports
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import PostUploader from '../components/postUploader';
import Post from '../components/post';

import { API_END_POINT } from '../components/constants/config';

// Redux stuff
import { setPosts, setUnModifiedPosts } from '../redux/actions';
import {
	toast,
	Toaster,
} from '../components/common/reusableComponents/toaster';
import Filters from '../views/filters';

function Home({ setPosts, setUnModifiedPosts, posts }) {
	const [loadingPosts, setLoadingPosts] = useState(true);
	const [toast, setToast] = useState({});

	async function getAllPosts() {
		try {
			const response = await axios.get(`${API_END_POINT}/posts`);
			if (response.status >= 200 && response.status <= 299) {
				const { data } = response;
				// setToast({
				// 	open: true,
				// 	onClose: () => setToast({ ...toast, open: false }),
				// 	message: 'SuccessFully!',
				// 	severity: 'error',
				// 	vertical: 'top',
				// 	horizontal: 'right',
				// });
				setPosts(data);
				setUnModifiedPosts(data);
			}
		} catch (error) {}
	}

	useEffect(() => {
		getAllPosts();
		setLoadingPosts(false);
	}, []);

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
				<Grid container spacing={2}>
					<Grid item xs={12}>
						{/* <PostUploader /> */}
						<Filters />
					</Grid>
				</Grid>
				<Grid container spacing={2} sx={{ mt: 2 }}>
					{loadingPosts ? (
						<Grid
							item
							xs={12}
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<CircularProgress />
						</Grid>
					) : (
						posts.map((post) => {
							return (
								<Grid key={post.id} item xs={12} sm={6} lg={4}>
									<Post post={post} />
								</Grid>
							);
						})
					)}
				</Grid>
			</Box>
		</>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		setPosts: (posts) => dispatch(setPosts(posts)),
		setUnModifiedPosts: (posts) => dispatch(setUnModifiedPosts(posts)),
	};
};

const mapStateToProps = (store) => {
	return { posts: store.posts };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
