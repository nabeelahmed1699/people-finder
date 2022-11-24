import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export function Toaster(props) {
	const { open, setOpen, message, severity, vertical, horizontal } = props;

	return (
		<Snackbar
			open={open}
			autoHideDuration={6000}
			onClose={() => setOpen(false)}
			anchorOrigin={{ vertical, horizontal }}
		>
			<Alert
				onClose={() => setOpen(false)}
				severity={severity}
				sx={{ width: '100%' }}
			>
				{message}
			</Alert>
		</Snackbar>
	);
}
