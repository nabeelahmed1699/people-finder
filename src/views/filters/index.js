import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Chip,
	Drawer,
	FormHelperText,
	Stack,
	TextField,
	Typography,
} from '@mui/material';

// custom imports
import { setPosts } from '../../redux/actions';

const cities = [
	'lahore',
	'Islamabad',
	'Karachi',
	'Faislabad',
	'Multan',
	'Rawalpindi',
];
const ageCategory = ['10-20', '21-40', '41-50'];

function Filters({ unModifiedPosts, setPosts }) {
	const [openDrawer, setOpenDrawer] = useState(false);
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState('');
	const [age, setAge] = useState(0);
	const [ageError, setAgeError] = useState('');
	const [city, setCity] = useState('');
	const [cityError, setCityError] = useState('');

	function handleCloseDrawer() {
		setOpenDrawer(false);
	}
	function handleOpenDrawer() {
		setOpenDrawer(true);
	}

	function handleFilterByName() {
		const queryString = name.toLowerCase();
		if (name === '') {
			setNameError('Please type in the field to search');
			return;
		}
		const newList = unModifiedPosts.filter((post) => {
			const name = post.name.toLowerCase();
			return name.includes(queryString);
		});
		setPosts(newList);
		handleCloseDrawer();
		return;
	}
	function handleFilterByCity() {
		const queryString = city.toLowerCase();
		if (city === '') {
			setCityError('Please type in the field to search');
			return;
		}
		const newList = unModifiedPosts.filter((post) => {
			const city = post.city.toLowerCase();
			return city.includes(queryString);
		});
		setPosts(newList);
		handleCloseDrawer();
		return;
	}
	function handleFilterByAge() {
		if (age === 0 || !age) {
			setAgeError('Please type in the field to search');
			return;
		}
		const newList = unModifiedPosts.filter((post) => {
			return post.age === age || post.age + 10 <= age || post.age - 10 <= age;
		});
		setPosts(newList);
		handleCloseDrawer();
		return;
	}

	function handleClearFilter() {
		setName('');
		setAge(0);
		setPosts(unModifiedPosts);
	}
	return (
		<>
			<Stack direction='row' alignItems='center' justifyContent='space-between'>
				<Button variant='outlined' onClick={handleClearFilter}>
					Clear Filters
				</Button>
				<Button variant='outlined' onClick={handleOpenDrawer}>
					Filters
				</Button>
			</Stack>
			<Drawer open={openDrawer} onClose={handleCloseDrawer} anchor='right'>
				<Card>
					<CardHeader
						title='Filters'
						subheader='Use filters to quickly find the person'
					/>
					<CardContent>
						<Box
							sx={{
								p: 2,
								borderRadius: '20px',
								background: (theme) => theme.palette.background.alternate,
							}}
						>
							<Typography>Search Name</Typography>
							<Box>
								<TextField
									fullWidth
									label='Name'
									size='small'
									value={name}
									error={nameError !== ''}
									onChange={(e) => {
										setNameError('');
										setName(e.target.value);
									}}
									sx={{
										mt: 2,
									}}
								/>
								<FormHelperText sx={{ color: '#d14343', ml: 2 }}>
									{nameError}
								</FormHelperText>
								<Box sx={{ width: '120px', mt: 1, ml: 'auto' }}>
									<Button
										fullWidth
										variant='contained'
										onClick={handleFilterByName}
									>
										Search
									</Button>
								</Box>
							</Box>
						</Box>
					</CardContent>
					<CardContent>
						<Box
							sx={{
								p: 2,
								borderRadius: '20px',
								background: (theme) => theme.palette.background.alternate,
							}}
						>
							<Typography>Cities</Typography>
							<Stack direction='row' sx={{ mt: 2, flexWrap: 'wrap', gap: 1 }}>
								{cities.map((city) => {
									return (
										<Chip
											key={city}
											label={city}
											clickable
											sx={{
												background: (theme) => theme.palette.background.default,
												':hover': {
													background: (theme) => theme.palette.background.paper,
												},
											}}
										/>
									);
								})}
							</Stack>
							<Box>
								<TextField
									fullWidth
									label='Search City'
									size='small'
									value={city}
									onChange={(e) => {
										setCityError('');
										setCity(e.target.value);
									}}
									sx={{
										mt: 2,
										// '.MuiInputBase-input.MuiOutlinedInput-input': { py: 1 },
									}}
								/>
								<FormHelperText sx={{ color: '#d14343', ml: 2 }}>
									{cityError}
								</FormHelperText>
								<Box sx={{ width: '120px', mt: 1, ml: 'auto' }}>
									<Button
										fullWidth
										variant='contained'
										onClick={handleFilterByCity}
									>
										Search
									</Button>
								</Box>
							</Box>
						</Box>
					</CardContent>
					<CardContent>
						<Box
							sx={{
								p: 2,
								borderRadius: '20px',
								background: (theme) => theme.palette.background.alternate,
							}}
						>
							<Typography>Age Range</Typography>
							<Stack direction='row' sx={{ mt: 2, flexWrap: 'wrap', gap: 1 }}>
								{ageCategory.map((age) => {
									return (
										<Chip
											key={age}
											label={age}
											clickable
											sx={{
												background: (theme) => theme.palette.background.default,
												':hover': {
													background: (theme) => theme.palette.background.paper,
												},
											}}
										/>
									);
								})}
							</Stack>
							<Box>
								<TextField
									fullWidth
									label='Age'
									size='small'
									type='number'
									value={age}
									onChange={(e) => {
										setAgeError('');
										setAge(e.target.value);
									}}
									error={ageError !== ''}
									sx={{
										mt: 2,
										// '.MuiInputBase-input.MuiOutlinedInput-input': { py: 1 },
									}}
								/>
								<FormHelperText sx={{ color: '#d14343', ml: 2 }}>
									{ageError}
								</FormHelperText>
								<Box sx={{ width: '120px', mt: 1, ml: 'auto' }}>
									<Button
										fullWidth
										variant='contained'
										onClick={handleFilterByAge}
									>
										Search
									</Button>
								</Box>
							</Box>
						</Box>
					</CardContent>
					<CardContent>
						<Box
							sx={{
								p: 2,
								borderRadius: '20px',
								background: (theme) => theme.palette.background.alternate,
							}}
						>
							<Typography variant='h5'>Power Search</Typography>
							<Typography variant='body1' color='grayText'>
								Type in two or more filter fields and find the combimation
								search
							</Typography>
							<Stack alignItems='flex-end'>
								<Button variant='contained'>Power Search</Button>
							</Stack>
						</Box>
					</CardContent>
				</Card>
			</Drawer>
		</>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		setPosts: (posts) => dispatch(setPosts(posts)),
	};
};

const mapStateToProps = (store) => {
	console.log('STORE', store.unModifiedPosts);
	return { unModifiedPosts: store.unModifiedPosts };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
