import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/effect-cards';
import slide_image_1 from '../assets/service.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import portfolioData from '../data/potfolio.json'
import {EffectCoverflow, Pagination, Navigation,  FreeMode, Scrollbar, Mousewheel } from 'swiper'

export default function SwiperHome() {
    const [slidesPerView, setSlidesPerView] = useState(10);
    const [swiperSize, setSwiperSize] = useState()


    const getInitialSwiperSize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
          return 'max-w-[100vw]';
        } else if (screenWidth > 1536) {
          return 'max-w-[40vw]';
        } else {
          return 'max-w-[55vw]';
        }
      };

    const checkScreenSize = () => {
        // Adjust the breakpoint value (768) based on your design
        setSlidesPerView(window.innerWidth < 768 ? 2 : 3);
        setSwiperSize(getInitialSwiperSize())
  
    };

    useEffect(() => {
        // Check screen size on mount
        checkScreenSize();

        // Attach event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);
  return (
    <div className="container mx-auto ">

    <Swiper
        effect={'coverflow'}
        direction='horizontal'
        scrollbar={true}
        mousewheel={true}
        spaceBetween={60}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
            rotate: 0,
            stretch: 320,
            depth: 400,
            modifier: 1,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, FreeMode, Scrollbar, Mousewheel]}
        className={`swiper_container ${swiperSize} flex items-center justify-center`}
    >
        {portfolioData.portfolio.map((work) => (
            <SwiperSlide className='relarive' key={work.id}>
                <div className='deck lg:w-[22rem] lg:h-[30rem] w-[13rem] h-[18rem]'>
                    <div class="card hovercard">
                        <div class="front face">
                            <img src={slide_image_1} alt="slide_image" className='lg:w-[22rem] lg:h-[30rem] w-[13rem] h-[18rem]' />
                            <h3 className="absolute top-0 text-white lg:text-[46px] text-[20px] font-bold font-['Jost'] capitalize">{work.company_name}</h3>
                        </div>

                        <div class="back face flex justify-center items-center">
                            <p className="text-white text-center mt-[22%] xl:text-[50px] text-[20px] font-bold font-['Jost'] uppercase">{work.company_name}</p>
                            <ul className='text-white lg:text-2xl list-disc'>
                                <li>Открытие</li>
                                <li>Маркетинг стратегия</li>
                                <li>Многостраничный сайт</li>

                            </ul>
                        </div>
                    </div>
                </div>

            </SwiperSlide>
        ))}



   
    </Swiper>
</div>
  )
}