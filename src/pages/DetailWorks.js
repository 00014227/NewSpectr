import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import service from '../assets/service.png'
import Last3Page from '../Components/Last3Page'
import '../pages/DetailWorks/detail.css'
import portfolioData from '../data/potfolio.json'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import slide_image_1 from '../assets/service.png'
import { Swiper, SwiperSlide } from 'swiper/react';
export default function DetailWorks() {
   


    return (
        <div className='lg:flex block overflow-y-hidden  overflow-x-auto h-[100vh]'>
            {/* <NavBar /> */}
            <section className="bg-black flex-shrink-0  w-screen h-screen flex flex-col lg:items-start justify-center">
            <div className="container ">
            <h1 className="heading text-white">Наши работы</h1>
            <Swiper
                effect={'coverflow'}
                spaceBetween={80}
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
                    {/* <div className="swiper-pagination"></div> */}
                </div>
            </Swiper>
        </div>
            </section>
            <Last3Page />
        </div>
    )
}
