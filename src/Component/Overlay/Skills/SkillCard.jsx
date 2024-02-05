import { Tooltip } from '@mui/material';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import Skeleton from '@mui/material/Skeleton';

const SkillCard = ({ title, image }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return (
    <Tilt
      scale={1.1}
    >
      <Tooltip title={title}>
        <div className='bg-white bg-opacity-90 flex  rounded  min-h-[4rem] min-w-[4rem] max-h-[5rem] max-w-[5rem] w-full h-full mx-2 md:w-[8rem] md:h-[8rem]  p-2'>
          <img src={image} onLoad={handleImageLoad} className='opaque-image object-contain' alt="" />
          {!isLoaded && <Skeleton variant="rectangular" className=' !hidden md:!block rounded-circle w-full md:!h-full' />}
        </div>
      </Tooltip>
    </Tilt>
  );
};

export default SkillCard;
