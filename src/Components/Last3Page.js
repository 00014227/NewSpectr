import React from 'react'
import hands from '../assets/hands.png'
import next from '../assets/next.svg'
import whatsup from '../assets/whatsup.png'
import whatsapp from '../assets/whatsapp.svg'
import telegram from '../assets/telegram.svg'
import instagram from '../assets/instagram.svg'
import { DialogDefault, LongDialog } from './Modal'

export default function Last3Page({ isBeating }) {
    return (
        <section className='flex-shrink-0  w-auto  lg:h-screen  lg:flex 2xl:py-12 items-center gap-36'>
            <div className='flex flex-col md:items-end md:justify-end'>
                <div className=' 2xl:ml-56 md:ml-32 md:flex'>
                    <h2 className="text-white 2xl:text-[240px] md:text-[70px] text-[56px] font-bold font-['Jost'] uppercase md:leading-[240px]">давайте  <span className='hidden'>services</span></h2>
                    <div className='md:block flex items-center justify-center'>
                        <div class="pulse flex items-center justify-center 2xl:ml-32 ">
                            <div
                                className={` ml-9 transition-transform transform ${isBeating ? 'scale-110' : 'scale-100'}`}
                            >
                                {/* Your Heart SVG goes here */}
                                <img
                                    src={hands} // Replace with your Heart SVG image source
                                    alt="brain"
                                    className="2xl:w-auto 2xl:h-auto md:w-[300px] md:h-[200px] w-[152px] h-[78px]"
                                />
                            </div>

                        </div>
                    </div>
                </div>

                <div className='md:block flex justify-end'>

                    <h2 className="text-white 2xl:text-[240px] md:text-[70px] lg:mr-0 mr-6 text-[56px] z-30 font-bold font-['Jost'] uppercase ">работать</h2>

                </div>
            </div>
            <div className='block '>
                <form className='flex flex-col space-y-[70px] '>
                    <input
                        type='text'
                        placeholder='question'
                        className="max-w-[800px] mx-auto lg:w-auto w-[70%] outline-none border-b-4 border-teal-500 bg-black text-white text-4xl font-bold font-['HelveticaNeueCyr'] capitalize leading-[43.20px]" />

                    <input
                        type='email'
                        placeholder='email'
                        className="max-w-[800px] mx-auto lg:w-auto w-[70%] outline-none border-b-4 border-teal-500 bg-black text-white text-4xl font-bold font-['HelveticaNeueCyr'] capitalize leading-[43.20px]" />

                    <button className="text-teal-500  text-[56px] font-bold font-['Jost'] capitalize flex items-center justify-center">
                        <img src={next} className=" w-8 h-7" />
                        send
                        <img src={next} className=" w-8 h-7" />
                    </button>
                </form>
            </div>

            <div className=''>
                <h2 className="text-white md:text-[56px] text-4xl font-bold font-['Jost'] capitalize">хотите быть в курсе?</h2>
                <h3 class="2xl:w-[1200px] w-[765px] 2xl:text-[100px] md:text-[60px] text-[30px] "><span className="font_border font-bold font-['Jost'] uppercase 2xl:leading-[100px] leading-[60px] tracking-[5px]">под</span><span className="text-white font-bold font-['Jost'] uppercase 2xl:leading-[100px] leading-[60px] tracking-[5px]">пишите</span><span className="font_border font-bold font-['Jost'] uppercase 2xl:leading-[100px] leading-[60px] tracking-[5px]">сь</span><span className="font_border font-bold font-['Jost'] uppercase 2xl:leading-[100px] leading-[60px] tracking-[5px]"> на </span><br/><span className=" font_border  font-bold font-['Jost'] uppercase 2xl:leading-[100px] leading-[60px] tracking-[5px]">наши социальные<br/> сети, </span></h3>
                <h3 className=' flex flex-con justify-end mr-7 2xl:text-[100px] md:text-[60px] text-[36px] '><span className=" font_border  font-bold font-['Jost'] uppercase leading-[100px] tracking-[5px]">будьте</span><span className=" font_border lg:mx-8 mx-2 font-bold font-['Jost'] uppercase leading-[100px] tracking-[5px]">с </span><span className="text-white  font-bold font-['Jost'] uppercase leading-[100px] tracking-[5px]">нам</span><span className=" font_border  font-bold font-['Jost'] uppercase leading-[100px] tracking-[5px]">и    </span></h3>
            </div>

            <div className=' lg:h-screen h-[80vh] w-auto flex lg:flex-col justify-between px-8 py-12'>
                <div className='relative'>
                    <img src={telegram} className=" animate-spin-slow 2xl:w-auto 2xl:h-auto lg:w-[150px] lg:h-[150px] w-[70px] h-[70px]" />
                    {/* <img src={whatsapp} className=" absolute lg:top-12 lg:left-14 top-[20px] left-5 lg:w-auto lg:h-auto w-8 h-8" /> */}
                </div>
                <div className='relative'>
                    <img src={instagram} className=" animate-spin-slow 2xl:w-auto 2xl:h-auto lg:w-[150px] lg:h-[150px] w-[70px] h-[70px]" />
                    <img src={whatsapp} className=" absolute lg:top-12 lg:left-14 top-[20px] left-5 lg:w-auto lg:h-auto w-8 h-8" />
                </div>
                <div className='relative'>
                    <img src={whatsup} className=" animate-spin-slow 2xl:w-auto 2xl:h-auto lg:w-[150px] lg:h-[150px] w-[70px] h-[70px]" />
                    <img src={whatsapp} className=" absolute lg:top-12 lg:left-14 top-[20px] left-5 lg:w-auto lg:h-auto w-8 h-8" />                </div>
                 
            </div>

                <LongDialog/>

            
            <footer className=' lg:h-screen h-[182px] lg:w-[182px] w-full lg:border-r border-t py-20 border-white lg:rotate-180 flex flex-col justify-between items-center'>
                <p className="text-white horizon-text text-base font-normal  font-['HelveticaNeueCyr'] capitalize leading-snug tracking-wider">spect agency</p>
                <p className="text-white horizon-text text-base font-normal font-['HelveticaNeueCyr'] capitalize leading-snug tracking-wider">2021-2024 COPYRIGHT</p>
            </footer>
        </section>
    )
}
