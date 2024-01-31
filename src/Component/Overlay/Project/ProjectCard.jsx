import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '../Shared/CustomizedButton';

const ProjectCard = ({ title, desc, image, githubLink, liveLink }) => {
	return (
		<div className="md:p-2">
			<Card className='w-full max-w-[20rem] md:max-w-none  md:w-[22rem]' sx={{ opacity: '.9', borderRadius: '1.5rem' }}>
				<CardMedia className='h-[8rem] md:h-[12rem] opaque-image' sx={{ objectFit: 'contain' }} image={image} />
				<CardContent>
					<Typography gutterBottom variant='h5'  sx={{fontFamily :'lato'}} component='div'>
						{title}
					</Typography>
					<Typography variant='body2' color='text.secondary' sx={{ fontFamily: 'lato' }} >
						{desc}
					</Typography>
				</CardContent>
				<CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
					<a href={githubLink} target='_blank' rel='noreferrer'>
						<Button icon={faGithub} />
					</a>
					<a href={liveLink} target='_blank' rel='noreferrer'>
						<Button icon={faLink} />
					</a>
				</CardActions>
			</Card>
		</div>
	);
};

export default ProjectCard;
