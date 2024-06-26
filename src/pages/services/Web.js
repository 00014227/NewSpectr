import React, { useRef, useState } from 'react'
import NavBar from '../../Components/NavBar'

import Slider from '../../Components/Slider'
import SnakeBox from '../../Components/SnakeBox'
import Button from '../../Components/Button'

import servicesData from '../../data/services.json'
import Last3Page from '../../Components/Last3Page'
import Circles from '../../Components/Circles'
import { Helmet } from 'react-helmet-async'

export default function Web() {
    const [navbar, setNavbar] = useState(false); 
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
        if (window.innerWidth < 1200) {
            setNavbar(true)
        } else{
        setNavbar(false) }
    };

    const keywords = ['одностроничный сайт', 'онлайн магазин', 'корпоративный сайт', 'сайт каталог', 'маркетплейс', 'системы для бизнеса', 'ios разработка', 'android разработка']


    return (
        <>
        <Helmet>
        <title>Создание сайтов и приложений</title>
            <meta name='description' content='Мы разрабатываем и оптимизируем сайты любой сложности исходя из целей и задач. Комплексные услуги, такие как техническая поддержка, SEO и контекстная реклама, предоставляются высококвалифицированными ИТ-специалистами, имеющими опыт работы в этой области.'/>
            <link rel='cannonical' href='/services/web'/>
            <meta name="keywords" content={keywords.join(', ')} />
        </Helmet>
        <div
        ref={scrollContainerRef} onWheel={handleWheelScroll} 
        className='lg:flex items-center bg-black block lg:overflow-x-auto overflow-x-hidden lg:overflow-y-hidden h-[100vh]'>
            <NavBar navbar={navbar}/>
            <section className='bg-black flex-shrink-0  w-screen lg:h-[100vh] md:h-[80vh] px-4 flex items-center  md:pt-0 pt-32'>
                <div className='lg:flex'>
                    <Circles/>
          
                    <div className=''>
                        
                        <div className=' lg:ml-[17rem] lg:pr-0 pr-4'>
                            <h1 className="text-white 2xl:text-[100px] md:text-[80px] text-[44px] font-bold  uppercase md:leading-[120px] 2xl:leading-[192px]">создание сайтов<span className='font-extralight ml-3'>и</span>  <span className='font-extralight flex justify-end'>приложений</span></h1>
                        </div>
                        
                        <div className='lg:ml-[5rem]'>
                            <h2 className="2xl:text-[150px] md:text-[120px] text-[64px] font_border  font-bold  uppercase ">Наши<br /> услуги</h2>
                        </div>
                    </div>
                </div>  
            </section>
            <section className='bg-black flex-shrink-0  w-auto lg:h-screen h-auto block lg:flex items-center   '>
                <Slider text={'Вебсайты'} />
                <div className='px-4 lg:pt-0 pt-3 lg:flex items-center justify-center md:px-11 '>
                <div className=' 2xl:max-w-[2688px] lg:ml-24  relative'>
                    <h2 className="text-white 2xl:text-[120px] md:text-[80px] text-[44px] font-black font-['Jost'] uppercase 2xl:leading-[240px]">создание <br /> сайтов любой<br /> сложности</h2>
                    <p className="2xl:w-[500px] lg:absolute 2xl:top-9 2xl:right-[-300px] lg:-top-8 lg:right-[-200px]  top-[280px] right-0 w-[380px] text-white text-[18px] 2xl:text-[28px] font-normal font-['Evolventa']  leading-[42px]">
                    Рисуем прототипы, создаём макеты, верстаем для разных типов устройств. Внедряем необходимую CMS, интегрируем CRM.</p>
                </div>
                <div className='lg:block hidden lg:ml-[14rem]'>
                    <SnakeBox />
                </div>


                <div className='lg:block  justify-center items-center pr-4 md:mt-0  space-y-9 lg:ml-[8rem]'>
                    <div className='lg:space-y-0 lg:block md:flex justify-between '>
                        <div className=' lg:ml-0 '>
                            <Button text={'Одностроничный сайт'} category={'web'} documentId = {17}/>
                        </div>
                        <div className='lg:ml-20 md:block flex justify-end mr-3'>
                            <Button text={'Онлайн магазин'} documentId={20}/>
                        </div>
                    </div>
                    <div className=' lg:hidden md:flex hidden  justify-center items-center'>
                        <SnakeBox />
                    </div>

                    <div className='lg:space-y-0  lg:block md:flex justify-between'>
                        <div className=' lg:ml-48  '>
                            <Button text={'Корпоративный сайт'} documentId = {18} />
                        </div>

                        <div className=' lg:ml-72  md:block flex justify-end mr-3'>
                            <Button text={'Сайт каталог'} documentId = {19}/>
                        </div>
                    </div>

                </div>
                {/* <div className=' items-end h-[90vh] ml-20 hidden lg:flex'>
                    <div className='relative'>
                        <img src={readbtn} className=" animate-spin-slow" />
                        <img src={next} className=" w-[44px] h-[40px] absolute top-12 left-12" />
                    </div>
                </div> */}
                </div>
            </section>

            <section className='bg-black flex-shrink-0  w-auto  lg:h-screen h-auto  lg:flex items-center'>
            <div className=' lg:h-screen 2xl:w-[180px] lg:w-[102px] h-[70px] w-screen lg:border-r lg:border-l border-t border-b  border-white lg:rotate-180 flex flex-col lg:justify-between justify-center items-center'>
                    <h3 className="text-white horizon-text 2xl:text-[70px] my-auto md:text-[50px] text-2xl  font-bold uppercase leading-snug tracking-wider">онлайн сервисы</h3>
                </div>

                <div className=' 2xl:max-w-[2688px] lg:pt-0 pt-4 lg:ml-24 md:px-10 px-4 relative'>
                    <h2 className="text-white 2xl:text-[120px] md:text-[95px] text-[44px] font-black font-['Jost'] uppercase 2xl:leading-[200px]">Создание <br /> онлайн <br /> сервиса</h2>
                    <p className="2xl:w-[600px] md:absolute 2xl:top-[234px] lg:top-[164px] 2xl:right-[-450px] lg:right-[-250px]  md:ml-0 right-0 top-60 md:w-[350px]  text-white text-[18px] 2xl:text-[28px] font-normal font-['Evolventa']  leading-[42px]">
                    Проектируем, разрабатываем и развиваем сервисы для ваших клиентов или для внутреннего использования.</p>
                </div>


                <div className=' flex flex-col lg:justify-center  lg:ml-[30rem] lg:items-center space-y-16'>
                    <div className='flex justify-start items-start lg:ml-0 md:ml-[3rem] ml-[0.9rem]'>
                        <Button text={'Маркетплейс'} documentId={21} />
                    </div>
                    <div className='md:flex justify-center items-center  hidden'>
                        <SnakeBox />
                    </div>
                    <div className='flex justify-end items-end lg:mr-0 md:mr-[4rem] mr-[3rem]'>
                        <Button text={'Системы для бизнеса'} documentId={22}/>
                    </div>
                </div>

           

            </section>

            <section className='bg-black flex-shrink-0  w-auto lg:ml-[10rem]  lg:h-screen lg:pb-0    lg:flex items-center'>
                <Slider text={'MOBILE APPS'} />



                <div className=' 2xl:max-w-[2688px] lg:pt-0 pt-4 lg:ml-24 md:px-10 px-4 relative'>
                    <h2 className="text-white 2xl:text-[140px] md:text-[95px] text-[44px] font-black font-['Jost'] uppercase 2xl:leading-[240px]">создание <br /> мобильных <br />приложений</h2>
                    <p className="2xl:w-[600px] lg:w-[470px] w-auto lg:absolute 2xl:top-[205px] lg:top-[130px] 2xl:right-[-500px] lg:right-[-470px] right-[20px]  text-white text-[18px] 2xl:text-[28px] font-normal font-['Evolventa']  leading-[42px]">
                    Приложения для смартфонов экономят время и деньги благодаря простоте использования. Наши специалисты будут сопровождать Вас в создании интерфейса и необходимых шагов покупки подходящего для типа бизнеса. </p>
                </div>


                <div className=' flex flex-col lg:justify-center lg:items-center xl:ml-[38rem] lg:ml-[30rem]  space-y-10'>
                    <div className='flex justify-start items-start lg:ml-0 md:ml-[2.8rem] ml-[0.9rem]'>
                        <Button text={'IOS разработка'} documentId={23}/>
                    </div>
                    <div className='md:flex justify-center items-center  hidden'>
                        <SnakeBox />
                    </div>
                    <div className='flex justify-end items-end lg:mr-0 md:mr-[4rem] mr-[3rem]'>
                        <Button text={'ANDROID разработка'} documentId={24} />
                    </div>
                </div>

       
            </section>

            <section className='bg-black flex-shrink-0 lg:ml-[10rem]  w-auto   lg:h-screen h-auto  lg:flex items-center'>
                <div className=' lg:h-screen lg:w-[102px] h-[70px] w-full lg:border-r lg:border-l border-t border-b  border-white lg:rotate-180 flex flex-col lg:justify-between justify-center items-center'>
                    <h3 className=" text-white horizon-text 2xl:text-[80px] my-auto md:text-[50px] text-4xl font-bold  leading-snug tracking-wider">Как мы работаем?</h3>
                </div>

                <h3 className="text-white 2xl:text-[240px] lg:pt-0 pt-4 px-4 uppercase md:text-[120px] text-[44px] font-bold">наш <br /> <span className=' ml-32'>процесс</span></h3>
                <div className='lg:flex '>
                    {servicesData.services.map((service) => (
                        <div className='flex mb-[5.5rem] md:h-[400px] h-[200px]  items-center' key={service.id}>
              
                                <p className='md:text-[450px] text-[200px] text-white font-bold'>{service.id}</p>
                                <div className='mt-auto'>
                                    <p className="text-white 2xl:text-[100px] md:text-[60px] text-[28px] font-bold uppercase">{service.title}</p>
                                    <p className="text-white 2xl:text-[28px] 2xl:w-[800px] md:w-[500px] w-auto md:text-[18px] text-sm font-normal font-['Evolventa'] pr-4 md:leading-[2rem] uppercase">{service.description}</p>
                                </div>
                          

                           
                        </div>
                    ))}
                </div>

            </section>

    


            <Last3Page />

        </div>
        </>
    )
}
