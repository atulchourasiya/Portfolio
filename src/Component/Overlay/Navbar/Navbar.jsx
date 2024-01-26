import React from 'react';
import { NavbarData } from './NavbarData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <div className="w-full flex justify-center" style={{
         boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'
      }}>
         <div className='flex flex-row md:flex-col absolute bottom-2 md:top-1/2 md:right-0 md:-translate-y-1/2  md:rounded-3xl justify-around py-4 px-4 w-full md:w-max bg-white md:bg-transparent' >
            {
               NavbarData.map((data) => {
                  return <Link to={data.link} key={data.id}>
                     <div className='flex flex-col justify-center items-center'>
                        <FontAwesomeIcon icon={data.icon} 
                        className=' text-black md:text-white'
                        style={{ fontSize: '1.3rem' }}
                        />
                     </div>
                  </Link>;
               })
            }
         </div>
      </div>
   );
};

export default Navbar;
