import React from 'react';
import Box from '@mui/material/Box';
import Button from '../Shared/CustomizedButton';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import AnimatedFadeIn from '../../Animation/AnimatedFadeIn';

const About = () => {
   return (
      <AnimatedFadeIn>
         <div className='flex justify-center items-center h-full px-4'>
            <Box
               component="div"
               className=' bg-white bg-opacity-90 flex-col flex rounded-3xl p-4 w-full sm:w-1/2 '
            >
               <div className="flex items-center">
                  <div>
                     <img src="/me.jpeg" alt="Picture of Atul Chourasiya" className='opaque-image  rounded-full  w-40 h-40 aspect-auto mr-2' />
                     <h3 className=' font-semibold text-2xl opaque-image'>ATUL CHOURASIYA</h3>
                     
                  </div>
                  <div>
                     <p className='font-lato text-sm text-justify font-lato'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis distinctio necessitatibus, nobis itaque natus illum ipsa incidunt aspernatur quaerat, voluptates enim et culpa ratione maxime obcaecati sit nisi deserunt architecto suscipit earum. Voluptates quisquam dolore labore in eius vel iure? </p>
                  </div>
               </div>

               <div className="flex justify-end">
                  <a download={true} href='/me.jpeg'>
                     <Button text={'Resume'} icon={faDownload} />
                  </a>
               </div>
            </Box>
         </div>
      </AnimatedFadeIn>
   );
};

export default About;
