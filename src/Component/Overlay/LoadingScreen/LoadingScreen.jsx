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

   const generateStars = () => {
      const star = document.createElement('span');
      star.classList.add('star');
      star.style.top = `calc(${Math.random() * 100}% - 2px)`;
      star.style.left = `calc(${Math.random() * 100}% - 2px)`;
      star.style.width = Math.random() * 2 + 1 + 'px';
      star.style.height = star.style.width;
      star.style.animationDuration = Math.random() * 2 + 1 + 's';
      star.style.animationDelay = Math.random() * 2 + 1 + 's';
      star.style.animationTimingFunction = 'ease-in-out';
      star.style.animationIterationCount = 'infinite';
      star.style.animationName = 'blink';
      scene.current.appendChild(star);
   };

   useEffect(() => {

      for (let i = 0; i < 1000; i++) {
         generateStars();
      }
   }, []);

   return (
      <>
         <div ref={scene} className="h-full bg-black"> </div>
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
                     <Button text={'Enter'} icon={null}></Button>
                  </div>
               }
            </Box>
         </div>
      </>
   );
};
export default LoadingScreen;

