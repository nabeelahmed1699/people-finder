import React from 'react';
import Drawer from '@mui/material/Drawer';

export default function TemporaryDrawer(props) {
	return (
		<Drawer anchor={props.anchor} open={props.open} onClose={props.onClose}>
			{props.children}
		</Drawer>
	);
}
