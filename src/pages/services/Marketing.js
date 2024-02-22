import React, { useRef } from 'react'
import NavBar from '../../Components/NavBar'
import branding from "../../assets/services/branding.svg"
import web from "../../assets/services/web.svg"
import Slider from '../../Components/Slider'
import SnakeBox from '../../Components/SnakeBox'
import ButtonModal from '../../Components/Button'
import readbtn from '../../assets/readbtn.png'
import next from '../../assets/next.svg'
import Last3Page from '../../Components/Last3Page'

export default function Marketing() {
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
    };
    return (
        <div ref={scrollContainerRef} onWheel={handleWheelScroll} className='lg:flex items-center bg-black block lg:overflow-x-auto overflow-x-hidden h-[100vh]'>
            <NavBar />
            <section className=' flex-shrink-0  w-screen lg:h-screen h-auto lg:flex '>
                <div className='lg:flex gap-40'>
                    <div className='flex relative justify-center'>
                    <div className='  flex lg:flex-col items-center justify-center md:mt-4 mt-20 lg:space-y-14 lg:space-x-0 space-x-10'>
                        <img src={branding} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                        <img src={web} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                        <img src={branding} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                    </div>
                    <div className=''>
                        
                        <div className=' lg:ml-[17rem] w-full'>
                            <h1 className="text-white text-right 2xl:text-[120px] md:text-[80px] text-[44px] font-bold  uppercase md:leading-[120px] 2xl:leading-[192px]">маркетинг<span className='font-extralight ml-3'>и</span>  <span className='font-extralight flex justify-end'>продвижение</span></h1>
                        </div>
                        
                        <div className='lg:ml-[5rem]'>
                            <h2 className="2xl:text-[190px] md:text-[120px] text-[64px] font_border  font-bold  uppercase ">Наши<br /> услуги</h2>
                        </div>
                    </div>

                 
                    </div>
                </div>
            </section>
            <section className='bg-black flex-shrink-0  w-auto lg:h-screen h-auto  lg:flex items-center'>
                <Slider text={'MARKETING'} />
                <div className=' 2xl:max-w-[2688px] lg:ml-24 px-5 relative h-fit'>
                    <h2 className="text-white 2xl:text-[200px] md:text-[95px] text-[44px] font-black font-['Jost'] uppercase 2xl:leading-[240px] md:leading-[200px]">Виды <br />маркетинга</h2>
                    <p className=" md:absolute lg:top-0 lg:-right-72 bottom-[180px] right-[0px] md:w-[90%] w-[350px] text-white text-[18px] 2xl:text-[28px] font-normal font-['Evolventa']  leading-[42px]">
                    Существует множество видов маркетинга, каждый из которых имеет свои особенности и преимущества. Они включают традиционный маркетинг, основанный на использовании традиционных каналов коммуникации, таких как ТВ и пресса, а также цифровой маркетинг, ориентированный на интернет-платформы и социальные сети для привлечения и взаимодействия с аудиторией.</p>
                </div>

                <div className='lg:block hidden lg:ml-64'>
                 <SnakeBox /> 
            </div>
              

                <div className='lg:block md:flex justify-center items-center px-[60px] lg:h-[80vh]'>
                    <div className='lg:space-y-0 md:space-y-60'>
                        <div className=' mr-14'>
                            <ButtonModal text={'Традиционный маркетинг'} category={'web'} documentId = {1}/>
                        </div>
                        <div className='lg:ml-20 md:block flex justify-end'>
                            <ButtonModal text={'Цифровой маркетинг'} documentId = {2} />
                        </div>
                    </div>
                    <div className='md:hidden block'>
                    <SnakeBox />
                    </div>
          
                    <div className=' lg:space-y-0 md:space-y-60'>
                        <div className=' lg:ml-48 '>
                            <ButtonModal text={'Маркетинг событий'} documentId = {3}/>
                        </div>

                        <div className=' lg:ml-72 md:block flex justify-end'>
                            <ButtonModal text={'Маркетинг влияния'} />
                        </div>
                    </div>

                </div>
                <div className='lg:flex hidden items-end h-[90vh]  '>
                    <div className='relative'>
                        <img src={readbtn} className=" animate-spin-slow" />
                        <img src={next} className=" w-[44px] h-[40px] absolute top-12 left-12" />
                    </div>
                </div>
            </section>

            <Last3Page/>
        </div>
    )
}
