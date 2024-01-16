import React, { useEffect, useState } from 'react'
import branding from "../../assets/services/branding.svg"
import web from "../../assets/services/web.svg"
import Button from '../../Components/Button'
import NavBar from '../../Components/NavBar'
import SnakeBox from '../../Components/SnakeBox'
import readbtn from '../../assets/readbtn.png'
import next from '../../assets/next.svg'
import Last3Page from '../../Components/Last3Page'
import Slider from '../../Components/Slider'
import eye from '../../assets/eye.png'
import service from '../../assets/service.png'

export default function Branding() {
   

    return (
        
        <div  className='lg:flex block lg:overflow-x-auto overflow-x-hidden h-[100vh]' >
            <NavBar />
            <section className='bg-black flex-shrink-0  lg:w-auto lg:h-screen h-auto  lg:flex  justify-center  px-12'>
                <div className='lg:flex gap-40'>
                    <div className='  flex lg:flex-col items-center justify-center md:mt-4 mt-20 lg:space-y-14 lg:space-x-0 space-x-10'>
                        <img src={branding} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                        <img src={web} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                        <img src={branding} className=" animate-spin-slow md:w-auto md:h-auto w-16 h-16" />
                    </div>
                    <div className='relative lg:h-[80vh] h-[50vh]'>
                        <div className=''>
                            <h1 className="text-white 2xl:text-[120px] md:text-[80px] text-[44px]  font-bold  uppercase md:leading-[120px] 2xl:leading-[192px]"><span className='font-extralight'>communication</span> design <span className='font-extralight'>&</span> <span className='flex justify-end'>branding</span></h1>

                        </div>

                        <div className='absolute lg:top-[180px] md:top-[350px]'>
                            <h2 className="2xl:text-[240px] md:text-[120px] text-[64px] font_border  font-bold font-['Jost'] uppercase ">Our<br /> services</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-black flex-shrink-0  w-auto lg:h-screen h-auto lg:flex items-center lg:pt-0 md:pt-24'>
                <div className=' lg:h-screen lg:w-[182px] h-[182px] w-full lg:border-r lg:border-l border-t border-b py-20 border-white lg:rotate-180 flex flex-col lg:justify-between justify-center items-center'>
                    <h3 className="font_border horizon-text 2xl:text-[70px] md:text-[60px] text-4xl  font-bold  font-['HelveticaNeueCyr'] capitalize leading-snug tracking-wider">what kind of branding</h3>
                </div>
                <div className=' 2xl:max-w-[2688px] lg:ml-24 px-10 relative'>
                    <h2 className="text-white 2xl:text-[240px] md:text-[95px] text-[44px] font-black font-['Jost'] uppercase 2xl:leading-[240px]">types <br /> of <br />branding</h2>
                    <p className="2xl:w-[600px] lg:absolute top-36 lg:right-[-80px] right-[200px] w-[350px] text-white text-[18px] 2xl:text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">
                        We draw prototypes, create layouts, make up for different types of devices. We implement the necessary CMS,integrate CRM.</p>
                </div>

                <div className=' lg:ml-32 lg:block md:flex justify-between'>
                    <div>
                         <Button text={'BRAND IDENTITY'} />
                        <div className='lg:block flex justify-end'>
                        <Button text={'PACKAGING DESIGN'} />
                        </div>
                        
                       
                    </div>
                    <div className=' mr-11'>
                        <Button text={'BRANDBOOK DESIGN'} />
                        <div className='lg:block flex justify-end'>
                        <Button text={'CORPORATE BRANDING'} />

                        </div>
                    </div>
                </div>
                <div className='lg:hidden hidden  md:flex flex-col justify-center items-center'>
                    <SnakeBox />
                    </div>
                <div className=' lg:ml-32  '>
                    <div className='lg:block md:flex justify-between'>
                    <div className=''>
            
                        <Button text={'REBRANDING'} />
                        
                        <div className='lg:block flex justify-end'>   <Button text={'LOGO DESIGN'} /></div>
                     
                    </div>
                    <div className=' mr-11'>

                        <Button text={'FIN BRANDING'} />
                        <div className='lg:block flex justify-end'>
                        <Button text={'SELF BRANDING'} />
                        </div>
                      
                    </div>
                    </div>
                    <div className='lg:block flex md:justify-center md:items-center'>
                        <Button text={'fOOD BRANDING'} />
                    </div>
                </div>

                <div className=' md:flex lg:flex-col lg:justify-center space-y-9 ml-20 items-center'>
                    <div className='lg:block flex justify-end'>
                    <Button text={'BRAND NAMING'} />
                    </div>
                    
                    <div className='lg:block hidden'>
                    <SnakeBox />
                    </div>
                  <div className=' mr-11'>
                  <Button text={'RETAIL BRANDING'} />
                  </div>

                </div>

                <div className=' items-end h-screen ml-20 pb-12 lg:flex hidden'>
                    <div className='relative'>
                        <img src={readbtn} className=" animate-spin-slow" />
                        <img src={next} className=" w-[44px] h-[40px] absolute top-12 left-12" />
                    </div>
                </div>
            </section>

          

            <section className='flex-shrink-0 bg-black w-auto lg:h-screen lg:flex items-center justify-center py-20 px-10'>
                <Slider text={'PORTFOLIO'} />
                <div className='flex gap-3'>
                    <div className=' mb-40 lg:ml-56'>
                        <h2 className="text-white 2xl:text-[240px] lg:text-[200px] md:text-[120px] text-[56px] font-bold font-['Jost'] uppercase leading-[240px]">Our  <span className='hidden'>work</span></h2>
                    </div>

                    <div className=' 2xl:space-y-[70px] lg:space-y-[30px] md:mt-0 mt-20'>
                        <img src={eye} className='mx-auto 2xl:w-auto 2xl:h-auto md:mr-0 mr-10 lg:w-[500px] lg:h-[200px] md:w-[500px] md:h-[208px] w-[191px] h-20 lg:mt-0 mt-14' />
                        <h2 className="text-white flex flex-col items-end 2xl:text-[240px] lg:text-[200px] md:text-[120px] text-[56px] font-bold font-['Jost'] uppercase lg:leading-[240px]">work</h2>
                    </div>
                </div>
                {/* Cards */}
                <div className=' lg:gap-28 md:gap-5 lg:flex md:grid grid-cols-2 lg:ml-20  '>
                    <div className='relative 2xl:w-[600px] lg:w-[480px]  '>
                        <img src={service} className="2xl:w-[500px] lg:w-[400px] 2xl:h-[800px] lg:h-[600px] w-[300px] h-full" />
                        <div className=' absolute 2xl:left-72 2xl:top-[37rem] lg:left-[12rem] lg:top-[27rem] top-[18rem] left-36 z-30 flex flex-col items-end'>
                            <h3 className="text-white lg:text-[56px] text-[40px] font-bold font-['Jost'] capitalize">Maxelon</h3>
                            <p className="text-white lg:text-[28px] text-[20px] font-normal font-['Jost'] capitalize leading-[42px]">FORKLIFT COMPANY</p>
                        </div>
                    </div>

                    <div className='relative 2xl:w-[600px] lg:w-[480px]  '>
                        <img src={service} className="2xl:w-[500px] lg:w-[400px] 2xl:h-[800px] lg:h-[600px] w-[300px] h-full" />
                        <div className=' absolute 2xl:left-72 2xl:top-[37rem] lg:left-[12rem] lg:top-[27rem] top-[18rem] left-36 z-30 flex flex-col items-end'>
                            <h3 className="text-white lg:text-[56px] text-[40px] font-bold font-['Jost'] capitalize">Maxelon</h3>
                            <p className="text-white lg:text-[28px] text-[20px] font-normal font-['Jost'] capitalize leading-[42px]">FORKLIFT COMPANY</p>
                        </div>
                    </div>

                    <div className='relative 2xl:w-[600px] lg:w-[480px]  '>
                        <img src={service} className="2xl:w-[500px] lg:w-[400px] 2xl:h-[800px] lg:h-[600px] w-[300px] h-full" />
                        <div className=' absolute 2xl:left-72 2xl:top-[37rem] lg:left-[12rem] lg:top-[27rem] top-[18rem] left-36 z-30 flex flex-col items-end'>
                            <h3 className="text-white lg:text-[56px] text-[40px] font-bold font-['Jost'] capitalize">Maxelon</h3>
                            <p className="text-white lg:text-[28px] text-[20px] font-normal font-['Jost'] capitalize leading-[42px]">FORKLIFT COMPANY</p>
                        </div>
                    </div>

                    <div className='relative 2xl:w-[600px] lg:w-[480px]  '>
                        <img src={service} className="2xl:w-[500px] lg:w-[400px] 2xl:h-[800px] lg:h-[600px] w-[300px] h-full" />
                        <div className=' absolute 2xl:left-72 2xl:top-[37rem] lg:left-[12rem] lg:top-[27rem] top-[18rem] left-36 z-30 flex flex-col items-end'>
                            <h3 className="text-white lg:text-[56px] text-[40px] font-bold font-['Jost'] capitalize">Maxelon</h3>
                            <p className="text-white lg:text-[28px] text-[20px] font-normal font-['Jost'] capitalize leading-[42px]">FORKLIFT COMPANY</p>
                        </div>
                    </div>


                </div>

                <div className=' md:ml-56 flex flex-col justify-center items-center'>
                    <img src={next} className="md:w-auto md:h-auto w-[120px] h-[100px]"/>
                    <p className="text-teal-500 md:text-[100px] text-[56px] font-bold font-['Jost'] capitalize">see more</p>
                </div>
            </section>
            


            <Last3Page />
        </div>
    )
}
