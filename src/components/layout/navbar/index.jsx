import * as React from 'react';
import PropTypes from 'prop-types';

// mui imports
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import {
	Button,
	Card,
	CardContent,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Menu,
	MenuItem,
	Stack,
	TextField,
} from '@mui/material';
// icons
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuCloseIcon from '@mui/icons-material/MenuOpen';

// cutom imports
import Logo from '../../logo';
function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default function Appbar(props) {
	const { window } = props;

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<ElevationScroll {...props}>
				<AppBar
					color='transparent'
					sx={{
						'&.MuiPaper-elevation4': {
							background: (theme) => theme.palette.background.alternate,
						},
					}}
				>
					<Toolbar>
						<Stack
							direction='row'
							sx={{
								width: '100%',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<IconButton
								color='inherit'
								aria-label='open drawer'
								edge='start'
								// onClick={handleDrawerToggle}
								onClick={props.openrRightbar}
								sx={{ display: { sm: 'none' } }}
							>
								<MenuIcon />
							</IconButton>
							<Stack
								direction='row'
								spacing={2}
								sx={{
									alignItems: 'center',
									display: { xs: 'none', sm: 'flex' },
								}}
							>
								<Logo />
								<Typography
									variant='h6'
									component='span'
									sx={{ fontWeight: 700 }}
								>
									People Finder
								</Typography>
							</Stack>
							{/* <Stack
								direction='row'
								sx={{ display: { xs: 'none', sm: 'flex' } }}
							>
								<IconButton>
									<HomeOutlinedIcon />
								</IconButton>
								<IconButton>
									<ChatBubbleOutlineIcon />
								</IconButton>
								<IconButton>
									<NotificationsNoneIcon />
								</IconButton>
							</Stack> */}
							<ProfileChip />
						</Stack>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Toolbar />
		</>
	);
}

const ProfileChip = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box>
			<Button
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				endIcon={<ExpandMoreRoundedIcon />}
				sx={{ background: (theme) => theme.palette.background.paper }}
			>
				{/* <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' /> */}
				<Avatar sx={{ mr: 1, width: 30, height: 30 }}>N</Avatar>
				Nabeel
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</Box>
	);
};
