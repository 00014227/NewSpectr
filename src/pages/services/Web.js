import React, { useRef, useState } from 'react'
import NavBar from '../../Components/NavBar'
import branding from "../../assets/services/branding.svg"
import web from "../../assets/services/web.svg"
import Slider from '../../Components/Slider'
import SnakeBox from '../../Components/SnakeBox'
import Button from '../../Components/Button'
import readbtn from '../../assets/readbtn.png'
import next from '../../assets/next.svg'
import servicesData from '../../data/services.json'
import eye from '../../assets/eye.png'
import service from '../../assets/service.png'
import Last3Page from '../../Components/Last3Page'

export default function Web() {
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
        } else{
        setNavbar(false) }
    };
    return (
        <div
        ref={scrollContainerRef} onWheel={handleWheelScroll} 
        className='lg:flex block bg-black lg:overflow-x-hidden  lg:overflow-y-hidden items-center  h-[100vh]'>
            <NavBar navbar={navbar}/>
            <section className='bg-black flex-shrink-0  w-auto lg:h-[100vh] md:h-[80vh]  flex items-center md:px-11 px-4'>
                <div className='lg:flex '>
                <div className='  flex lg:flex-col items-center justify-center md:mt-4 lg:mt-20 lg:space-y-14 lg:space-x-0 space-x-10'>
                        <img src={branding} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                        <img src={web} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                        <img src={branding} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                    </div>
                    <div className=''>
                        
                        <div className=' lg:ml-[17rem]'>
                            <h1 className="text-white 2xl:text-[120px] md:text-[80px] text-[44px] font-bold  uppercase md:leading-[120px] 2xl:leading-[192px]">создание сайтов<span className='font-extralight ml-3'>и</span>  <span className='font-extralight flex justify-end'>приложений</span></h1>
                        </div>
                        
                        <div className='lg:ml-[5rem]'>
                            <h2 className="2xl:text-[190px] md:text-[120px] text-[64px] font_border  font-bold  uppercase ">Наши<br /> услуги</h2>
                        </div>
                    </div>
                </div>  
            </section>
            <section className='bg-black flex-shrink-0  w-auto lg:h-screen h-auto block lg:flex items-center  md:px-11 px-4'>
                <Slider text={'Вебсайты'} />
                <div className=' 2xl:max-w-[2688px] lg:ml-24  relative'>
                    <h2 className="text-white 2xl:text-[120px] md:text-[80px] text-[44px] font-black font-['Jost'] uppercase 2xl:leading-[240px]">создание <br /> сайтов любой<br /> сложности</h2>
                    <p className="2xl:w-[600px] lg:absolute lg:top-9 lg:right-[-300px] top-[280px] right-0 w-[350px] text-white text-[18px] 2xl:text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">
                    Рисуем прототипы, создаём макеты, верстаем для разных типов устройств. Внедряем необходимую CMS, интегрируем CRM.</p>
                </div>
                <div className='lg:block md:hidden lg:ml-40'>
                    <SnakeBox />
                </div>


                <div className='lg:block  justify-center items-center px-4 md:mt-0 mt-9 space-y-9'>
                    <div className='lg:space-y-0 lg:block md:flex justify-between'>
                        <div className=' lg:ml-0 md:ml-[4rem] '>
                            <Button text={'Landing Page'} category={'web'} documentId = {1}/>
                        </div>
                        <div className='lg:ml-20 md:block flex justify-end mr-3' documentId={4}>
                            <Button text={'E-Commerce'} />
                        </div>
                    </div>
                    <div className=' lg:hidden md:flex hidden  justify-center items-center'>
                        <SnakeBox />
                    </div>

                    <div className='lg:space-y-0  lg:block md:flex justify-between'>
                        <div className=' lg:ml-48  md:ml-[4rem]'>
                            <Button text={'Корпоративный сайт'} documentId = {2} />
                        </div>

                        <div className=' lg:ml-72  md:block flex justify-end mr-3'>
                            <Button text={'Сайт каталог'} documentId = {3}/>
                        </div>
                    </div>

                </div>
                <div className=' items-end h-[90vh] ml-20 hidden lg:flex'>
                    <div className='relative'>
                        <img src={readbtn} className=" animate-spin-slow" />
                        <img src={next} className=" w-[44px] h-[40px] absolute top-12 left-12" />
                    </div>
                </div>
            </section>

            <section className='bg-black flex-shrink-0  w-auto  lg:h-screen h-auto  lg:flex items-center'>
            <div className=' lg:h-screen 2xl:w-[180px] lg:w-[102px] h-[102px] w-screen lg:border-r lg:border-l border-t border-b  border-white lg:rotate-180 flex flex-col lg:justify-between justify-center items-center'>
                    <h3 className="font_border horizon-text 2xl:text-[70px] my-auto md:text-[60px] text-4xl  font-bold  font-['HelveticaNeueCyr'] leading-snug tracking-wider">онлайн сервисы</h3>
                </div>

                <div className=' 2xl:max-w-[2688px] lg:ml-24 md:px-10 px-4 relative'>
                    <h2 className="text-white 2xl:text-[120px] md:text-[95px] text-[44px] font-black font-['Jost'] uppercase 2xl:leading-[200px]">Создание <br /> онлайн <br /> сервиса</h2>
                    <p className="2xl:w-[600px] md:absolute lg:top-[164px] lg:right-[-450px] md:ml-0 right-0 top-60 md:w-[350px]  text-white text-[18px] 2xl:text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">
                    Проектируем, разрабатываем и развиваем сервисы для ваших клиентов или для внутреннего использования.</p>
                </div>


                <div className=' flex flex-col lg:justify-center  lg:ml-[30rem] lg:items-center space-y-16'>
                    <div className='flex justify-start items-start lg:ml-0 md:ml-[4rem] ml-8'>
                        <Button text={'SYSTEMS FOR BUSINESS'} documentId={5} />
                    </div>
                    <div className='md:flex justify-center items-center  hidden'>
                        <SnakeBox />
                    </div>
                    <div className='flex justify-end items-end lg:mr-0 md:mr-[4rem] mr-[3rem]'>
                        <Button text={'SYSTEMS FOR BUSINESS'} />
                    </div>
                </div>

                <div className='lg:flex hidden items-start h-screen ml-20'>
                    <div className='relative'>
                        <img src={readbtn} className=" animate-spin-slow" />
                        <img src={next} className=" w-[44px] h-[40px] absolute top-12 left-12" />
                    </div>
                </div>

            </section>

            <section className='bg-black flex-shrink-0  w-auto  h-screen   lg:flex items-center'>
                <Slider text={'MOBILE APPS'} />



                <div className=' 2xl:max-w-[2688px] lg:ml-24 md:px-10 px-4 relative'>
                    <h2 className="text-white 2xl:text-[140px] md:text-[95px] text-[44px] font-black font-['Jost'] uppercase 2xl:leading-[240px]">создание <br /> мобильных <br />приложений</h2>
                    <p className="2xl:w-[600px] lg:w-[540px] w-[400px] lg:absolute top-[-45px] 2xl:right-[-350px] lg:right-[-370px] right-[20px]  text-white text-[18px] 2xl:text-[28px] font-normal font-['Evolventa']  leading-[42px]">
                    Мы предлагаем разработку приложений для мобильных устройств на платформе iOS и Android с гарантией. Создаем с нуля полезные функциональные программы, превращающие обычный телефон в незаменимый девайс. С мобильным приложением ваш бизнес всегда «под рукой» у клиентов.  </p>
                </div>


                <div className=' flex flex-col lg:justify-center lg:items-center lg:ml-[30rem]  space-y-10'>
                    <div className='flex justify-start items-start lg:ml-0 md:ml-[4rem] ml-8'>
                        <Button text={'IOS development'} documentId={6}/>
                    </div>
                    <div className='md:flex justify-center items-center  hidden'>
                        <SnakeBox />
                    </div>
                    <div className='flex justify-end items-end lg:mr-0 md:mr-[4rem] mr-[3rem]'>
                        <Button text={'ANDROID DEVELOPMENT'} documentId={7} />
                    </div>
                </div>

                <div className='lg:flex hidden items-end h-[90vh] ml-20'>
                    <div className='relative'>
                        <img src={readbtn} className=" animate-spin-slow" />
                        <img src={next} className=" w-[44px] h-[40px] absolute top-12 left-12" />
                    </div>
                </div>
            </section>

            <section className='bg-black flex-shrink-0  w-auto   lg:h-screen h-auto  lg:flex items-center'>
                <div className=' lg:h-screen lg:w-[102px] h-[100px] w-full lg:border-r lg:border-l border-t border-b  border-white lg:rotate-180 flex flex-col lg:justify-between justify-center items-center'>
                    <h3 className="font_border horizon-text 2xl:text-[80px] my-auto md:text-[50px] text-4xl font-bold  font-['HelveticaNeueCyr'] capitalize leading-snug tracking-wider">Как мы работаем?</h3>
                </div>

                <h3 className="text-white 2xl:text-[240px] uppercase md:text-[120px] text-[44px] font-bold">наш <br /> <span className=' md:ml-40'>процесс</span></h3>
                <div className='lg:flex py-8'>
                    {servicesData.services.map((service) => (
                        <div className='flex mb-[5.5rem] md:h-[400px] h-[200px]  items-center' key={service.id}>
              
                                <p className='md:text-[450px] text-[200px] text-white font-bold'>{service.id}</p>
                                <div className='mt-auto'>
                                    <p className="text-white 2xl:text-[100px] md:text-[60px] text-[28px] font-bold uppercase">{service.title}</p>
                                    <p className="text-white 2xl:text-[28px] 2xl:w-[800px] md:w-[500px] w-[300px] md:text-[18px] text-sm font-normal font-['Evolventa'] capitalize">{service.description}</p>
                                </div>
                          

                           
                        </div>
                    ))}
                </div>

            </section>

    


            <Last3Page />

        </div>
    )
}
