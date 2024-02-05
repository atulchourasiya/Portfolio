import { Tooltip } from '@mui/material';
import React from 'react'
import Tilt from 'react-parallax-tilt';

const SkillCard = ({title,image}) => {
  return (
   <Tilt
    scale={1.1}
   >
    <Tooltip title={title}>
        <div className='bg-white bg-opacity-90 flex  rounded  min-h-[4rem] min-w-[4rem] max-h-[5rem] max-w-[5rem] w-full h-full mx-2 md:w-[8rem] md:h-[8rem]  p-2'>
      <img src={image} className='opaque-image object-contain'  alt="" />
    </div>
    </Tooltip>
   </Tilt>
  )
}

export default SkillCard
