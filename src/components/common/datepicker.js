import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerr(props) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				renderInput={(params) => <TextField {...params} />}
				{...props}
			/>
		</LocalizationProvider>
	);
}
