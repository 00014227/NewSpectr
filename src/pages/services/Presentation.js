import React from 'react'
import NavBar from '../../Components/NavBar'
import branding from "../../assets/services/branding.svg"
import web from "../../assets/services/web.svg"
import Slider from '../../Components/Slider'
import SnakeBox from '../../Components/SnakeBox'
import ButtonModal from '../../Components/Button'
import readbtn from '../../assets/readbtn.png'
import next from '../../assets/next.svg'
import Last3Page from '../../Components/Last3Page'

export default function Presentation() {
    return (
        <div className='lg:flex block lg:overflow-x-auto overflow-x-hidden h-[100vh]'>
            <NavBar />
            <section className='bg-black flex-shrink-0  w-screen lg:h-screen h-auto lg:flex '>
                <div className='lg:flex gap-40'>
                    <div className='flex relative justify-center'>
                    <div className='  flex lg:flex-col items-center justify-center md:mt-4 mt-20 lg:space-y-14 lg:space-x-0 space-x-10'>
                        <img src={branding} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                        <img src={web} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                        <img src={branding} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                    </div>
                        <div className='absolute    lg:bottom-0 lg:left-64 left-0 top-[350px]'>
                            <h2 className="2xl:text-[190px] md:text-[120px] text-[64px] font_border  font-bold font-['Jost'] uppercase ">Наши<br />услуги</h2>
                        </div>
                    </div>
                    <div className='relative md:h-[80vh] h-[50vh]'>
                        <div className='felx justify-end'>
                            <h1 className="text-white 2xl:text-[120px] md:text-[80px] text-[44px] font-bold font-['Jost'] uppercase leading-[120px] 2xl:leading-[192px]">презентации <span className='font-extralight'>и</span>  <span className=' flex justify-end'>маркетинг</span></h1>
                        </div>

                 
                    </div>
                </div>
            </section>
            <section className='bg-black flex-shrink-0  w-auto lg:h-screen h-auto  lg:flex items-center'>
                <Slider text={'PRESENTATIONS'} />
                <div className=' 2xl:max-w-[2688px] lg:ml-24 px-5 relative h-fit'>
                    <h2 className="text-white 2xl:text-[200px] md:text-[95px] text-[44px] font-black font-['Jost'] uppercase 2xl:leading-[240px] md:leading-[200px]">Виды <br />презентаций</h2>
                    <p className="2xl:w-[600px] md:absolute lg:top-0 lg:right-[190px] bottom-[180px] right-[0px] md:w-[60%] w-[350px] text-white text-[18px] 2xl:text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">
                    Коммуникационный дизайн остается одним из самых востребованных направлений дизайна. Сегодня ни одна компания, ни одно событие, ни один продукт, претендующий на успех, не могут обойтись без коммуникации через визуальные образы.</p>
                </div>

                <div className='lg:block hidden'>
                 <SnakeBox /> 
            </div>
              

                <div className='lg:block md:flex justify-center items-center px-[60px] lg:h-[80vh]'>
                    <div className='lg:space-y-0 md:space-y-60'>
                        <div className=' mr-14'>
                            <ButtonModal text={'ДИЗАЙН УПАКОВКИ'} category={'web'} documentId = {1}/>
                        </div>
                        <div className='lg:ml-20 md:block flex justify-end'>
                            <ButtonModal text={'СОЗДАНИЕ БРЕНДБУКА'} documentId = {2} />
                        </div>
                    </div>
                    <div className='md:hidden block'>
                    <SnakeBox />
                    </div>
          
                    <div className=' lg:space-y-0 md:space-y-60'>
                        <div className=' lg:ml-48 '>
                            <ButtonModal text={'РАЗРАБОТКА НЕЙМИНГА'} documentId = {3}/>
                        </div>

                        <div className=' lg:ml-72 md:block flex justify-end'>
                            <ButtonModal text={'PАЗРАБОТКА ЛОГОТИПА'} />
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
