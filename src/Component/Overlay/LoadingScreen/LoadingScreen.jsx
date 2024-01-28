import React, { useEffect, useRef } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { useProgress } from '@react-three/drei';
import { Typography } from '@mui/material';
import Button from '../Shared/CustomizedButton';
import { LoadingContext } from '../../Context/LoadingState';
import { useContext } from 'react';
const LoadingScreen = () => {
   const { progress } = useProgress();
   const { setLoading } = useContext(LoadingContext);

   const scene = useRef();

   const goFullScreen = () => {
      const element = document.documentElement;
      if (element.requestFullscreen) {
         element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
         element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
         element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
         element.msRequestFullscreen();
      }
   };

   useEffect(() => {
      const stars = document.querySelectorAll('span');

      stars.forEach(star => {
         let x = `${Math.random() * 200}vmax`;
         let y = `${Math.random() * 100}vh`;
         let z = `${Math.random() * 200 - 100}vmin`;
         let rx = `${Math.random() * 360}deg`;
         star.style.setProperty('--x', x);
         star.style.setProperty('--y', y);
         star.style.setProperty('--z', z);
         star.style.setProperty('--rx', rx);
         let delay = `${Math.random() * 1.5}s`;
         star.style.animationDelay = delay;
      });
   }, []);

   return (
      <>
         <div ref={scene} className="scene bg-black">
            {
               Array(50).fill('').map((_, i) => <span></span>)
            }
         </div>
         <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
            <Typography variant='h6' className='text-white text-center flex'>EXPERIENCE THE JOURNEY</Typography>
            <Box sx={{ width: '100%', marginTop: '1rem' }}>
               {progress != 100 ? <>
                  <Typography variant='p' className='text-white text-xs text-center flex w-full'>{Math.round(progress)}%
                  </Typography>
                  <LinearProgress sx={{
                     '& .css-5xe99f-MuiLinearProgress-bar1': {
                        backgroundColor: 'white'
                     },
                  }} variant="determinate" value={progress} />
               </> :
                  <div className='flex justify-center' onClick={() => {
                     goFullScreen();
                     setLoading(false);
                  }}>
                     <Button text={'Enter'}></Button>
                  </div>
               }
            </Box>
         </div>
      </>
   );
};
export default LoadingScreen;

