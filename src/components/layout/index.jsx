import { Box, Grid } from '@mui/material';
import React from 'react';
import layoutStyles from './layout.module.css';

// custom import
import Navbar from './navbar';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
const layout = ({ children, rightbar }) => {
	return (
		<div className={layoutStyles.layout}>
			<header className={layoutStyles.header}>
				<Navbar openrRightbar={rightbar.openDrawer} />
			</header>
			<nav className={layoutStyles.leftbar}>
				<LeftBar />
			</nav>
			<main className={layoutStyles.main}>{children}</main>
			<div className={layoutStyles.rightbar}>
				<RightBar
					open={rightbar.open}
					openDrawer={rightbar.openDrawer}
					closeDrawer={rightbar.closeDrawer}
				/>
			</div>
		</div>
	);
};

export default layout;
