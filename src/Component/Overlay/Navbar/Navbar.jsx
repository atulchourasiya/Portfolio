import React from 'react';
import { NavbarData } from './NavbarData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { HeadingContext } from '../../Context/HeadingState';
import { useContext } from 'react';
const audio = new Audio('/soundeffect.mp3');
const Navbar = () => {
   const { setHeading } = useContext(HeadingContext);
   return (
      <div className="w-full flex justify-center" style={{
         boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'
      }}>
         <div className='flex flex-row md:flex-col absolute bottom-0 md:top-1/2 md:right-0 md:-translate-y-1/2  md:rounded-3xl justify-around py-4 px-4 w-full md:w-max bg-white md:bg-transparent' >
            {
               NavbarData.map((data) => {
                  return <NavLink to={data.link} key={data.id}>
                     <div className='flex flex-col justify-center items-center nav-icon' onClick={() => {
                        setHeading(data.heading);
                        audio.play();
                     }}>
                        <FontAwesomeIcon icon={data.icon}
                           className=' text-black md:text-white  nav-icon'
                        />
                     </div>
                  </NavLink>;
               })
            }
         </div>
      </div>
   );
};

export default Navbar;
