import React, { useEffect, useState } from 'react';
import spectr from '../assets/navbar/spectr.svg'
import lang from '../assets/navbar/language.svg'
import download from '../assets/navbar/DOWNLOAD.svg'
import connect from '../assets/navbar/CONNECT.svg'
import phone from '../assets/navbar/PHONE.svg'
import menu from '../assets/navbar/MENU.svg'
import { Link, useLocation } from 'react-router-dom';
import DropDowm from './DropDowm';

const NavBar = ({ navbar }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(navbar);
    const [screen, setScreen] = useState(true)
    const location = useLocation();




    const getColorClass1 = (pathname) => {
        if (pathname === '/services/web') {
            return 'text-teal-500'; // Change to your desired color class
        } else {
            return 'text-black'; // Default color
        }

    };

    // Function to determine the color class for the second paragraph based on the URL path
    const getColorClass2 = (pathname) => {
        if (pathname === '/services/branding') {
            return 'text-teal-500'; // Change to your desired color class
        } else {
            return 'text-black'; // Default color
        }

    };

    // Function to determine the color class for the third paragraph based on the URL path
    const getColorClass3 = (pathname) => {
        if (pathname === '/services/smm') {
            return 'text-teal-500'; // Change to your desired color class
        } else {
            return 'text-black'; // Default color
        }
    };

    const getColorClass4 = (pathname) => {
        if (pathname === '/services/marketing') {
            return 'text-teal-500'; // Change to your desired color class
        } else {
            return 'text-black'; // Default color
        }
    };

    // Function to determine the color class for the third paragraph based on the URL path
    const getColorClass5 = (pathname) => {
        if (pathname === '/services/production') {
            return 'text-teal-500 '; // Change to your desired color class
        } else {
            return 'text-black'; // Default color
        }
    };


    useEffect(() => {
        setIsHovered(navbar);
    }, [navbar]);

    const handleHover = () => {
        setIsHovered(true);
    };



    const handleLeave = () => {
        setIsHovered(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };

    const checkScreenSize = () => {
        setScreen(window.innerWidth < 1024); // Adjust the breakpoint (1024) based on your design
    };

    useEffect(() => {
        // Check screen size on mount

        checkScreenSize();

        // Attach event listener for window resize 
        window.addEventListener('resize', checkScreenSize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <>
            <div className='flex items-center fixed z-50 lg:w-[120px] w-screen'
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}>
                {/* <div className='flex items-center' > */}

                {isHovered || window.innerWidth < 850 ? (
                    <div className='lg:w-[120px] w-screen  transition-opacity duration-500 opacity-100 lg:h-screen md:h-[5.9rem] h-auto lg:border-r border-white bg-black lg:py-[60px] md:flex justify-center items-center pb-4 z-[100]'>
                        <div className='lg:w-[120px] w-screen flex lg:flex-col pt-4 flex-row justify-between lg:h-[100%]'>
                            <div className=' space-y-12 lg:pl-0 pl-4'>
                                <Link to={'/'}>
                                <img src={spectr} alt='Spectr logo' className="mx-auto 2xl:w-[64px] 2xl:h-[64px] lg:w-[45px] lg:h-[45px] w-[45px] mt-4 h-[45px] transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                                </Link>
                                <img src={lang} alt='change language logo' className="mx-auto 2xl:w-auto 2xl:h-auto lg:w-[45px] lg:h-[45px] lg:block hidden transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                                <img src={download} alt='download logo' className="mx-auto 2xl:w-auto 2xl:h-auto lg:w-[45px] lg:h-[45px] lg:block hidden transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                            </div>

                            <div className=' lg:hidden md:flex hidden gap-10'>
                                <img src={lang} alt='change language logo'  className="  transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                                <img src={download} alt='download logo' className="  transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                                <Link to='https://t.me/spectrmarketing'>
                                <img src={connect} alt="связаться" className=" transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                                </Link>
                                <a href='tel: +998999444744'>
                                    <img src={phone} alt="связаться" className=" transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />

                                </a>

                            </div>

                            <div className='lg:mx-auto my-auto lg:pr-0 pr-4'>
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
                                <Link to='https://t.me/spectrmarketing'>
                                <img src={connect} alt="связаться" className="mx-auto 2xl:w-auto 2xl:h-auto lg:w-[45px] lg:h-[45px] transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                                </Link>
                                <div>
                                    <a href='tel: +998999444744'>
                                        <img src={phone} alt="связаться" className="mx-auto 2xl:w-auto 2xl:h-auto lg:w-[45px] lg:h-[45px] transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='md:hidden flex justify-center px-4 w-screen  gap-[3.3rem] mt-10'>
                            <img src={lang} alt='change language logo' className="w-[45px] h-[45px] transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                            <img src={download} alt='download logo' className=" w-[45px] h-[45px] transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                            <Link to='https://t.me/spectrmarketing'>
                            <img src={connect} alt="связаться" className="w-[45px] h-[45px] transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                            </Link>
                            <div>
                                <a href='tel: +998999444744'>
                                    <img src={phone} alt="связаться"  className="w-[45px] h-[45px] transition-transform transform hover:scale-110 text-green-500 hover:text-blue-500" />
                                </a>
                            </div>
                        </div>

                    </div>
                ) : ''}
                <div

                    className={`cursor-pointer lg:block hidden transition-transform z-[100] transform ${isHovered ? 'hover:scale-110' : ''}`}>
                    <svg className="w-20 h-20 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                    </svg>
                </div>
                {/* </div> */}
            </div>



            <div className={`bg-neutral-900 bg-opacity-35 backdrop-blur-[50px] fixed flex-shrink-0 w-[100%] h-screen 2xl:py-24 overflow-y-scroll  flex lg:items-center lg:justify-start  z-20 duration-1000 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${isOpen ? ' visible' : ' hidden'}`}>
                <div className='md:flex gap-24 md:my-auto mt-[14rem]'>
                    <ul className='  lg:ml-52 lg:my-auto space-y-10  md:mt-8 pl-4'>
                        <li className=" text-white lg:text-[56px] md:text-[28px] font-bold font-['Jost'] capitalize md:flex hidden  gap-12">
                            Услуги
                            <img src={menu} />

                        </li>
                        <div className='md:hidden w-fit h-fit'>
                            <DropDowm
                                getColorClass1={getColorClass1}
                                getColorClass2={getColorClass2}
                                getColorClass3={getColorClass3}
                                getColorClass4={getColorClass4}
                                getColorClass5={getColorClass5} />

                        </div>




                        <Link to="">
                            <li className="text-white lg:mt-0 md:mt-20 lg:text-[56px] md:text-[28px] text-[36px] font-bold font-['Jost'] capitalize">Наши работы</li>
                        </Link>
                        <Link to="">
                            <li className="text-white lg:mt-0 md:mt-20 lg:text-[56px] md:text-[28px] text-[36px] font-bold font-['Jost'] capitalize">блог</li>
                        </Link>
                        <Link>
                            <li className="text-white lg:mt-0 md:mt-20 lg:text-[56px] md:text-[28px] text-[36px] font-bold font-['Jost'] capitalize">контакты</li>
                        </Link>


                    </ul>



                    <div className=' border-l  border-white h-[50%] md:block hidden '>
                        <Link to="../services/marketing">
                            <div className='flex h-fit -mb-6 z-10 -ml-3  space-x-12 cursor-pointer'>
                                <div className='md:flex hidden h-fit my-auto'>
                                    <div className="w-5 h-5 bg-white rounded-full  " />
                                    {/* <div className="w-[102px] h-0.5 my-auto bg-teal-500 " /> */}
                                </div>
                                <p className={` 2xl:text-[80px]  text-[70px] hover:text-teal-500  font-bold mx-auto capitalize font_border ${getColorClass4(location.pathname.toLowerCase())}`}>Маркетинг</p>
                            </div>
                        </Link>

                        <Link to="../services/web">
                            <div className='flex h-fit w-fit -mb-6 z-10 -ml-3 mt-8 space-x-12 cursor-pointer'>
                                <div className='md:flex hidden h-fit my-auto'>
                                    <div className={`w-5 h-5  rounded-full bg-white`} />
                                    {/* <div className="w-[102px] h-0.5 my-auto bg-teal-500 " /> */}
                                </div>

                                <p className={` 2xl:text-[80px]  text-[70px] hover:text-teal-500 font-bold mx-auto capitalize font_border ${getColorClass1(location.pathname.toLowerCase())}`}>Вебсайты</p>
                            </div>
                        </Link>

                        <Link to="../services/smm">
                            <div className='flex h-fit w-fit -mb-6 z-10 mt-8  -ml-3 space-x-12  cursor-pointer'>
                                <div className='md:flex hidden h-fit my-auto'>
                                    <div className={`w-5 h-5  rounded-full bg-white`} />
                                    {/* <div className="w-[102px] h-0.5 my-auto bg-teal-500 " /> */}
                                </div>

                                <p className={` 2xl:text-[80px]  text-[70px] hover:text-teal-500 w- font-bold mx-auto capitalize font_border ${getColorClass3(location.pathname.toLowerCase())}`}>SMM</p>
                            </div>
                        </Link>


                        <Link to="../services/branding">
                            <div className='flex h-fit w-fit -mb-6 z-10 -ml-3 mt-8 space-x-12 cursor-pointer'>
                                <div className='md:flex hidden h-fit my-auto'>
                                    <div className="w-5 h-5 bg-white rounded-full  " />
                                    {/* <div className="w-[102px] h-0.5 my-auto bg-teal-500 " /> */}
                                </div>
                                <p className={` 2xl:text-[80px]  text-[70px] hover:text-teal-500  font-bold mx-auto capitalize font_border ${getColorClass2(location.pathname.toLowerCase())}`}>Брендинг</p>
                            </div>
                        </Link>



                        <Link to="../services/production">
                            <div className='flex h-fit w-fit -mb-6 z-10 -ml-3 mt-8 space-x-12 cursor-pointer'>
                                <div className='md:flex hidden h-fit my-auto'>
                                    <div className="w-5 h-5 bg-white rounded-full  " />
                                    {/* <div className="w-[102px] h-0.5 my-auto bg-teal-500 " /> */}
                                </div>
                                <p className={` 2xl:text-[80px]  text-[70px] hover:text-teal-500  font-bold mx-auto capitalize font_border ${getColorClass5(location.pathname.toLowerCase())}`}>Продакшн</p>
                            </div>
                        </Link>


                    </div>
                </div>


            </div>


        </>
    );
};

export default NavBar;