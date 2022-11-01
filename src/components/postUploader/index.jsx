import {
	Box,
	Avatar,
	Stack,
	TextField,
	Button,
	Card,
	CardContent,
} from '@mui/material';
import React from 'react';

// icons
import ImageIcon from '@mui/icons-material/Image';
import VideoCallIcon from '@mui/icons-material/VideoCall';

const PostUploader = () => {
	return (
		<Card sx={{ background: (theme) => theme.palette.background.paper }}>
			<CardContent>
				<Stack direction='row' spacing={2} sx={{ alignItems: 'flex-start' }}>
					<Avatar sx={{ height: 60, width: 60 }}>N</Avatar>
					<Stack spacing={2} sx={{ width: '100%' }}>
						<TextField
							fullWidth
							placeholder='Write info about your missing...'
						/>
						<Stack direction='row' spacing={2}>
							<Button
								startIcon={<ImageIcon />}
								sx={{
									background: (theme) => theme.palette.background.alternate,
									px: 2,
								}}
							>
								Photo
							</Button>
							<Button
								startIcon={<VideoCallIcon />}
								sx={{
									background: (theme) => theme.palette.background.alternate,
									px: 2,
								}}
							>
								Video
							</Button>
						</Stack>
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default PostUploader;
