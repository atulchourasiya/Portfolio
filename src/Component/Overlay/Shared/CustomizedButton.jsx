import React from 'react';
import Button from '@mui/material-next/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedHover from '../../Animation/AnimatedHover';
import AnimatedOnclick from '../../Animation/AnimatedOnclick';
const CustomizedButton = ({ text, icon }) => {
	return (
		<AnimatedHover>
			<AnimatedOnclick>
				<Button size='small' variant='filledTonal' color='secondary'>
					{text && <span className='font-lato font-bold me-2'>{text}</span>}
					{
						icon && <FontAwesomeIcon  size='lg' icon={icon} />
					}
				</Button>
			</AnimatedOnclick>
		</AnimatedHover>
	);
};

export default CustomizedButton;
