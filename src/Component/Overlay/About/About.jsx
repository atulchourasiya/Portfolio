import React from 'react';
import Button from '../Shared/CustomizedButton';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import AnimatedFadeIn from '../../Animation/AnimatedFadeIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Skeleton } from '@mui/material';

const About = () => {
   const resume = '/me.jpeg'
   const [isLoaded, setIsLoaded] = React.useState(false);
   const handleImageLoad = () => {
      setIsLoaded(true);
   };
   return (
     <AnimatedFadeIn>
       <div className='flex justify-center items-center h-[calc(100%-52.7px)] md:h-full px-4'>
         <div className=' flex flex-col md:flex-row bg-white bg-opacity-90  rounded-3xl p-3 md:p-4 w-full max-w-[19rem] md: md:w-2/3 md:max-w-[40rem]'>
           <div className='flex  items-center flex-col bg-yellow-50 h-max p-2 md:p-4 rounded-2xl shadow-2xl'>
             <img
               src='/me.jpeg'
               alt='Picture of Atul Chourasiya'
               className='opaque-image bottom-1 border-white  rounded-full h-24 md:h-36 aspect-auto  m-2 '
               onLoad={handleImageLoad}
             />
             {!isLoaded && (
               <Skeleton
                 variant='circular'
                 className='!hidden md:!block !w-24 md:!w-36 !h-24 md:!h-36'
               />
             )}
             <p className=' font-bold tex text-center text-md opaque-image'>
               ATUL CHOURASIYA
             </p>
             <span className=' w-24 mt-2  md:mt-3 mb-2 h-[3px] bg-blue-300'></span>
             <p className=' text-nowrap font-extralight mb-2 md:mb-4 text-center tracking-[2px] font-lato text-xs'>
               FULL STACK DEVELOPER
             </p>
             <div className='flex'>
               <a
                 href='https://github.com/atulchourasiya'
                 className='mx-2'
                 target='_blank'
                 rel='noopener noreferrer'>
                 <FontAwesomeIcon
                   icon={faGithub}
                   className='text-base text-black'
                 />
               </a>
               <a
                 href='https://www.linkedin.com/in/atul-chourasiya-7414ba215/'
                 className='mx-2'
                 rel='noopener noreferrer'
                 target='_blank'>
                 <FontAwesomeIcon
                   icon={faLinkedin}
                   className='text-base text-black'
                 />
               </a>
               <a
                 href={resume}
                 download
                 className='mx-2'
                 target='_blank'
                 rel='noopener noreferrer'>
                 <FontAwesomeIcon
                   icon={faDownload}
                   className='text-base text-black'
                 />
               </a>
             </div>
           </div>
           <div className='p-2 md:p-4 flex justify-around flex-col'>
             <p className=' font-bold text-lg md:text-3xl hidden md:block '>
               MY STORY
             </p>
             <p className='font-lato text-sm md:text-lg text-justify font-medium'>
               I'm Atul Chourasiya, a full-stack developer known for my creative
               touch. I thrive on turning ideas into code, making the complex
               seem simple. Let's keep it straightforward and build something
               amazing together!
             </p>
             <div className='flex justify-end'>
               <a download={true} href={resume}>
                 <Button text={"Resume"} icon={faDownload} />
               </a>
             </div>
           </div>
         </div>
       </div>
     </AnimatedFadeIn>
   );
};

export default About;
