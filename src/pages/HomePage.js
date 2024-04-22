import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../Components/NavBar';
import txt from '../assets/text.svg'
import heart from '../assets/heart.png'
import Slider from '../Components/Slider';
import next from '../assets/next.svg'
import Last3Page from '../Components/Last3Page';
import Eye from '../Components/Eye';
import Services from '../Components/Services';
import Background from '../Components/Background';
import { Link } from 'react-router-dom';
import potfolios from '../data/potfolio.json'
import a from '../assets/parners/anons.png';
import a1 from '../assets/parners/grey/image.png';
import b from '../assets/parners/uznews.png';
import b1 from '../assets/parners/grey/uznews.png';
import c from '../assets/parners/kunuz.png';
import c1 from '../assets/parners/grey/kunuz.png';
import d from '../assets/parners/repost.png';
import e from '../assets/parners/gazeta.png';
import e1 from '../assets/parners/grey/gazetauz.png';
import f from '../assets/parners/afisha.svg';
import f1 from '../assets/parners/grey/afisha.png';
import g from '../assets/parners/qalampir.png';
import g1 from '../assets/parners/grey/qalampir.png';
import h from '../assets/parners/printuz.png';
import h1 from '../assets/parners/grey/printuz.png';
import i from '../assets/parners/ahad.jpg';
import i1 from '../assets/parners/grey/ahad.png';
import l from '../assets/parners/ziynat.png';
import l1 from '../assets/parners/grey/ziynat.png';
import m from '../assets/parners/siyma.png';
import m1 from '../assets/parners/grey/siyma.png';
import n from '../assets/parners/lux.svg';
import n1 from '../assets/parners/grey/lux.png';
import SLick from '../Components/SLick';
import Partners from '../Components/Partners';
import { Helmet } from 'react-helmet-async';
const HomePage = () => {
    const [isBeating, setIsBeating] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [bgColorChange, setBgColorChange] = useState('black');
    const scrollContainerRef = useRef(null);
    const [navbar, setNavbar] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [imageSrc, setImageSrc] = useState('');
    const [imageSr1, setImageSrc1] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    const images = [
        { src: a1, src1: a },
        { src: b1, src1: b },
        { src: c1, src1: c },
        { src: d, src1: d },
        { src: e1, src1: e },
        { src: f1, src1: f },
        { src: g1, src1: g },
        { src: h1, src1: h },
        { src: i1, src1: i },
        { src: l1, src1: l },
        { src: m1, src1: m },
        { src: n1, src1: n },
    ]
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

    // Toggle hover state
    const handleMouseEnter = (src1) => {
        setIsHovered(true);
        setImageSrc(src1)
    };

    // Handle mouse leave to change image source back to original
    const handleMouseLeave = (src) => {
        setIsHovered(false);
        setImageSrc(src);
    };


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsBeating((prev) => !prev);
        }, 900);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    return (
        <>
            <Helmet>
                <title>Spectr Marketing Agency</title>
                <meta name='description' content='Самое опытное и надежное агентство по мнению наших клиентов.' />

            </Helmet>

            <div ref={scrollContainerRef} onWheel={handleWheelScroll}
                className="  relative z-50 lg:flex items-center lg:overflow-x-hidden  lg:overflow-y-hidden  block  bg-black h-[100vh]">
                <NavBar navbar={navbar} />
                <div className='w-full h-[100vh] -z-10 absolute top-0 left-0'>
                    <Background />
                </div>


                <section className=" flex-shrink-0  w-auto 2xl:h-screen h-auto  flex flex-col lg:items-center justify-center lg:pt-0 pt-32">
                    <div className='lg:w-screen'>
                        <div className=' w-auto mx-auto py-14 lg:ml-36 px-4'>
                            <h2 className=" text-white font-black hidden lg:block 2xl:text-[7rem]  xl:text-6xl lg:text-[80px] text-[50px] uppercase xl:leading-[152px] ">Мы <span className=" font-light lg:leading-[152px]">маркетинговое Агенство  и здесь чтобы создать</span> будущее для вашего бизнеса</h2>
                            <h2 className=" text-white font-black block lg:hidden  xl:text-7xl lg:text-[80px] text-[35px] uppercase  ">Мы <span className=" font-light ">маркетинговое Агенство  и здесь чтобы создать</span> <br /><span className='flex md:justify-end lg:mr-0 mr-7'>будущее для вашего бизнеса</span></h2>

                        </div>

                    </div>

                </section>

                <section className='flex-shrink-0  w-auto lg:h-screen h-auto lg:flex justify-center items-center 2xl:py-12 '>
                    <div className='relative flex items-center justify-center'>
                        <img src={txt} className=" animate-spin-slow" />
                        <svg width="100" height="100" viewBox="0 0 527 527" fill="none" xmlns="http://www.w3.org/2000/svg" className=' absolute'>
                            <g clipPath="url(#clip0_327_173)">
                                <path d="M295.316 0.0771953C331.032 0.0771953 366.766 0.0208213 402.481 0.0771953C429.508 0.133569 447.149 17.6847 447.375 44.6879C447.487 58.7814 447.431 72.8561 447.412 86.9496C447.356 114.366 431.614 131.917 403.948 133.364C382.075 134.511 360.108 133.89 338.178 133.984C322.512 134.06 306.845 133.853 291.179 134.022C256.234 134.398 228.268 162.397 228.286 196.841C228.286 231.981 256.14 259.774 291.668 259.83C347.451 259.924 403.215 259.792 458.998 259.886C492.306 259.943 519.595 282.079 525.633 313.592C531.952 346.552 515.909 377.126 484.538 389.284C475.172 392.91 464.452 394.169 454.296 394.395C419.239 395.128 396.256 418.26 396.632 453.343C396.726 462.081 397.253 470.988 395.786 479.52C391.14 506.485 368.346 525.709 341.037 525.915C301.241 526.197 261.444 526.16 221.647 525.934C196.934 525.784 178.766 507.801 177.864 482.489C177.28 466.234 177.375 449.923 177.845 433.65C178.578 408.169 195.354 391.614 222.042 388.983C229.189 388.288 236.505 387.743 243.314 385.713C273.217 376.806 291.009 347.811 286.42 316.373C282.151 287.19 254.843 263.231 224.807 263.081C173.726 262.837 122.664 263.118 71.5825 262.987C38.6318 262.912 13.2229 244.872 4.49623 215.821C-8.33046 173.089 23.8491 130.677 69.6641 130.301C82.0583 130.207 94.095 129.474 104.966 122.766C122.607 111.848 131.635 95.9507 132.18 75.2802C132.349 68.722 131.992 62.1262 132.03 55.568C132.105 24.0925 155.539 0.359066 187.211 0.133569C223.246 -0.12951 259.281 0.0771953 295.316 0.0771953Z" fill="white" />
                                <path d="M80.9824 439.829C35.7316 439.735 0.636896 403.937 0.824971 358.049C0.994238 314.302 37.4995 278.542 81.7723 278.712C126.271 278.881 162.325 315.279 162.099 359.777C161.873 404.444 125.951 439.885 80.9824 439.81V439.829Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_327_173">
                                    <rect width="526.12" height="526.12" fill="white" transform="translate(0.822266)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <div className=' lg:ml-36 px-4'>
                        {/* <h3 className="text-white text-[56px] font-bold  capitalize">about</h3> */}
                        <div className='lg:flex 2xl:gap-44 gap-9 items-center'>
                            <h1 className="text-white xl:text-[120px] lg:text[150px] md:text-[100px] text-[56px] font-bold font-['Jost'] uppercase ">spectr <span className='lg:hidden flex justify-end  '>agency</span> </h1>
                            <p className="text-white xl:text-xl text-2xl hidden lg:block font-normal  font-['Evolventa']  leading-9 2xl:max-w-[810px] max-w-[670px]">
                                Маркетинговое агентство «Спектр» (Ташкент) специализируется на комплексном развитии успешных корпоративных, продуктовых и розничных брендов от построения стратегии бренда, разработки имени, создания логотипа, создания фирменного стиля до разработки сайта любого сложность. Также мы поможем вам рассказать о компании, товаре или услуге посредством презентации.
                            </p>
                        </div>

                        <div className='md:flex '>
                            <div className="pulse flex items-center justify-center 2xl:ml-32 mr-32 ">
                                <div
                                    className={` md:ml-9  transition-transform transform ${isBeating ? 'scale-110' : 'scale-100'}`}
                                >

                                    <img
                                        src={heart}
                                        alt="Heart"
                                        className="  md:w-[185px] md:h-[257px] w-[95px] h-[157px]"

                                    />
                                </div>

                            </div>
                            <p className="text-white  text-xl block lg:hidden font-normal font-['Evolventa'] md:w-[500px] w-auto lg:w-auto capitalize leading-9 max-w-[810px]">
                                Маркетинговое агентство «Спектр» (Ташкент) специализируется на комплексном развитии успешных корпоративных, продуктовых и розничных брендов от построения стратегии бренда, разработки имени, создания логотипа, создания фирменного стиля до разработки сайта любого сложность. Также мы поможем вам рассказать о компании, товаре или услуге посредством презентации.
                            </p>
                            <h1 className="text-white xl:text-[120px] text-[140px] hidden lg:block font-bold font-['Jost'] uppercase leading-[150px] 2xl:leading-[200px]">marketing <br /> agency</h1>
                        </div>
                    </div>
                </section>

                <section className='flex-shrink-0  w-auto lg:h-screen lg:flex items-center justify-center md:pr-10 lg:pb-0 pb-10'>
                    <Slider text={'ПОРТФОЛИО'} />
                    <div className='md:flex gap-3 md:mb-0 '>
                        <div className=' lg:mb-40 md:mb-0 lg:ml-16 px-4'>
                            <h2 className="text-white 2xl:text-[140px] lg:text-[150px] md:text-[90px] text-[56px] font-bold font-['Jost'] uppercase lg:leading-[240px]">с кем  <span className='lg:hidden md:flex hidden items-end  justify-end'>работали</span></h2>
                        </div>

                        <div className=' 2xl:space-y-[70px] lg:space-y-[30px] md:mt-0 items-center relative'>
                            <Eye />
                            <h2 className="text-white lg:block md:hidden flex flex-col lg:absolute top-[20rem] right-14 px-4 items-center 2xl:text-[140px] lg:text-[150px] md:text-[90px] text-[56px] font-bold font-['Jost'] uppercase lg:leading-[240px] ">работали</h2>
                        </div>
                    </div>
                    {/* Cards */}
                    <div className=' grid lg:px-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 space-y-4 space-x-4'>
                        {isMobile ? (
                            <SLick />
                        ) : (
                            potfolios.portfolio.map((item, index) => (
                                <div
                                    onMouseEnter={() => handleMouseEnter(item.image)}
                                    onMouseLeave={() => handleMouseLeave(item.geyLogo)}
                                    key={item.id}
                                    className='w-[12rem] h-[8rem] bg-white rounded-2xl py-3 mt-4 ml-4 flex justify-center items-center px-4'
                                >
                                    <img
                                        className="w-full h-full object-contain"
                                        src={isHovered && imageSrc === item.image ? item.image : item.geyLogo}
                                        alt={item.alt} // add alt text for accessibility
                                    />
                                </div>
                            ))
                        )}




                    </div>

                </section>
                <Services />

                <section className='flex-shrink-0  w-auto 2xl:h-screen h-auto  lg:flex  lg:items-center justify-center lg:pt-0  md:pt-32 lg:pb-0
             pb-9'>
                    <div className=' lg:h-screen 2xl:w-[180px] lg:w-[102px] h-[70px] w-screen lg:border-r lg:border-l border-t border-b  border-white lg:rotate-180 flex flex-col lg:justify-between justify-center items-center'>
                        <h3 className="text-white horizon-text 2xl:text-[70px] my-auto md:text-[50px] text-2xl  font-bold uppercase leading-snug tracking-wider">наши партнеры</h3>
                    </div>

                    <div className=' grid lg:px-4 grid-cols-3 space-y-4 space-x-4'>


                        {isMobile ? (
                            <Partners images={images} />
                        ) : (
                            images.map((item, index) => (
                                <div
                                    onMouseEnter={() => handleMouseEnter(item.src1)}
                                    onMouseLeave={() => handleMouseLeave(item.src)}
                                    className='w-[12rem] h-[8rem] bg-white rounded-2xl  mt-4 ml-4 flex justify-center items-center px-4'>

                                    <img
                                        key={index}
                                        className=' w-auto h-auto '
                                        src={isHovered && imageSrc === item.src1 ? item.src1 : item.src}

                                        alt='Image'
                                    />


                                </div>
                            ))
                        )}
                        {/* <div className='w-[12rem] h-[8rem]   flex justify-center items-center px-4'>
                        <img
                            className=''
                            src={isHovered ? b1 : b}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            alt='Image'
                        />
                    </div>
                    <div className='w-[12rem] h-[8rem]  flex justify-center items-center px-4'>
                        <img src={c} />
                    </div>
                    <div className='w-[12rem] h-[8rem]  flex justify-center items-center px-4'>
                        <img src={d} />
                    </div>
                    <div className='w-[12rem] h-[8rem] bg-white  flex justify-center items-center px-4'>
                        <img src={e} />
                    </div>
                    <div className='w-[12rem] h-[8rem]  flex justify-center items-center px-4'>
                        <img src={f} />
                    </div>
                    <div className='w-[12rem] h-[8rem]  flex justify-center items-center px-4'>
                        <img src={g} />
                    </div>
                    <div className='w-[12rem] h-[8rem]  flex justify-center items-center px-4'>
                        <img src={h} />
                    </div>
                    <div className='w-[12rem] h-[8rem]  flex justify-center items-center px-4'>
                        <img src={i} />
                    </div>
                    <div className='w-[12rem] h-[8rem]  flex justify-center items-center px-4'>
                        <img src={m} />
                    </div>

                    <div className='w-[12rem] h-[8rem]  flex justify-center items-center px-4'>
                        <img src={l} />
                    </div>
                    <div className='w-[12rem] h-[8rem]  flex justify-center items-center px-4'>
                        <img src={n} />
                    </div> */}
                    </div>
                </section>

                <Last3Page isBeating={isBeating} />
            </div>
        </>
    );
};

export default HomePage;

