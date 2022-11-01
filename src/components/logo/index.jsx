import Image from 'next/image';

import { Box } from '@mui/material';
import LogoImage from '../../images/Logo.svg';

export default function Logo() {
	return (
		<Box>
			<Image height={40} src={LogoImage} alt='logo' />
		</Box>
	);
}
