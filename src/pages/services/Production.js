import React, { useRef, useState } from 'react'
import NavBar from '../../Components/NavBar'
import Button from '../../Components/Button';
import SnakeBox from '../../Components/SnakeBox';
import Last3Page from '../../Components/Last3Page';
import Circles from '../../Components/Circles';
import { Helmet } from 'react-helmet-async';

export default function Production() {
    const scrollContainerRef = useRef(null);
    const [navbar, setNavbar] = useState(true);

    const handleWheelScroll = (e) => {
        // Specify the scroll distance for horizontal scrolling
        const scrollDistanceX = 100;
       
        // Check if scrolling down
        if (e.deltaY > 0) {
            // Scroll to the right by 'scrollDistanceX' pixels
            scrollContainerRef.current.scrollLeft += scrollDistanceX;
           
           
        } else if (e.deltaY < 0) {
            scrollContainerRef.current.scrollLeft -= scrollDistanceX;
        }
        if (window.innerWidth < 1024) {
            setNavbar(true)
        } else{
        setNavbar(false) }
    };

    const keywords = ['создание контента', 'профессиональные видеоролики', 'проведении фотосессии', 'голос бренда', 'мобилография']


    return (
        <>
        <Helmet>
            <title>Продакшн и создание контента</title>
            <meta name='description' content='Спектр - это комплексное агентство, которое предлагает полный спектр услуг по производству и созданию контента. Мы помогаем компаниям любого размера создавать высококачественный, привлекательный и эффективный контент, который достигает целевой аудитории и решает бизнес-задачи'/>
            <meta name="keywords" content={keywords.join(', ')} />

            <link rel='cannonical' href='/services/production'/>
        </Helmet>
        <div ref={scrollContainerRef} onWheel={handleWheelScroll} className='lg:flex items-center bg-black block lg:overflow-y-hidden  overflow-x-hidden h-[100vh]'>
            <NavBar navbar={navbar} />
            <section className=' flex-shrink-0  w-screen lg:h-screen h-auto lg:flex items-center md:px-10 px-4 md:pt-0 pt-32'>
                <div className='lg:flex gap-40'>
                    <div className='lg:flex relative justify-center'>
                        <Circles/>
                        {/* <div className='  flex lg:flex-col items-center justify-center md:mt-4  lg:space-y-14 lg:space-x-0 space-x-10'>
                            <img src={branding} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                            <img src={web} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                            <img src={branding} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                        </div> */}
                        <div className=''>

                            <div className=' lg:ml-[8rem] w-full'>
                                <h1 className="text-white text-right 2xl:text-[120px] md:text-[80px] text-[44px] font-bold  uppercase md:leading-[120px] 2xl:leading-[192px]">продакшн<span className='font-extralight ml-3'>и</span>  <span className='font-extralight flex justify-end'>создание контента</span></h1>
                            </div>

                            <div className='lg:ml-[5rem]'>
                                <h2 className="2xl:text-[190px] md:text-[120px] text-[64px] font_border  font-bold  uppercase ">Наши<br /> услуги</h2>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className='bg-black flex-shrink-0 xl:ml-0 lg:ml-44  w-auto lg:h-screen lg:pr:0 md:pr-16 pr-10 h-auto lg:flex items-center  lg:pt-0 md:pt-24 '>
                <div className=' lg:h-screen 2xl:w-[182px] lg:w-[102px] h-[102px]  w-screen lg:border-r lg:border-l border-t border-b  border-white lg:rotate-180 flex flex-col lg:justify-between justify-center items-center'>
                    <h3 className="text-white uppercase horizon-text 2xl:text-[70px] my-auto md:text-[50px] text-3xl  font-bold   leading-snug tracking-wider"> виды продакшена</h3>
                </div>
                <div className=' 2xl:max-w-[2688px] lg:ml-24 px-5 relative h-fit md:mt-8'>
                    <h2 className="text-white 2xl:text-[200px] md:text-[95px] text-[44px] font-black font-['Jost'] uppercase 2xl:leading-[240px] md:leading-[200px]">Виды <br />продакшена</h2>
                    <p className=" md:absolute lg:top-0 lg:-right-[10rem] bottom-[180px] -right-[4rem] md:w-[60%] w-auto text-white text-[18px] 2xl:text-[28px] font-normal font-['Evolventa']  leading-[42px]">
                    Продакшен - это процесс создания продукции или услуги, включающий в себя планирование, организацию и контроль всех этапов производства. Эффективный продакшен основан на оптимизации процессов, ресурсов и технологий для достижения высокого качества и экономической эффективности.</p>
                </div>
                
                <div className='lg:flex lg:ml-48 gap-16'>
                    <div className=' space-y-10 ml-[0.9rem]'>
                        
                        <Button text={'Профессиональные видеоролики'} documentId={83}/>
                        <div className='flex justify-end'>
                        <Button text={'Создание контента'} documentId={87}/>

                        </div>

                        <Button text={'Проведении фотосессии'} documentId={84}/>

                    </div>

                <div className=' lg:flex lg:flex-col lg:justify-center space-y-9 lg:ml-20 items-center'>
                    <div className='lg:block flex justify-end'>
                        <Button text={'Мобилография'} documentId={85}/>
                    </div>

                    <div className='lg:block hidden'>
                        <SnakeBox />
                    </div>
                    <div className='ml-[0.9rem]'>
                        <Button text={'Голос бренда'} documentId={86}/>
                    </div>

                </div>
                </div>
                
            </section>
            <Last3Page/>
        </div>
        </>
    )
}
