import React, { useEffect, useState } from 'react';
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

const HomePage = () => {
    const [isBeating, setIsBeating] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [bgColorChange, setBgColorChange] = useState('black');

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

        <div className="lg:flex block lg:overflow-x-auto overflow-x-hidden h-[100vh]">
            <NavBar />
            {/* px-10 */}
            <section className="bg-black flex-shrink-0  w-auto 2xl:h-screen h-auto py-24 flex flex-col lg:items-center justify-center   pb-[60px]">
                <div className='lg:w-screen'>
                    <div className='max-w-[1620px] w-auto mx-auto py-14 lg:ml-36 px-4'>
                        <h2 className=" text-white font-black hidden lg:block  xl:text-7xl lg:text-[80px] text-[50px] uppercase xl:leading-[192px] ">Мы <span className=" font-light lg:leading-[192px]">маркетинговое Агенство  и здесь чтобы создать</span> будущее для вашего бизнеса</h2>
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

            <section className='flex-shrink-0 bg-black w-auto lg:h-screen h-auto lg:flex justify-center items-center 2xl:py-12'>
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

            <section className='flex-shrink-0 bg-black w-auto lg:h-screen lg:flex items-center justify-center py-20 px-10'>
                <Slider text={'PORTFOLIO'} />
                <div className='md:flex gap-3'>
                    <div className=' md:mb-40 lg:ml-56'>
                        <h2 className="text-white 2xl:text-[240px] lg:text-[200px] md:text-[90px] text-[56px] font-bold font-['Jost'] uppercase md:leading-[240px]">Наши  <span className='hidden'>работы</span></h2>
                    </div>

                    <div className=' 2xl:space-y-[70px] lg:space-y-[30px] md:mt-0 '>
                        <img src={eye} className=' 2xl:w-auto 2xl:h-auto md:mr-0 mr-10 lg:w-[500px] lg:h-[200px] md:w-[400px] md:h-[188px] w-[191px] h-20 lg:mt-0 md:mt-14' />
                        <h2 className="text-white flex flex-col items-end 2xl:text-[240px] lg:text-[200px] md:text-[90px] text-[56px] font-bold font-['Jost'] uppercase lg:leading-[240px] ">работы</h2>
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
            <section className='flex-shrink-0 bg-black w-auto lg:h-screen h-auto lg:flex block items-center lg:pb-0 pb-[50px]'>
                <div className=' lg:h-screen lg:w-[182px] h-[182px] w-full lg:border-r lg:border-l border-t border-b py-20 border-white lg:rotate-180 flex flex-col lg:justify-between justify-center items-center'>
                    <h3 className="font_border horizon-text 2xl:text-[100px] md:text-[68px] text-4xl  font-bold  font-['HelveticaNeueCyr'] capitalize leading-snug tracking-wider">чем мы занимаемся?</h3>
                </div>
                <div className=' flex'>
                <div className=' mb-40 2xl:ml-56 lg:ml-14 px-10'>
                    <h2 className="text-white 2xl:text-[240px] md:text-[80px] text-[44px] font-bold font-['Jost'] uppercase leading-[240px]">Наши  <span className='hidden'>услуги</span></h2>
                </div>

                <div className=''>
                    <div class="pulse flex items-center justify-center 2xl:ml-32">
                        <div
                            className={` md:ml-9 transition-transform transform ${isBeating ? 'scale-110' : 'scale-100'}`}
                        >
                            {/* Your Heart SVG goes here */}
                            <img
                                src={brain} // Replace with your Heart SVG image source
                                alt="brain"
                                className="2xl:w-auto 2xl:h-auto w-[150px] h-[150px]"
                            />
                        </div>

                    </div>
                    <h2 className="text-white 2xl:text-[240px] 2xl:mb-0 lg:mb-40 md:text-[80px] text-[44px] font-bold font-['Jost'] uppercase ">услуги</h2>
                </div>
                </div>


                {/* List of services */}
                <div className='lg:flex items-center lg:ml-24 lg:py-0 py-10 lg:space-y-0 space-y-9'>
                    <div className=' md:flex lg:items-center items-end'>
                        <div className='lg:flex flex-col justify-start items-start ml-11'>
                            <div className='flex justify-start items-start'>
                                <Button text={'websites'} />
                            </div>
                            <ul className=' list-disc'>
                                <li className="text-white 2xl:text-[28px] text-[20px] font-normal font-['Evolventa'] capitalize leading-[42px]">Landing page development</li>
                                <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Development of corporate sites</li>
                                <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Development of a catalog site</li>
                                <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Development of an online store</li>
                                <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Marketplace development</li>
                                <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Creation of mobile applications of any<br /> complexity</li>
                                <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Software development</li>
                            </ul>

                        </div>
                        <div className='flex items-end justify-end lg:h-screen mb-14'>
                            <div className='relative'>
                                <img src={readbtn} className=" animate-spin-slow" />
                                <img src={next} className=" w-[44px] h-[40px] absolute top-12 left-12" />
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-col justify-end md:items-end ml-11 '>
                        <div className='md:flex lg:items-center items-end'>
                            <div>
                                <Button text={'branding'} />
                                <ul className=' list-disc'>
                                    <li className="text-white 2xl:text-[28px] text-[20px] font-normal font-['Evolventa'] capitalize leading-[42px]">Naming development</li>
                                    <li className="text-white 2xl:text-[28px] text-[20px] font-normal font-['Evolventa'] capitalize leading-[42px]">Logo development</li>
                                    <li className="text-white 2xl:text-[28px] text-[20px] font-normal font-['Evolventa'] capitalize leading-[42px]">Corporate identity development</li>
                                    <li className="text-white 2xl:text-[28px] text-[20px] font-normal font-['Evolventa'] capitalize leading-[42px]">Brand book development</li>
                                    <li className="text-white 2xl:text-[28px] text-[20px] font-normal font-['Evolventa'] capitalize leading-[42px]">Communication design and branding</li>
                                    <li className="text-white 2xl:text-[28px] text-[20px] font-normal font-['Evolventa'] capitalize leading-[42px]">Turnkey brand</li>
                                    <li className="text-white 2xl:text-[28px] text-[20px] font-normal font-['Evolventa'] capitalize leading-[42px]">Food branding</li>
                                    <li className="text-white 2xl:text-[28px] text-[20px] font-normal font-['Evolventa'] capitalize leading-[42px]">Finbranding</li>
                                    <li className="text-white 2xl:text-[28px] text-[20px] font-normal font-['Evolventa'] capitalize leading-[42px]">Retail branding</li>
                                    <li className="text-white 2xl:text-[28px] text-[20px] font-normal font-['Evolventa'] capitalize leading-[42px]">Corporate branding</li>
                                    {/* <li className="text-white 2xl:text-[28px] text-[20px] font-normal font-['Evolventa'] capitalize leading-[42px]">Rebranding</li>
                            <li className="text-white 2xl:text-[28px] text-[20px] font-normal font-['Evolventa'] capitalize leading-[42px]">Package design</li>
                            <li className="text-white 2xl:text-[28px] text-[20px] font-normal font-['Evolventa'] capitalize leading-[42px]">Personal branding / Self-branding</li> */}
                                </ul>
                            </div>
                            <div className='flex items-end justify-end lg:h-screen mb-14 md:mr-8'>
                            <div className='relative'>
                                <img src={readbtn} className=" animate-spin-slow" />
                                <img src={next} className=" w-[44px] h-[40px] absolute top-12 left-12" />
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='relative flex flex-col '>
                        <div className='lg:flex gap-[17rem] w-auto relative'>
                            <div className='flex flex-col justify-end ml-11 '>
                                <div className='md:flex lg:items-center items-end'>
                                    <div>
                                        <div onClick={startAnimation}>
                                            <Button text={'presentations'} />
                                        </div>

                                        <ul className=' list-disc'>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Corporate presentation</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Presentation for business</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Marketing kit</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Selling presentations</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Project / franchise / startup/ presentation</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Investment presentation</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Training presentation</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Presentations for speeches</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Restaurant menu / catalog store products</li>
                                        </ul>
                                    </div>
                                    <div className='lg:hidden flex items-end justify-end lg:h-screen '>
                                        <div className='relative'>
                                            <img src={readbtn} className=" animate-spin-slow" />
                                            <img src={next} className=" w-[44px] h-[40px] absolute top-12 left-12" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute z-20 bottom-[318px] left-[325px] hidden lg:block">
                                <MovingFigure1 isAnimating={isAnimating} />

                            </div>
                            {/* <img src={first} className="absolute z-20 bottom-[318px] left-[325px]" /> */}

                            <div className='absolute z-20 bottom-[120px] left-[333px] hidden lg:block'>
                                <MovingFigure2 isAnimating={isAnimating} />





                            </div>
                            {/* <img src={third} className="absolute z-20 bottom-[120px] left-[333px]" /> */}

                            <div className="absolute z-20 bottom-[-40px] left-[280px] hidden lg:block">
                                <MovingFigure3 isAnimating={isAnimating} />

                            </div>
                            {/* <img src={second} className="absolute z-20 bottom-[-40px] left-[280px]" /> */}
                            <div className=" ml-[80px] mt-32 lg:block hidden">
                                <Button text={'QUARTERLY'} isAnimating={isAnimating} style={bgColorChange} />
                            </div>

                            <div className=" md:ml-72 mt-32">
                                <Button text={'MARKETING'} isAnimating={isAnimating} style={bgColorChange} />
                                <ul className=' list-disc lg:hidden block'>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Corporate presentation</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Presentation for business</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Marketing kit</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Selling presentations</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Project / franchise / startup/ presentation</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Investment presentation</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Training presentation</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Presentations for speeches</li>
                                            <li className="text-white text-[28px] font-normal font-['Evolventa'] capitalize leading-[42px]">Restaurant menu / catalog store products</li>
                                        </ul>
                            </div>


                        </div>
                        <div className=" absolute left-[785px] bottom-[-70px] lg:block hidden">
                            <Button text={'TARGET'} isAnimating={isAnimating} style={bgColorChange} />
                        
                        </div>
                    </div>
                </div>
            </section>

            <Last3Page isBeating={isBeating} />
        </div>
    );
};

export default HomePage;
