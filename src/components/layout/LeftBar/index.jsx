import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Typography,
} from '@mui/material';
import React from 'react';

const LeftBar = () => {
	return (
		<Card sx={{ mr: 2 }}>
			<CardHeader
				title='Peoples found by different organizations'
				subheader='Click on the name to see the list'
			></CardHeader>
			<CardContent sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
				<Chip label='Edhi' />
				<Chip label='Chipa' />
				<Chip label='Sarkari' />
				<Chip label='Gulab devi' />
				<Chip label='Gareeb' />
				<Chip label='Shoukat khanam' />
				<Chip label='Falah' />
				<Chip label='Behbud' />
				<Chip label='Khidmat-e-khalq' />
			</CardContent>
		</Card>
	);
};

const Chip = ({ label, image, handleClick }) => {
	return (
		<Button
			// onClick={handleClick}
			sx={{ background: (theme) => theme.palette.background.default, pr: 2 }}
		>
			<Avatar sx={{ mr: 1, width: 30, height: 30 }}>N</Avatar>
			{label}
		</Button>
	);
};

export default LeftBar;
