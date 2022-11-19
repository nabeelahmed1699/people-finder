import { useEffect } from 'react';
import Link from 'next/link';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// custom imports
import { API_END_POINT } from '../../constants/config';

import {
	Card,
	CardContent,
	CardHeader,
	Typography,
	Chip,
	TextField,
	Box,
	Button,
	Drawer,
	IconButton,
} from '@mui/material';
import { Stack } from '@mui/system';

// icons
import MenuCloseIcon from '@mui/icons-material/MenuOpen';
import AdjustIcon from '@mui/icons-material/Adjust';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

// redux actions
import { filterByNameAction, setPosts } from '../../../redux/actions';
import PostForm from '../../postForm';

const RightBar = ({ open, openDrawer, closeDrawer }) => {
	return (
		<>
			<Card sx={{ height: '100%' }}>
				<CardContent sx={{ height: '100%' }}>
					<Content />
				</CardContent>
			</Card>
			<Drawer
				variant='temporary'
				elevation={16}
				open={open}
				onClose={closeDrawer}
				anchor='left'
				PaperProps={{ sx: { width: '100%', maxWidth: '450px' } }}
				sx={{ display: { md: 'none' } }}
			>
				<Card>
					<CardHeader
						title='People Finder'
						action={
							<IconButton onClick={closeDrawer}>
								<MenuCloseIcon sx={{ transform: 'rotate(180deg)' }} />
							</IconButton>
						}
					></CardHeader>
					<CardContent>
						<Content />
					</CardContent>
				</Card>
			</Drawer>
		</>
	);
};
const links = [
	{ label: 'Found People', link: '/', icon: <AdjustIcon /> },
	{
		label: 'missing People',
		link: 'missingPeople',
		icon: <ReportGmailerrorredIcon />,
	},
];
const Content = () => {
	const [openModal, setOpenModal] = useState(false);
	const handleOpen = () => setOpenModal(true);
	const handleClose = () => setOpenModal(false);

	return (
		<Box component='aside' sx={{ position: 'relative', height: '100%' }}>
			{' '}
			{links.map((item, index) => {
				const { label, icon, link } = item;
				return (
					<Button
						startIcon={icon}
						fullWidth
						key={label + index.toString()}
						sx={{ display: 'flex', justifyContent: 'flex-start', pl: 2 }}
					>
						<Link
							href={link}
							style={{ color: 'white', textDecoration: 'none' }}
						>
							{label}
						</Link>
					</Button>
				);
			})}
			<Button
				variant='outlined'
				fullWidth
				sx={{
					position: 'absolute',
					bottom: '2rem',
					left: '50%',
					transform: 'translateX(-50%)',
					py: 2,
					fontSize: '1.1rem',
				}}
				onClick={handleOpen}
			>
				Post a &#34;Missing Post&#34;
			</Button>
			<PostForm open={openModal} onClose={handleClose} />
		</Box>
	);
};

function mapDispatchToProps(dispatch) {
	return {
		setPosts: (posts) => dispatch(setPosts(posts)),
	};
}
export default connect(null, mapDispatchToProps)(RightBar);
