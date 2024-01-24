import React from 'react'
import ss1 from '../assets/ss1.svg'
import ss2 from '../assets/ss2.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../pages/DetailWorks/detail.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import slide_image_1 from '../assets/service.png'

export default function TestPage() {
    return (

        <div className="container">
            <h1 className="heading">Flower Gallery</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>


    )
}


{/* <div className=' flex relative ml-56'>
                    
<div className='flex gap-20'>
    <img src={currentItem.image} className="w-[30vw] h-[85vh]" />
    <div>
        <h1 className="text-white ml-36 2xl:text-[120px] text-[80px] font-extralight font-['Jost'] uppercase">our <span className='font-bold'>works</span></h1>
        <div className='flex gap-36'>
            <div>
                {currentItem && currentItem.works.map((work, index) => (
                    <p key={index} className='text-white text-2xl'>
                        {work}
                    </p>
                ))}
                <p className="text-white text-2xl">UI/UX Design</p>
                <p className="text-white text-2xl">Branding</p>
                <p className="text-white text-2xl">Case Study</p>
                <div className='flex'>
                    <button onClick={prevItem}><svg class="w-[64px] h-[24px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg></button>
                    <button onClick={nextItem}>
                        <svg class="w-[64px] h-[24px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>
     
            <img src={portfolioData.portfolio[(currentIndex + 1) % totalItems]?.image} className="w-[18vw] h-[55vh]" />
        </div>
    </div>


</div>

<h4 className="text-white bottom-0 z-40 absolute text-[150px] font-black font-['HelveticaNeueCyr'] uppercase">{currentItem.company_name}</h4>
</div> */}