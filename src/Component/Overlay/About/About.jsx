import React from 'react';
import Box from '@mui/material/Box';
import Button from '../Shared/CustomizedButton';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import AnimatedFadeIn from '../../Animation/AnimatedFadeIn';

const About = () => {
   return (
      <AnimatedFadeIn>
         <div className='flex justify-center items-center h-full px-4'>
            <div className=' flex  bg-white bg-opacity-90  rounded-3xl p-4 w-1/2'>
               <div className="flex  col-span-3 items-center flex-col bg-yellow-50  p-4 rounded-2xl shadow-2xl">
                  <img src="/me.jpeg" alt="Picture of Atul Chourasiya" className='opaque-image bottom-1 border-white  rounded-full h-40 aspect-auto  m-4' />
                  <p className=' font-bold tex text-center text-md opaque-image'>ATUL CHOURASIYA</p>
                  <span className=' w-24  mt-3 mb-2 h-[3px] bg-blue-300'></span>
                  <p className=' text-nowrap font-extralight mb-4 text-center tracking-[2px] font-lato text-xs'>FULL STACK DEVELOPER</p>
               </div>
               <div className='p-4 flex justify-around flex-col'>
                  <p className=' font-bold text-3xl'>MY STORY</p>
                  <p className='font-lato text-justify font-medium'>
                     I'm Atul Chourasiya, a full-stack developer known for my creative touch. I thrive on turning ideas into code, making the complex seem simple. Let's keep it straightforward and build something amazing together!
                  </p>
                  <div className="flex justify-end">
                     <a download={true} href='/me.jpeg'>
                        <Button text={'Resume'} icon={faDownload} />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </AnimatedFadeIn>
   );
};

export default About;
