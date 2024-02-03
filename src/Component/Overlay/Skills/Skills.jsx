import React from 'react';
import SkillCard from './SkillCard';
import { SkillArray } from './SkillData';
import AnimatedFadeIn from '../../Animation/AnimatedFadeIn';

const Skills = () => {
   return (
      <AnimatedFadeIn>
         <div className='flex justify-center items-center h-[calc(100%-52.7px)] md:h-full md:px-4 px-2'>
            <div className='grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-3 px-4 md:px-20'>
               {
                  SkillArray.map((data) => {
                     return <SkillCard key={data.id} image={data.image} />;
                  })
               }
            </div>
         </div>
      </AnimatedFadeIn>
   );
};

export default Skills;
