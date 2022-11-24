import * as React from 'react';

// mui imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';

// mui imports
import CustomModal from '../common/reusableComponents/modal';
import PhoneInput from '../common/formElements/phoneInput';
export default function FoundForm({ open, setOpen }) {
	const [phone, setPhone] = React.useState('+92');

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	function handlePhoneChange(e) {
		setPhone(e.target.value);
	}

	return (
		<CustomModal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<>
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
						<PhoneInput value={phone} onChange={(phone) => setPhone(phone)} />
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
			</>
		</CustomModal>
	);
}
