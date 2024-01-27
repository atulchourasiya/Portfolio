import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { useProgress } from '@react-three/drei';
import { Stars, Html } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';
import { Typography } from '@mui/material';
import Button from '../Shared/CustomizedButton';
import { LoadingContext } from '../../Context/LoadingState';
import { useContext } from 'react';
const LoadingScreen = () => {
   const { progress } = useProgress();
   const { setLoading } = useContext(LoadingContext);

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

   return (
      <>
         <Stars factor={10} fade={true} depth={5} />
         <Html position={[0, 0, 0]} center>
            <Typography variant='h6' className='text-white text-center flex w-max'>EXPERIENCE THE JOURNEY <br /> WITH ATUL </Typography>
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
         </Html>
      </>
   );
};
export default LoadingScreen;
