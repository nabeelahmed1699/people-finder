import * as React from 'react';

// mui imports
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Collapse from '@mui/material/Collapse';
import { Box, Button, Grid } from '@mui/material';

// icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FoundForm from '../foundFrom';

export default function Post({ post }) {
	const [expanded, setExpanded] = React.useState(false);
	const [openForm, setOpenForm] = React.useState(false);

	const {
		name,
		age,
		dateFound,
		mentalCondition,
		locationFound,
		physicalCondition,
		description,
		pic,
		orgnization,
	} = post;

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		<>
			<Card>
				<CardHeader
					avatar={
						<Avatar
							sx={{
								height: 60,
								width: 60,
								bgcolor: red[300],
								fontSize: '2rem',
							}}
							aria-label='Profile Pic'
						>
							H
						</Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title='Shah Nawaz'
					subheader='September 14, 2016'
				/>
				<Button
					fullWidth
					sx={{
						height: '60px',
						px: 4,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						borderRadius: 0,
					}}
					onClick={handleExpandClick}
					disableRipple
				>
					<Typography component='span'>Details</Typography>
					<Box component='span'>
						<ExpandMoreIcon
							sx={{
								transition: 'all ease-in 200ms',
								transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
							}}
						/>
					</Box>
				</Button>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Grid container>
							<Grid item xs={6}>
								Name:
							</Grid>
							<Grid item xs={6}>
								<Typography sx={{ fontWeight: 400, color: 'GrayText' }}>
									{name}
								</Typography>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={6}>
								Age:
							</Grid>
							<Grid item xs={6}>
								<Typography sx={{ fontWeight: 400, color: 'GrayText' }}>
									{age}
								</Typography>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={6}>
								Location found:
							</Grid>
							<Grid item xs={6}>
								<Typography sx={{ fontWeight: 400, color: 'GrayText' }}>
									{locationFound}
								</Typography>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={6}>
								Found by:
							</Grid>
							<Grid item xs={6}>
								<Typography sx={{ fontWeight: 400, color: 'GrayText' }}>
									{orgnization}
								</Typography>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={6}>
								Date found:
							</Grid>
							<Grid item xs={6}>
								<Typography sx={{ fontWeight: 400, color: 'GrayText' }}>
									{dateFound}
								</Typography>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={6}>
								Mental Condition:
							</Grid>
							<Grid item xs={6}>
								<Typography sx={{ fontWeight: 400, color: 'GrayText' }}>
									{mentalCondition}
								</Typography>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={6}>
								Physical Condition:
							</Grid>
							<Grid item xs={6}>
								<Typography sx={{ fontWeight: 400, color: 'GrayText' }}>
									{physicalCondition}
								</Typography>
							</Grid>
						</Grid>
					</CardContent>
					<CardContent>
						<Typography>Description:</Typography>
						<Typography sx={{ color: 'GrayText' }}>{description}</Typography>
					</CardContent>
				</Collapse>
				{/* <CardMedia component='img' height='454' image='' alt='Paella dish' /> */}
				<CardContent>
					<Box sx={{ height: '400px', borderRadius: 1, overflow: 'hidden' }}>
						<img
							style={{
								width: '100%',
								maxWidth: '100%',
								height: '100%',
								objectFit: 'cover',
							}}
							src='https://thumbs.dreamstime.com/b/portrait-old-pakistani-man-white-beard-peshawar-pakistan-june-portrait-old-pakistani-man-white-beard-160650853.jpg'
							alt={name}
						/>
					</Box>
				</CardContent>
				<CardActions
					sx={{ p: 1.5, display: 'flex', justifyContent: 'flex-end' }}
				>
					<Button variant='contained' onClick={() => setOpenForm(true)}>
						Found
					</Button>
				</CardActions>
			</Card>
			<FoundForm open={openForm} setOpen={setOpenForm} />
		</>
	);
}
