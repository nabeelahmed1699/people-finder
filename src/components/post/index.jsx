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

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function Post() {
	const [expanded, setExpanded] = React.useState(false);
	const [openForm, setOpenForm] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<Card>
				<CardHeader
					avatar={
						<Avatar
							sx={{ height: 60, width: 60, bgcolor: red[300] }}
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
					title='Shrimp and Chorizo Paella'
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
					}}
					onClick={handleExpandClick}
					disableRipple
				>
					<Typography component='span'>Details</Typography>
					<Box
						component='span'
						sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
					>
						<ExpandMore
							expand={expanded}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label='show more'
						>
							<ExpandMoreIcon />
						</ExpandMore>
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
									Zulfiqar Ahmed
								</Typography>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={6}>
								Age:
							</Grid>
							<Grid item xs={6}>
								<Typography sx={{ fontWeight: 400, color: 'GrayText' }}>
									60 years
								</Typography>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={6}>
								Location found:
							</Grid>
							<Grid item xs={6}>
								<Typography sx={{ fontWeight: 400, color: 'GrayText' }}>
									Ghaziabad, Multan
								</Typography>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={6}>
								Mental Condition:
							</Grid>
							<Grid item xs={6}>
								<Typography sx={{ fontWeight: 400, color: 'GrayText' }}>
									Fine
								</Typography>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={6}>
								Physical Condition:
							</Grid>
							<Grid item xs={6}>
								<Typography sx={{ fontWeight: 400, color: 'GrayText' }}>
									Paralyze
								</Typography>
							</Grid>
						</Grid>
					</CardContent>
					<CardContent>
						<Typography>Description:</Typography>
						<Typography sx={{ color: 'GrayText' }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sed
							minus. Ut, a officia unde odit quia tenetur aut numquam. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Aut facilis ea
							consequuntur dolore animi neque hic molestias minus dolor iusto.
						</Typography>
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
							src='https://images.unsplash.com/photo-1667184537047-0ad45564a954?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
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
