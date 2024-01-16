import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import service from '../assets/service.png'
import Last3Page from '../Components/Last3Page'
import portfolioData from '../data/potfolio.json'
console.log('portfolioData:', portfolioData);
export default function DetailWorks() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = portfolioData.portfolio?.length || 0;

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const currentItem = portfolioData.portfolio?.[currentIndex];
    return (
        <div className='lg:flex block overflow-x-auto h-[100vh]'>
            <NavBar />
            <section className="bg-black flex-shrink-0  w-screen h-screen py-24 flex flex-col lg:items-center justify-center">
                <div className=' flex relative ml-56'>
                    
                    <div className='flex gap-20'>
                        <img src={currentItem.image} className="w-[30vw] h-[85vh]" />
                        <div>
                            <h1 className="text-white ml-36 2xl:text-[120px] text-[80px] font-extralight font-['Jost'] uppercase">our <span className='font-bold'>works</span></h1>
                            <div className='flex gap-36'>
                                <div>
                                    {currentItem && currentItem.works.map((work, index) => (
                                        <p key={index} className='text-white text-2xl'>
                                            {work}
                                        </p>
                                    ))}
                                    {/* <p className="text-white text-2xl">UI/UX Design</p>
                                    <p className="text-white text-2xl">Branding</p>
                                    <p className="text-white text-2xl">Case Study</p> */}
                                    <div className='flex'>
                                        <button onClick={prevItem}><svg class="w-[64px] h-[24px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                                        </svg></button>
                                        <button onClick={nextItem}>
                                            <svg class="w-[64px] h-[24px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                {/* next content image */}
                                <img src={portfolioData.portfolio[(currentIndex + 1) % totalItems]?.image} className="w-[18vw] h-[55vh]" />
                            </div>
                        </div>


                    </div>

                    <h4 className="text-white bottom-0 z-40 absolute text-[150px] font-black font-['HelveticaNeueCyr'] uppercase">{currentItem.company_name}</h4>
                </div>
            </section>
            <Last3Page />
        </div>
    )
}
