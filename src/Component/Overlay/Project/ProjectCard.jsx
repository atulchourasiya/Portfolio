import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '../Shared/CustomizedButton';
import Skeleton from '@mui/material/Skeleton';
import { Tooltip } from '@mui/material';

const ProjectCard = ({ title, desc, image, githubLink, liveLink }) => {
	const [isLoaded, setIsLoaded] = React.useState(false);
	const handleImageLoad = () => {
		setIsLoaded(true);
	};
	return (
			<Card className='w-[95vw] max-w-[20rem] md:max-w-none  md:w-[22rem]' sx={{ opacity: '.9', borderRadius: '1.5rem' }}>
				<img className=' h-[8rem] md:h-[12rem] w-full opaque-image' style={{ objectFit: 'cover' }} src={image} onLoad={handleImageLoad} />
				{!isLoaded && <Skeleton variant="rectangular" className=' !hidden md:!block !h-[8rem] md:!h-[12rem] w-full' />}
				<CardContent>
					<Typography gutterBottom variant='h5' sx={{ fontFamily: 'lato' }} component='div'>
						{title}
					</Typography>
					<Typography variant='body2' color='text.secondary' sx={{ fontFamily: 'lato' }} >
						{desc}
					</Typography>
				</CardContent>
				<CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
					<Tooltip title='Source Code' >
					<a href={githubLink} target='_blank' rel='noreferrer'>
						<Button icon={faGithub} />
					</a>
					</Tooltip>
					<Tooltip title='Live Link' >
					<a href={liveLink} target='_blank' rel='noreferrer'>
						<Button icon={faLink} />
					</a>
					</Tooltip>
				</CardActions>
			</Card>
	);
};

export default ProjectCard;
