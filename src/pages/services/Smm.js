import React, { useRef, useState } from 'react'
import NavBar from '../../Components/NavBar'

import Button from '../../Components/Button'
import SnakeBox from '../../Components/SnakeBox'

import Last3Page from '../../Components/Last3Page'
import Circles from '../../Components/Circles'
import { Helmet } from 'react-helmet-async'

export default function Smm() {
    const [navbar, setNavbar] = useState(true);
    const scrollContainerRef = useRef(null);

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
        } else {
            setNavbar(false)
        }
    };

    const keywords = ['SMM продвижение', 'SMM стратегия', 'cоздание контента', 'фирменный стиль страниц', 'таргетированная реклама']

    return (
        <>
        <Helmet>
            <title>Смм продвижение и реклама</title>
            <meta name='description' content='Социальные сети, считающиеся сегодня наиболее оптимальным рекламным инструментом, станут с нами местом, где Ваши клиенты смогут найти Вас и выбрать без колебаний.'/>
            <link rel='cannonical' href='/services/smm'/>
            <meta name="keywords" content={keywords.join(', ')} />

        </Helmet>
        <div ref={scrollContainerRef} onWheel={handleWheelScroll} className='lg:flex items-center bg-black block lg:overflow-x-auto overflow-x-hidden lg:overflow-y-hidden h-[100vh]'>
            <NavBar navbar={navbar} />
            <section className='bg-black flex-shrink-0  w-screen lg:h-[100vh] flex items-center md:pt-0 pt-32'>
                <div className='lg:flex '>
                    <Circles/>
               
                    <div className=''>

                        <div className='2xl:ml-[8rem] lg:ml-[5rem] w-full md:pr-4 pr-2'>
                            <h1 className="text-white  text-right 2xl:text-[100px] md:text-[80px] text-[44px] font-bold  uppercase md:leading-[120px] 2xl:leading-[192px]">смм продвижение  <span className='font-extralight flex justify-end'>и   реклама</span></h1>
                        </div>

                        <div className='lg:ml-[5rem] pl-4'>
                            <h2 className="2xl:text-[150px] md:text-[120px] text-[64px] font_border  font-bold  uppercase ">Наши<br /> услуги</h2>
                        </div>
                    </div>
                </div>
            </section>



            <section className='bg-black flex-shrink-0 xl:ml-0 ml-0 lg:ml-[8rem] md:w-auto w-screen lg:h-screen lg:pr-0 md:pr-12 pr-12 lg:pb-0 pb-9 h-auto lg:flex items-center  lg:pt-0 md:pt-24 '>
                <div className=' lg:h-screen 2xl:w-[182px] lg:w-[102px] h-[102px] w-screen lg:border-r lg:border-l border-t border-b  border-white lg:rotate-180 flex flex-col lg:justify-between justify-center items-center'>
                    <h3 className=" text-white horizon-text 2xl:text-[70px] md:text-[50px] text-4xl my-auto  font-bold uppercase  leading-snug tracking-wider">Какие виды CMM</h3>
                </div>
                <div className=' 2xl:max-w-[2688px] lg:pt-0 pt-4 lg:ml-24 px-4 relative'>
                    <h2 className="text-white 2xl:text-[120px] md:text-[95px] text-[44px] font-black font-['Jost'] uppercase 2xl:leading-[240px]">виды смм<br /> продвижение <br /></h2>
                    <p className="2xl:w-[800px] lg:w-[900px] top-36 lg:right-[-80px] right-[200px] w-auto text-white text-[18px] 2xl:text-[28px] font-normal font-['Evolventa'] leading-[42px]">
                        SMM (социальные медиа-маркетинг) - это стратегия продвижения бренда или продукта через социальные платформы, такие как Facebook, Instagram, Twitter и LinkedIn. Он включает в себя создание и распространение контента, взаимодействие с аудиторией, а также использование рекламных инструментов для достижения целей маркетинговой кампании.</p>
                </div>


                <div className=' hidden md:flex flex-col justify-center items-center lg:mt-0 mt-10 '>
                    <SnakeBox />
                </div>
                <div className=' lg:ml-32   '>
                    <div className='lg:block md:flex justify-between'>
                        <div className=''>
                            <div className='ml-[0.9rem]'>
                            <Button text={'SMM стратегия'}  documentId={56} />
                            </div>
                    

                            <div className='lg:block flex justify-end'>   <Button text={'SMM продвижение'}  documentId={57} /></div>

                        </div>
                        <div className=' lg:mr-11'>
                            <div className='ml-[0.9rem]'>
                            <Button text={'Создание контента'}  documentId={58} />
                            </div>
                      
                            <div className='lg:block flex justify-end'>
                                <Button text={'Инфлюенс маркетинг'}  documentId={59}/>
                            </div>

                        </div>
                    </div>

                </div>

                <div className=' md:flex lg:flex-col lg:justify-center justify-between space-y-9 lg:ml-20 items-center'>
                    <div className=' ml-[0.9rem]'>
                        <Button text={'Фирменный стиль страниц'}  documentId={60}/>
                    </div>

                    {/* <div className='lg:block hidden'>
                        <SnakeBox />
                    </div> */}
                    <div className=' lg:mr-11 flex justify-end'>
                        <Button text={'Таргетированная реклама'}  documentId={61}/>
                    </div>

                </div>

            </section>
            <Last3Page />

        </div>
        </>
    )
}
