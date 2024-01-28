import React from 'react';
import Button from '@mui/material-next/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CustomizedButton = ({ text, icon }) => {
	return (
		<Button size='small' variant='filledTonal' color='secondary'>
			{text}
			{
				icon && <FontAwesomeIcon size='lg' icon={icon} />
			}
		</Button>
	);
};

export default CustomizedButton;
