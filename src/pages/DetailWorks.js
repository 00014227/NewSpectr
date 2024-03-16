import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import service from '../assets/service.png'
import Last3Page from '../Components/Last3Page'
// import '../pages/DetailWorks/detail.css'
import portfolioData from '../data/potfolio.json'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import slide_image_1 from '../assets/service.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
export default function DetailWorks() {
    const [slidesPerView, setSlidesPerView] = useState(10);

    const checkScreenSize = () => {
        // Adjust the breakpoint value (768) based on your design
        setSlidesPerView(window.innerWidth < 768 ? 2 : 3);
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
        <div className='lg:flex items-center block overflow-y-hidden overflow-x-hidden  bg-black h-[100vh]'>
            <NavBar />
            <section className="bg-black flex-shrink-0 relative  w-screen lg:h-screen h-[60vh] flex flex-col lg:items-start justify-center">
                <div>
                    <Link to={'/'}>
                        <h1 className="heading absolute right-0 top-5 text-white text-6xl text-right">Наши работы</h1>

                    </Link>
                </div>

                <div className="container mx-auto ">

                    <Swiper
                        effect={'coverflow'}
                        spaceBetween={50}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={slidesPerView}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: -100,
                            depth: 500,
                            modifier: 1,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container flex items-center justify-center"
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



                        <div className="lg:block slider-controler hidden">
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