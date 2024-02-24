import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../Components/NavBar';
import txt from '../assets/text.svg'
import heart from '../assets/heart.png'
import Slider from '../Components/Slider';
import Button from '../Components/Button';
import eye from '../assets/eye.png'
import service from '../assets/service.png'
import next from '../assets/next.svg'
import brain from '../assets/brain.png'
import readbtn from '../assets/readbtn.png'
import Last3Page from '../Components/Last3Page';
import MovingFigure3 from '../Components/MovingFigure3';
import MovingFigure1 from '../Components/MovingFigure1';
import MovingFigure2 from '../Components/MovingFigure2';
import Eye from '../Components/Eye';
import Services from '../Components/Services';
import Background from '../Components/Background';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [isBeating, setIsBeating] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [bgColorChange, setBgColorChange] = useState('black');
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


    const startAnimation = () => {

        // Start the animation
        setIsAnimating(true);
        // Reset bgColorChange when starting a new animation
        setTimeout(() => {
            setBgColorChange('teal'); // Change second button color after 2 seconds
        }, 4000);
    };



    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsBeating((prev) => !prev);
        }, 900);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    return (

        <div ref={scrollContainerRef} onWheel={handleWheelScroll}
            className="  relative z-50 lg:flex items-center overflow-x-hidden lg:overflow-y-hidden  block lg:overflow-x-auto bg-black  h-[100vh]">
            <NavBar />
            <div className='w-full h-screen -z-10 absolute top-0 left-0'>
                <Background />
            </div>


            <section className=" flex-shrink-0  w-auto 2xl:h-screen h-auto py-24 flex flex-col lg:items-center justify-center   pb-[60px]">
                <div className='lg:w-screen'>
                    <div className='max-w-[1620px] w-auto mx-auto py-14 lg:ml-36 px-4'>
                        <h2 className=" text-white font-black hidden lg:block 2xl:text-[5rem]  xl:text-6xl lg:text-[80px] text-[50px] uppercase xl:leading-[152px] ">Мы <span className=" font-light lg:leading-[152px]">маркетинговое Агенство  и здесь чтобы создать</span> будущее для вашего бизнеса</h2>
                        <h2 className=" text-white font-black block lg:hidden  xl:text-7xl lg:text-[80px] text-[35px] uppercase  ">Мы <span className=" font-light ">маркетинговое Агенство  и здесь чтобы создать</span> <br /><span className='flex md:justify-end lg:mr-0 mr-7'>будущее для вашего бизнеса</span></h2>

                    </div>
                    <div className='fixed bottom-0 right-0 mb-8 mr-8'>
                        <div>
                            <p className="text-white text-xl font-light uppercase font-['HelveticaNeueCyr'] leading-tight">scroll</p>
                            <div className="w-[200px] h-0.5 bg-white" />
                        </div>
                    </div>
                </div>

            </section>

            <section className='flex-shrink-0  w-auto lg:h-screen h-auto lg:flex justify-center items-center 2xl:py-12'>
                <div className='relative flex items-center justify-center'>
                    <img src={txt} className=" animate-spin-slow" />
                    <svg width="100" height="100" viewBox="0 0 527 527" fill="none" xmlns="http://www.w3.org/2000/svg" className=' absolute'>
                        <g clip-path="url(#clip0_327_173)">
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

                <div className=' lg:ml-36 px-10'>
                    {/* <h3 className="text-white text-[56px] font-bold  capitalize">about</h3> */}
                    <div className='lg:flex 2xl:gap-44 gap-9 items-center'>
                        <h1 className="text-white xl:text-[120px] lg:text[150px] md:text-[100px] text-[56px] font-bold font-['Jost'] uppercase ">spectr <span className='lg:hidden flex justify-end  '>agency</span> </h1>
                        <p className="text-white xl:text-xl text-2xl hidden lg:block font-normal font-['Evolventa'] capitalize leading-9 2xl:max-w-[810px] max-w-[670px]">
                            Маркетинговое агентство «Спектр» (Ташкент) специализируется на комплексном развитии успешных корпоративных, продуктовых и розничных брендов от построения стратегии бренда, разработки имени, создания логотипа, создания фирменного стиля до разработки сайта любого сложность. Также мы поможем вам рассказать о компании, товаре или услуге посредством презентации.
                        </p>
                    </div>

                    <div className='md:flex '>
                        <div class="pulse flex items-center justify-center 2xl:ml-32 mr-32 ">
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
                        <p className="text-white  text-xl block lg:hidden font-normal font-['Evolventa'] md:w-[500px] w-[390px] lg:w-auto capitalize leading-9 max-w-[810px]">
                            Маркетинговое агентство «Спектр» (Ташкент) специализируется на комплексном развитии успешных корпоративных, продуктовых и розничных брендов от построения стратегии бренда, разработки имени, создания логотипа, создания фирменного стиля до разработки сайта любого сложность. Также мы поможем вам рассказать о компании, товаре или услуге посредством презентации.
                        </p>
                        <h1 className="text-white xl:text-[100px] text-[140px] hidden lg:block font-bold font-['Jost'] uppercase leading-[150px] 2xl:leading-[200px]">marketing <br /> agency</h1>
                    </div>
                </div>
            </section>

            <section className='flex-shrink-0  w-auto lg:h-screen lg:flex items-center justify-center  px-10'>
                <Slider text={'ПОРТФОЛИО'} />
                <div className='md:flex gap-3'>
                    <div className=' md:mb-40 lg:ml-16'>
                        <h2 className="text-white 2xl:text-[240px] lg:text-[150px] md:text-[90px] text-[56px] font-bold font-['Jost'] uppercase md:leading-[240px]">Наши  <span className='hidden'>работы</span></h2>
                    </div>

                    <div className=' 2xl:space-y-[70px] lg:space-y-[30px] md:mt-0 '>
                        <Eye />
                        {/* <img src={eye} className=' 2xl:w-auto 2xl:h-auto md:mr-0 mr-10 lg:w-[500px] lg:h-[200px] md:w-[400px] md:h-[188px] w-[191px] h-20 lg:mt-0 md:mt-14' /> */}
                        <h2 className="text-white flex flex-col items-end 2xl:text-[240px] lg:text-[150px] md:text-[90px] text-[56px] font-bold font-['Jost'] uppercase lg:leading-[240px] ">работы</h2>
                    </div>
                </div>
                {/* Cards */}
                <div className=' lg:gap-28 md:gap-5 lg:flex md:grid grid-cols-2 lg:ml-20 md:space-y-0 space-y-8 mt-5'>
                    <div className='relative 2xl:w-[600px] lg:w-[480px]  '>
                        <div className='  hover:bg-teal-500 absolute opacity-50 2xl:w-[500px] lg:w-[400px] 2xl:h-[800px] lg:h-[600px] w-[300px] h-full '></div>
                        <img src={service} className="2xl:w-[500px] lg:w-[400px] 2xl:h-[800px] lg:h-[600px] w-[300px] h-full" />
                        <div className=' absolute 2xl:left-72 2xl:top-[37rem] lg:left-[12rem] lg:top-[27rem] top-[18rem] left-36 z-30 flex flex-col items-end'>
                            <h3 className="text-white lg:text-[56px] text-[40px] font-bold font-['Jost'] capitalize">Maxelon</h3>
                            <p className="text-white lg:text-[28px] text-[20px] font-normal font-['Jost'] capitalize leading-[42px]">FORKLIFT COMPANY</p>
                        </div>
                    </div>

                    <div className='relative 2xl:w-[600px] lg:w-[480px]  '>
                        <div className='  hover:bg-teal-500 absolute opacity-50 2xl:w-[500px] lg:w-[400px] 2xl:h-[800px] lg:h-[600px] w-[300px] h-full '></div>

                        <img src={service} className="2xl:w-[500px] lg:w-[400px] 2xl:h-[800px] lg:h-[600px] w-[300px] h-full" />
                        <div className=' absolute 2xl:left-72 2xl:top-[37rem] lg:left-[12rem] lg:top-[27rem] top-[18rem] left-36 z-30 flex flex-col items-end'>
                            <h3 className="text-white lg:text-[56px] text-[40px] font-bold font-['Jost'] capitalize">Maxelon</h3>
                            <p className="text-white lg:text-[28px] text-[20px] font-normal font-['Jost'] capitalize leading-[42px]">FORKLIFT COMPANY</p>
                        </div>
                    </div>

                    <div className='relative 2xl:w-[600px] lg:w-[480px]  '>
                        <div className='  hover:bg-teal-500 absolute opacity-50 2xl:w-[500px] lg:w-[400px] 2xl:h-[800px] lg:h-[600px] w-[300px] h-full '></div>

                        <img src={service} className="2xl:w-[500px] lg:w-[400px] 2xl:h-[800px] lg:h-[600px] w-[300px] h-full" />
                        <div className=' absolute 2xl:left-72 2xl:top-[37rem] lg:left-[12rem] lg:top-[27rem] top-[18rem] left-36 z-30 flex flex-col items-end'>
                            <h3 className="text-white lg:text-[56px] text-[40px] font-bold font-['Jost'] capitalize">Maxelon</h3>
                            <p className="text-white lg:text-[28px] text-[20px] font-normal font-['Jost'] capitalize leading-[42px]">FORKLIFT COMPANY</p>
                        </div>
                    </div>

                    <div className='relative 2xl:w-[600px] lg:w-[480px]  '>
                        <div className='  hover:bg-teal-500 absolute opacity-50 2xl:w-[500px] lg:w-[400px] 2xl:h-[800px] lg:h-[600px] w-[300px] h-full '></div>

                        <img src={service} className="2xl:w-[500px] lg:w-[400px] 2xl:h-[800px] lg:h-[600px] w-[300px] h-full" />
                        <div className=' absolute 2xl:left-72 2xl:top-[37rem] lg:left-[12rem] lg:top-[27rem] top-[18rem] left-36 z-30 flex flex-col items-end'>
                            <h3 className="text-white lg:text-[56px] text-[40px] font-bold font-['Jost'] capitalize">Maxelon</h3>
                            <p className="text-white lg:text-[28px] text-[20px] font-normal font-['Jost'] capitalize leading-[42px]">FORKLIFT COMPANY</p>
                        </div>
                    </div>


                </div>
                <Link to={'/works'}>
                    <div className=' md:ml-56 flex flex-col justify-center items-center'>
                        <img src={next} className="md:w-200 md:h-200 w-[120px] h-[100px]" />
                        <p className="text-teal-500 md:text-[60px] text-[56px] font-bold font-['Jost'] capitalize">see more</p>
                    </div>
                </Link>
            </section>
            <Services />

            <Last3Page isBeating={isBeating} />
        </div>
    );
};

export default HomePage;

