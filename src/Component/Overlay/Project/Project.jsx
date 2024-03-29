import React, { useContext } from 'react';
import ProjectCard from './ProjectCard';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ProjectData } from './ProjectData';
import AnimatedFadeIn from '../../Animation/AnimatedFadeIn';
import { BackgroundMusicContext } from '../../Context/BackgroundMusicState';

const Project = () => {
  const { playSoundEffect } = useContext(BackgroundMusicContext);
  return (
    <AnimatedFadeIn>
      <div className='flex justify-center items-center  h-[calc(100%-52.7px)] md:h-full  m-0 md:mx-16'>
        <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          onSlideChangeTransitionStart={playSoundEffect}
          grabCursor={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          spaceBetween={30}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {
            ProjectData.map((data) => {
              return <SwiperSlide key={data.id} className='w-fit ' >
                <ProjectCard title={data.title} image={data.image} desc={data.desc} liveLink={data.liveLink} githubLink={data.githubLink} />
              </SwiperSlide>;
            })
          }
        </Swiper>
      </div>
    </AnimatedFadeIn>
  );
};

export default Project;
