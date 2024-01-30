import React, { useState } from 'react';
import spectr from '../assets/navbar/spectr.svg'
import lang from '../assets/navbar/language.svg'
import download from '../assets/navbar/DOWNLOAD.svg'
import connect from '../assets/navbar/CONNECT.svg'
import phone from '../assets/navbar/PHONE.svg'
import menu from '../assets/navbar/MENU.svg'
import { Link } from 'react-router-dom'
const TestPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex items-center h-screen bg-black'>
            <div className='flex items-center'
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}>

                {isHovered && (
                    <div className='lg:w-[120px] w-[100%] transition-transform ease-in-out duration-2500 transform   lg:h-screen md:h-[5.9rem] h-auto border-r border-white md:bg-neutral-900 bg-black lg:py-[60px] md:flex justify-center items-center px-10  z-50'>
                        <div className='lg:w-[120px] w-[100%] flex lg:flex-col flex-row justify-between lg:h-[100%]'>
                            <div className=' space-y-12  '>
                                <img src={spectr} className="mx-auto  transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                                <img src={lang} className="mx-auto lg:block hidden transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                                <img src={download} className="mx-auto lg:block hidden transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                            </div>

                            <div className=' lg:hidden md:flex hidden gap-10'>
                                <img src={lang} className="  transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                                <img src={download} className="  transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                                <img src={connect} className=" transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                                <img src={phone} className=" transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />

                            </div>

                            <div className='lg:mx-auto my-auto'>
                                <button
                                    className="w-[60px] h-8 focus:outline-none"
                                    onClick={toggleMenu}
                                >
                                    <div className={`bg-white h-1 w-full mb-1 transition-transform transform ${isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'}`}></div>
                                    <div className={`bg-white h-1 w-full mb-1 opacity-0 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                                    <div className={`bg-white h-1 w-full transition-transform transform ${isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0'}`}></div>
                                </button>
                            </div>

                            <div className=' space-y-12 lg:block hidden'>
                                <img src={connect} className="mx-auto transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                                <img src={phone} className="mx-auto transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                            </div>
                        </div>
                        <div className='md:hidden flex justify-center  gap-10 mt-10'>
                            <img src={lang} className="  transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                            <img src={download} className="  transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                            <img src={connect} className=" transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                            <img src={phone} className=" transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />

                        </div>

                    </div>
                )}
                <div

                    className={`cursor-pointer transition-transform z-50 transform ${isHovered ? 'hover:scale-110' : ''}`}>
                    <svg class="w-20 h-20 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                    </svg>
                </div>
            </div>
            </div>
    );
};

export default TestPage