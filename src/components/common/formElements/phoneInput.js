import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function phoneInputElement() {
	return (
		<>
			<PhoneInput
				country={'Pakistan'}
				containerStyle={{ borderRadius: '16px' }}
				dropdownStyle={{ background: '#1e1e1e', color: '#FEFEFE' }}
				inputStyle={{
					background: '#1e1e1e',
					color: '#FEFEFE',
					borderRadius: '16px',
					width: '100%',
					border: 0,
				}}
				buttonStyle={{
					background: '#1e1e1e',
					color: '#FEFEFE',
					border: 0,
					borderRadius: '16px',
					paddingLeft: '5px',
					'&:hover': {
						background: '#1A1A1A !important',
					},
				}}
			/>
		</>
	);
}
