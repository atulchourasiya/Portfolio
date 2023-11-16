import React from 'react';

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center h-screen w-screen' >
      <div className='relative bottom-5'>
        <h1 className='font-sans text-white  text-6xl tracking-[5.4rem] drop-shadow-2xl font-light'>
          DEVATUL
          <hr className='w-[90%] border text-white' />
        </h1>
        <p className='font-sans text-white  text-1xl tracking-[2.1rem] drop-shadow-2xl '>
          MERNSTACKDEVELOPER
        </p>
      </div>
    </section>
  );
};

export default Hero;
