import React, { useState } from 'react';
import dayjs from 'dayjs';

// mui imports
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import DatePickerr from '../common/datepicker';
import { connect } from 'react-redux';
import { setPosts } from '../../redux/actions';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	p: 4,
	width: '100%',
	maxWidth: 400,
	maxHeight: '70vh',
	overflowY: 'auto',
	bgcolor: 'background.paper',
	boxShadow: 24,
	borderRadius: 1,
};

const PostForm = ({ open, onClose, setPosts }) => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [areaOfMissing, setAreaOfMissing] = useState('');
	const [mentalCondition, setMentalCondition] = useState('');
	const [physicalCondition, setPhysicalCondition] = useState('');
	const [Description, setDescription] = useState('');
	const [dateOFMissing, setDateOFMissing] = useState();
	const [postValidate, setPostValidate] = useState(false);

	async function post(body) {
		try {
			const response = await axios.post(`${API_END_POINT}/posts`, {
				...body,
			});
			if (response.status >= 200 && response.status <= 299) {
				const { data } = response;
				console.log('RESPONSE: ', data);
				setPosts(data);
			}
		} catch (error) {}
	}
	function validateThePost() {
		if (name !== '') {
			setPostValidate(true);
			return true;
		}
		return false;
	}
	function handleSubmit() {
		if (validateThePost()) {
			const body = {
				name,
				age,
				areaOfMissing,
				mentalCondition,
				physicalCondition,
				dateOFMissing,
				Description,
			};
			// post(body);
		}
	}

	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Typography id='modal-modal-title' variant='h5' component='h2'>
					Post the Info
				</Typography>
				<Typography
					id='modal-modal-description'
					sx={{ mt: 0.5, color: 'GrayText' }}
				>
					Find your missing love&#39;s one by posting publicly
				</Typography>
				<Box
					component='form'
					sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}
				>
					<TextField
						size='small'
						label='Name'
						fullWidth
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						size='small'
						label='Age'
						type='number'
						fullWidth
						value={age}
						onChange={(e) => setAge(e.target.value)}
					/>
					<TextField
						size='small'
						label='Area of missing'
						fullWidth
						value={areaOfMissing}
						onChange={(e) => setAreaOfMissing(e.target.value)}
					/>
					<FormControl fullWidth size='small'>
						<InputLabel id='demo-simple-select-label'>Mental Health</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={mentalCondition}
							label='Mental Health'
							onChange={(e) => setMentalCondition(e.target.value)}
						>
							<MenuItem value={10}>fine</MenuItem>
							<MenuItem value={20}>ill</MenuItem>
							<MenuItem value={30}>not sure</MenuItem>
						</Select>
					</FormControl>
					<FormControl fullWidth size='small'>
						<InputLabel id='demo-simple-select-label'>
							Physical condition
						</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={physicalCondition}
							label='Physical condition'
							onChange={(e) => setPhysicalCondition(e.target.value)}
						>
							<MenuItem value={10}>handicapped</MenuItem>
							<MenuItem value={20}>blind</MenuItem>
							<MenuItem value={30}>deaf</MenuItem>
						</Select>
					</FormControl>
					<DatePickerr
						size='small'
						label='Date of missing'
						value={dateOFMissing}
						onChange={(newDate) => setDateOFMissing(newDate)}
					/>
					<TextField
						multiline
						row={5}
						label='Description'
						value={Description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<Button
						variant='contained'
						type='submit'
						// disabled={}
						onClick={handleSubmit}
					>
						Post
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};

function mapDispatchToProps(dispatch) {
	return { setPosts: (posts) => dispatch(setPosts(posts)) };
}

export default connect(null, mapDispatchToProps)(PostForm);
