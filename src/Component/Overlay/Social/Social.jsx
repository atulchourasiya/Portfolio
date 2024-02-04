import React from 'react';
import { SocialData } from './SocialData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social = () => {
  return (
    <div className='flex flex-row md:flex-col absolute top-0 md:top-1/2 md:left-0 md:-translate-y-1/2  py-4 px-4 w-full md:w-min h-[10rem]' >
      {
        SocialData.map((data) => {
          return <a href={data.link} download={data.isDownload} key={data.id}>
            <div className='flex m-3 flex-col justify-center items-center nav-icon' >
              <FontAwesomeIcon icon={data.icon}
                className='text-white  nav-icon'
              />
            </div>
          </a>;
        })
      }
    </div>
  );
};

export default Social;
