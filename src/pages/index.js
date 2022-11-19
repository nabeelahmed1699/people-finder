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
import { setPosts, SET_POSTS } from '../redux/actions';

function Home({ setPosts, posts }) {
	const [loadingPosts, setLoadingPosts] = useState(true);

	async function getAllPosts() {
		try {
			const response = await axios.get(`${API_END_POINT}/posts`);
			if (response.status >= 200 && response.status <= 299) {
				const { data } = response;
				console.log('RESPONSE: ', data);
				setPosts(data);
			}
		} catch (error) {}
	}

	useEffect(() => {
		getAllPosts();
		setLoadingPosts(false);
	}, []);

	console.log('posts', posts);

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
						<PostUploader />
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
								<Grid key={post.id} item xs={12} sm={6} md={4}>
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
	};
};

const mapStateToProps = (store) => {
	return { posts: store.posts };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
