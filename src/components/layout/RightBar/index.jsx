import React, { useState } from 'react';
import axios from "axios";
import { BASE_URL } from "../../constants";
import { nameSearch } from '../../apiCalls';

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

const cities = [
	'lahore',
	'Islamabad',
	'Karachi',
	'Faislabad',
	'Multan',
	'Rawalpindi',
];
const ageCategory = ['10-20', '21-40', '41-50'];
const RightBar = ({ open, openDrawer, closeDrawer }) => {
	return (
		<>
			<Card>
				<CardHeader title='Filters'></CardHeader>
				<Content />
			</Card>
			<Drawer
				variant='temporary'
				elevation={16}
				open={open}
				onClose={closeDrawer}
				// onOpen={openDrawer}
				anchor='right'
				PaperProps={{ sx: { width: '100%', maxWidth: '450px' } }}
				sx={{ display: { md: 'none' } }}
			>
				<Card>
					<CardHeader
						title='Filters'
						action={
							<IconButton onClick={closeDrawer}>
								<MenuCloseIcon sx={{ transform: 'rotate(180deg)' }} />
							</IconButton>
						}
					></CardHeader>
					<Content />
				</Card>
			</Drawer>
		</>
	);
};

const Content = () => {

    const [personName,setPersonName]= useState("");
	

	const handleNameSearch=()=>{
     console.log("namee",personName);
	 let filterdData=new  nameSearch(personName) 
	 // filtereddata ko sync krna hy baqi api call sy data a rha hy correctly jidr bejna hy bej dena
	}
	

///////////////////////////////////////  bad handles
	const handlePersonNameChange=(e)=>{
       setPersonName(e.target.value)
	}
 /////////////////////////////////////////////////
	return (
		<>
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
							value={personName}
							onChange={handlePersonNameChange}
							sx={{
								mt: 2,
								// '.MuiInputBase-input.MuiOutlinedInput-input': { py: 1 },
							}}
						/>
						<Box sx={{ width: '120px', mt: 1, ml: 'auto' }}>
							<Button fullWidth variant='contained' onClick={handleNameSearch}>
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
							sx={{
								mt: 2,
								// '.MuiInputBase-input.MuiOutlinedInput-input': { py: 1 },
							}}
						/>
						<Box sx={{ width: '120px', mt: 1, ml: 'auto' }}>
							<Button fullWidth variant='contained'>
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
							sx={{
								mt: 2,
								// '.MuiInputBase-input.MuiOutlinedInput-input': { py: 1 },
							}}
						/>
						<Box sx={{ width: '120px', mt: 1, ml: 'auto' }}>
							<Button fullWidth variant='contained'>
								Search
							</Button>
						</Box>
					</Box>
				</Box>
			</CardContent>
		</>
	);
};
export default RightBar;
