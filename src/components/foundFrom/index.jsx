import * as React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// mui imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	borderRadius: 1,
	p: 4,
};

export default function FoundForm({ open, setOpen }) {
	const [phone, setPhone] = React.useState('+92');

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	function handlePhoneChange(e) {
		setPhone(e.target.value);
	}

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					Give your Contact info
				</Typography>
				<Typography
					id='modal-modal-description'
					sx={{ mt: '4px', color: 'text.secondary' }}
				>
					Please fill the form so that this post owner can contact you
				</Typography>
				<Grid container sx={{ mt: 4 }} spacing={1}>
					<Grid item xs={12}>
						<TextField label='Your Name' size='small' fullWidth />
					</Grid>
					<Grid item xs={12}>
						<PhoneInput
							country={'Pakistan'}
							containerStyle={{ borderRadius: '16px' }}
							inputStyle={{
								background: '#1e1e1e',
								color: '#FEFEFE',
								borderRadius: '16px',
								width: '100%',
							}}
							dropdownStyle={{ background: '#1e1e1e', color: '#FEFEFE' }}
							value={phone}
							onChange={(phone) => setPhone(phone)}
							buttonStyle={{
								background: '#1e1e1e',
								color: '#FEFEFE',
								'&:hover': {
									background: '#1A1A1A',
								},
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label='Your Relation with him/her'
							size='small'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField label='Your Location' size='small' fullWidth />
					</Grid>
					<Grid
						item
						xs={12}
						sx={{ display: 'flex', justifyContent: 'flex-end' }}
					>
						<Button variant='contained'>Submit</Button>
					</Grid>
				</Grid>
			</Box>
		</Modal>
	);
}
