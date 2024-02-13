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
            className="asdf relative z-50 lg:flex items-center overflow-x-hidden lg:overflow-y-hidden  block lg:overflow-x-auto bg-black  h-[100vh]">
            <NavBar />
            <div className='w-full h-screen -z-10 absolute top-0 left-0'>   
            <Background />
            </div>
         

            <section className=" flex-shrink-0  w-auto 2xl:h-screen h-auto py-24 flex flex-col lg:items-center justify-center   pb-[60px]">
                <div className='lg:w-screen'>
                    <div className='max-w-[1620px] w-auto mx-auto py-14 lg:ml-36 px-4'>
                        <h2 className=" text-white font-black hidden lg:block  xl:text-7xl lg:text-[80px] text-[50px] uppercase xl:leading-[152px] ">Мы <span className=" font-light lg:leading-[152px]">маркетинговое Агенство  и здесь чтобы создать</span> будущее для вашего бизнеса</h2>
                        <h2 className=" text-white font-black block lg:hidden  xl:text-7xl lg:text-[80px] text-[50px] uppercase  ">Мы <span className=" font-light ">маркетинговое Агенство  и здесь чтобы создать</span> <br /><span className='flex md:justify-end lg:mr-0 mr-7'>будущее для </span><br /> <span className='flex justify-end lg:mr-0 mr-7'>вашего бизнеса</span> </h2>

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
                <div className='flex items-center justify-center'>
                    <img src={txt} className=" animate-spin-slow" />
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

            <section className='flex-shrink-0  w-auto lg:h-screen lg:flex items-center justify-center py-20 px-10'>
                <Slider text={'PORTFOLIO'} />
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
                <div className=' lg:gap-28 md:gap-5 lg:flex md:grid grid-cols-2 lg:ml-20 md:space-y-0 space-y-8'>
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
                    <img src={next} className="md:w-auto md:h-auto w-[120px] h-[100px]" />
                    <p className="text-teal-500 md:text-[100px] text-[56px] font-bold font-['Jost'] capitalize">see more</p>
                </div>
            </section>
            <Services />

            <Last3Page isBeating={isBeating} />
        </div>
    );
};

export default HomePage;

