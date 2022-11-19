import { Box, Grid } from '@mui/material';
import React from 'react';

// custom import
import Navbar from './navbar';
import RightBar from './RightBar';

// css
import layoutStyles from './layout.module.css';

const layout = ({ children, rightbar }) => {
	return (
		<>
			<div className={layoutStyles.layout}>
				<header className={layoutStyles.header}>
					<Navbar openrRightbar={rightbar.openDrawer} />
				</header>

				<main className={layoutStyles.main}>{children}</main>
				<div className={layoutStyles.rightbar}>
					<RightBar
						open={rightbar.open}
						openDrawer={rightbar.openDrawer}
						closeDrawer={rightbar.closeDrawer}
					/>
				</div>
			</div>
		</>
	);
};

export default layout;
