import React from 'react';
import AppRoutes from './AppRoutes';


const Overlay = () => {
   return (
      <div className='absolute top-0 left-0 w-full h-full'>
         <AppRoutes />
      </div>
   );
};

export default Overlay;
