import React, { useRef, useState } from 'react'
import branding from "../../assets/services/branding.svg"
import Button from '../../Components/Button'
import NavBar from '../../Components/NavBar'
import SnakeBox from '../../Components/SnakeBox'

import Last3Page from '../../Components/Last3Page'
import Slider from '../../Components/Slider'
import Circles from '../../Components/Circles'
import { Helmet } from 'react-helmet-async'


export default function Branding() {
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

    const keywords = ['cтратегия бренда', 'разработка нейминга', 'создание брендбук', 'голос бренда', 'презентация компании', 'создание логотипа', 'фирменные цвета', 'фирменные шрифты', 'маскот компании', 'дизайн поста', 'дизайн упаковки']

    return (
        <>
            <Helmet>
                <title>Дизайн и брендинг</title>
                <meta name='description' content='Spectr - это агентство дизайна и брендинга, которое поможет вам создать уникальный и запоминающийся бренд, который будет выделяться на фоне конкурентов.'/>
                <meta name="keywords" content={keywords.join(', ')} />

                <link rel='cannonical' href='/services/branding'/>
            </Helmet>
        <div
            ref={scrollContainerRef} onWheel={handleWheelScroll}
            className='lg:flex block bg-black lg:overflow-x-hidden  lg:overflow-y-hidden items-center  h-[100vh] ' >
            <NavBar navbar={navbar} />
            <section className='bg-black flex-shrink-0  lg:w-auto lg:h-screen h-auto lg:flex items-center md:px-10 px-4 md:pt-0 pt-32'>
                <div className='lg:flex '>
                    <Circles/>
                
                    <div className=' space-y-[10%]'>
                        <div className='lg:ml-[14rem] '>
                            <h1 className="text-white 2xl:text-[120px] md:text-[80px] text-[44px] text-end  font-bold  uppercase md:leading-[120px] 2xl:leading-[192px]">дизайн <span className='font-extralight ml-3'>и</span> брендинг</h1>

                        </div>

                        <div className=' lg:ml-[5rem]'>
                            <h2 className="2xl:text-[200px] md:text-[120px] text-[64px] font_border  font-bold font-['Jost'] uppercase ">Наши<br />услуги</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-black flex-shrink-0  w-auto lg:h-screen md:pr-0 pr-10 h-auto lg:flex items-center lg:pb-0 pb-10  lg:pt-0 md:pt-24'>

            <div className='lg:ml-[6rem]'>
                <Slider text={'БРЕНДИНГ'}/>

                </div>

                <div className=''>
                    <div className='lg:block hidden'>
                        <h3 className=' text-white 2xl:text-[70px] md:text-[70px] text-center font-[jost] uppercase text-2xl'>создание</h3>
                    </div>
                    <div className='lg:flex '>
                        <div className=' lg:mx-14 pl-[0.7rem]  lg:block md:flex justify-between'>
                            <div>
                                <Button text={'Cтратегия бренда'} documentId={39} />
                                <div className='lg:block flex justify-end'>
                                    <Button text={'Pазработка нейминга'} documentId={31} />

                                </div>


                            </div>
                            <div className=' md:mr-11'>
                                <Button text={'Cтратегия комуникации'} documentId={27} />
                                <div className='lg:block flex justify-end'>
                                    <Button text={'Брендбук и гайдлайн'} documentId={33} />

                                </div>

                            </div>

                        </div>

                        <div className='lg:hidden hidden  md:flex flex-col justify-center items-center'>
                            <SnakeBox />
                        </div>


                        <div className=' lg:ml-[2rem]  pl-[0.7rem]'>
                            <div className='lg:block md:flex justify-between'>
                                <div className=''>


                                    <div className=''>   <Button text={'Позиционирование бренда'} documentId={26} /></div>
                                    <div className='lg:block flex md:justify-center justify-end md:items-center'>
                                        <Button text={'Голос бренда'} documentId={36} />
                                    </div>
                                </div>
                                <div className=' md:mr-11'>
                                 
                                        <Button text={'Ценности и миссия'} documentId={29}/>
                                    
                                    <div className='lg:block flex justify-end'>
                                    <Button text={'Платформа бренда'} documentId={55} />
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className='lg:ml-12 md:flex lg:flex-col pl-[0.7rem] lg:justify-center md:justify-between space-y-6  items-center '>
                            <div className=''>
                                <Button text={'Контент стратегия'} documentId={41} />
                            </div>

                            <div className='lg:block hidden'>
                                <SnakeBox />
                            </div>
                            <div className=' md:mr-11 lg:block flex justify-end'>
                                <Button text={'Презентация компании'} documentId={42} />
                            </div>

                        </div>
                    </div>
                </div>


                <div className='lg:ml-[6rem]'>
                <Slider text={'АЙДЕНТИКА'}/>

                </div>
                <div>
                    <div className=' lg:block hidden'>
                        <h3 className=' text-white 2xl:text-[70px] md:text-[70px] text-center font-[jost] uppercase text-2xl'>бренда</h3>
                    </div>
                    <div className='lg:flex justify-between'>


                        <div className=' lg:mx-14 pl-[0.7rem] lg:block  justify-between'>
                            <div>
                            <div className='lg:block flex justify-end'>
                                <Button text={'Создание логотипа'} documentId={32} />
                                </div> 
                                    <Button text={'Фирменные цвета'} documentId={34} />
                               


                            </div>
                            <div className=' md:mr-11'>
                                 <div className='lg:block flex justify-end'>
                                <Button text={'Дизайн мерча'} documentId={44} />
                                </div>
                                    <Button text={'Дизайн упаковки'} documentId={38} />

                                
                            </div>
                        </div>

                        <div className='lg:ml-32 lg:flex-col pl-[0.7rem] lg:justify-center md:justify-between  items-center '>
                            <div className='flex justify-end'>
                                <Button text={'Фирменные шрифты'} documentId={35} />
                            </div>

                            <div className=''>
                                <Button text={'Фирменный паттерн'} documentId={45} />
                            </div>
                            <div className=' md:mr-11 lg:block flex justify-end'>
                                <Button text={'Дизайн поста'} documentId={46} />
                            </div>

                            <Button text={'Маскот компании'} documentId={47} />


                        </div>
                    </div>
                </div>
            </section>








            <Last3Page />
        </div>
        </>
    )
}
