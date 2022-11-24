import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function CustomModal(props) {
	const { open, onClose } = props;
	return (
		<Modal open={open} onClose={onClose} {...props}>
			<Box sx={style}>{props.children}</Box>
		</Modal>
	);
}
