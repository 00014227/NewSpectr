import React, { useEffect } from 'react'
import ButtonModal from './Button'
import readbtn from '../assets/readbtn.png'
import next from '../assets/next.svg'
import { Link } from 'react-router-dom'

export default function Services() {
  

    return (
        <section className='flex-shrink-0  w-auto lg:h-screen  h-auto lg:flex block items-center lg:pb-0 pb-[50px]'>
            <div className=' lg:h-screen 2xl:w-[182px] lg:w-[102px] h-[70px]  w-screen lg:border-r lg:border-l border-t border-b  border-white lg:rotate-180 flex flex-col lg:justify-between justify-center items-center'>
                <h3 className=" text-white uppercase horizon-text  my-auto  2xl:text-[70px] md:text-[50px] text-xl  font-bold   leading-snug tracking-wider">наши услуги</h3>
            </div>

            <div className=' lg:ml-20 px-8 lg:flex lg:space-x-20' >
                <div className='lg:flex'>
                    <div className=' lg:space-y-4'>
                        <button className='flex justify-center items-center' >
                            <div className='relative flex justify-end mt-11 h-[5rem] lg:w-[300px] w-[300px] group'>
                                {/* First Element */}
                                <div className="element absolute lg:w-[56.50px] w-[46px] lg:h-[1.7rem] h-[30px] border border-teal-500 z-10 lg:left-[16.5rem] left-[18rem] bottom-[68px] "></div>

                                {/* Second Element */}
                                <div className="element absolute lg:w-[113px] w-[80px] h-[2.5rem]  border border-teal-500 ml-16 lg:left-[8.3rem] left-[11rem] lg:top-[-0.5rem] top-[-0.7rem] z-10"></div>

                                {/* Third Element */}
                                <div

                                    className={`element absolute max-w-[320px] w-full 2xl:py-2 px-7  h-auto border border-teal-500 hover:bg-teal-500 text-white z-10 2xl:text-2xl text-[20px] font-bold font-Jost leading-[43.20px]`}
                                >
                                    Web разработки
                                </div>
                            </div>
                        </button>
                        <ul className=' text-white list-disc 2xl:text-[28px] lg:text-[18px]'>
                            <li>разработка одностраничного сайта ( landing page )</li>
                            <li>разработка корпоративных сайтов</li>
                            <li>разработка каталог сайтов</li>
                            <li>разработка интернет магазина ( e-commerce )</li>
                            <li>разработка маркетплейса</li>
                            <li>разработка мобильных приложений</li>
                            <li>разработка программного обеспечения</li>

                        </ul>
                    </div>
                    <div className='flex items-end lg:justify-end md:justify-center justify-end mt-5'>
                        <Link to='/services/web'>
                            <div className='relative h-fit'>
                                <img src={readbtn} className=" 2xl:w-[144px] 2xl:h-[144px] w-24 h-24 animate-spin-slow" />
                                <img src={next} className=" 2xl:w-[44px] 2xl:h-[40px] w-[35px] h-[30px]  absolute 2xl:left-[3rem] 2xl:top-[3.2rem]  top-8 left-[2rem]" />
                            </div>
                        </Link>
                    </div>

                </div>

                <div className='lg:flex'>
                    <div className='flex flex-col items-end'>
                        <div className=' lg:space-y-4 '>
                        <button className='flex justify-center items-center' >
                            <div className='relative flex justify-end mt-11 h-[5rem] lg:w-[300px] w-[300px] group'>
                                {/* First Element */}
                                <div className="element absolute lg:w-[56.50px] w-[46px] lg:h-[1.7rem] h-[30px] border border-teal-500 z-10 lg:left-[16.5rem] left-[18rem] bottom-[68px] "></div>

                                {/* Second Element */}
                                <div className="element absolute lg:w-[113px] w-[80px] h-[2.5rem]  border border-teal-500 ml-16 lg:left-[8.3rem] left-[11rem] lg:top-[-0.5rem] top-[-0.7rem] z-10"></div>

                                {/* Third Element */}
                                <div

                                    className={`element absolute max-w-[320px] w-full 2xl:py-2 px-7  h-auto border border-teal-500 hover:bg-teal-500 text-white z-10 2xl:text-2xl text-[20px] font-bold font-Jost leading-[43.20px]`}
                                >
                                   Брендинг
                                </div>
                            </div>
                        </button>
                            <ul className=' text-white list-disc 2xl:text-[28px] lg:text-[18px]'>
                                <li>определение бренда и его позиционирование на рынке</li>
                                <li>разработка уникального нейминга и создание логотипа</li>
                                <li>создание брендбука и фирменный стиль ( цветовая политра,<br /> шрифт,
                                    графические элементы, аудио, символы)</li>
                                <li>формирование брендовой идентичности</li>
                                <li>коммуникации и продвижение</li>
                                <li>разработка ценностей, миссии и управление брендом</li>
                                <li>ребрендинг</li>
                                <li>разработка дизайна упаковки</li>
                                <li>персональный брендинг</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-end justify-end '>
                        <Link to='/services/branding'>
                            <div className='relative h-fit'>
                                <img src={readbtn} className=" 2xl:w-[144px] 2xl:h-[144px] w-24 h-24 animate-spin-slow" />
                                <img src={next} className=" 2xl:w-[44px] 2xl:h-[40px] w-[35px] h-[30px]  absolute 2xl:left-[3rem] 2xl:top-[3.2rem]  top-8 left-[2rem]" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='lg:flex'>
                    <div className=' lg:space-y-4'>
                    <button className='flex justify-center items-center' >
                            <div className='relative flex justify-end mt-11 h-[5rem] lg:w-[300px] w-[300px] group'>
                                {/* First Element */}
                                <div className="element absolute lg:w-[56.50px] w-[46px] lg:h-[1.7rem] h-[30px] border border-teal-500 z-10 lg:left-[16.5rem] left-[18rem] bottom-[68px] "></div>

                                {/* Second Element */}
                                <div className="element absolute lg:w-[113px] w-[80px] h-[2.5rem]  border border-teal-500 ml-16 lg:left-[8.3rem] left-[11rem] lg:top-[-0.5rem] top-[-0.7rem] z-10"></div>

                                {/* Third Element */}
                                <div

                                    className={`element absolute max-w-[320px] w-full 2xl:py-2 px-7  h-auto border border-teal-500 hover:bg-teal-500 text-white z-10 2xl:text-2xl text-[20px] font-bold font-Jost leading-[43.20px]`}
                                >
                                    Маркетинг
                                </div>
                            </div>
                        </button>
                        <ul className=' text-white list-disc 2xl:text-[28px] lg:text-[18px]'>
                            <li>маркетинг стратегия</li>
                            <li>разработка маркетинг плана</li>
                            <li>маркетинг продвижение</li>
                            <li>маркетинг аудит и анализ</li>
                            <li>маркетинг консультации</li>
                            <li>digital маркетинг</li>
                            <li>традиционный маркетинг</li>
                            <li>офлайн маркетинг</li>

                        </ul>
                    </div>

                    <div className='flex items-end lg:justify-end md:justify-center justify-end'>
                        <Link to='/services/marketing'>
                            <div className='relative h-fit'>
                                <img src={readbtn} className=" 2xl:w-[144px] 2xl:h-[144px] w-24 h-24 animate-spin-slow" />
                                <img src={next} className=" 2xl:w-[44px] 2xl:h-[40px] w-[35px] h-[30px]  absolute 2xl:left-[3rem] 2xl:top-[3.2rem]  top-8 left-[2rem]" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='lg:flex'>
                    <div className='flex flex-col md:items-end'>
                        <div className='lg:space-y-4'>
                        <button className='flex justify-center items-center' >
                            <div className='relative flex justify-end mt-11 h-[5rem] lg:w-[300px] w-[300px] group'>
                                {/* First Element */}
                                <div className="element absolute lg:w-[56.50px] w-[46px] lg:h-[1.7rem] h-[30px] border border-teal-500 z-10 lg:left-[16.5rem] left-[18rem] bottom-[68px] "></div>

                                {/* Second Element */}
                                <div className="element absolute lg:w-[113px] w-[80px] h-[2.5rem]  border border-teal-500 ml-16 lg:left-[8.3rem] left-[11rem] lg:top-[-0.5rem] top-[-0.7rem] z-10"></div>

                                {/* Third Element */}
                                <div

                                    className={`element absolute max-w-[320px] w-full 2xl:py-2 px-7  h-auto border border-teal-500 hover:bg-teal-500 text-white z-10 2xl:text-2xl text-[20px] font-bold font-Jost leading-[43.20px]`}
                                >
                                    Смм
                                </div>
                            </div>
                        </button>
                            <ul className=' text-white list-disc 2xl:text-[28px] lg:text-[18px]'>
                                <li>разработка SMM стратегии</li>
                                <li>SMM продвижение</li>
                                <li>контент маркетинг</li>
                                <li>создание контента для соц сетей</li>
                                <li>инфлюенс маркетинг ( блоггеры )</li>
                                <li>разработка TOV ( tone of voice )</li>
                                <li>разработка фирменного стиля страниц</li>
                                <li>настройка и запуск таргетированной рекламы</li>

                            </ul>
                        </div>
                    </div>
                    <div className='flex items-end justify-end mt-5'>
                        <Link to='/services/smm'>
                            <div className='relative h-fit'>
                                <img src={readbtn} className=" 2xl:w-[144px] 2xl:h-[144px] w-24 h-24 animate-spin-slow" />
                                <img src={next} className=" 2xl:w-[44px] 2xl:h-[40px] w-[35px] h-[30px]  absolute 2xl:left-[3rem] 2xl:top-[3.2rem]  top-8 left-[2rem]" />
                            </div>
                        </Link>
                    </div>
                </div>


                <div className='lg:flex'>
                    <div className=' lg:space-y-4'>
                    <button className='flex justify-center items-center' >
                            <div className='relative flex justify-end mt-11 h-[5rem] lg:w-[300px] w-[300px] group'>
                                {/* First Element */}
                                <div className="element absolute lg:w-[56.50px] w-[46px] lg:h-[1.7rem] h-[30px] border border-teal-500 z-10 lg:left-[16.5rem] left-[18rem] bottom-[68px] "></div>

                                {/* Second Element */}
                                <div className="element absolute lg:w-[113px] w-[80px] h-[2.5rem]  border border-teal-500 ml-16 lg:left-[8.3rem] left-[11rem] lg:top-[-0.5rem] top-[-0.7rem] z-10"></div>

                                {/* Third Element */}
                                <div

                                    className={`element absolute max-w-[320px] w-full 2xl:py-2 px-7  h-auto border border-teal-500 hover:bg-teal-500 text-white z-10 2xl:text-2xl text-[20px] font-bold font-Jost leading-[43.20px]`}
                                >
                                    Продакшн
                                </div>
                            </div>
                        </button>
                        <ul className=' text-white list-disc 2xl:text-[28px] lg:text-[18px] '>
                            <li>профессиональный видеоролик</li>
                            <li>создание контента</li>
                            <li> проведении фотосессии</li>
                            <li>мобилография</li>
                            <li>голос бренда</li>


                        </ul>
                    </div>

                    <div className='flex items-end lg:justify-end md:justify-center justify-end'>
                        <Link to='/services/production'>
                            <div className='relative h-fit'>
                                <img src={readbtn} className=" 2xl:w-[144px] 2xl:h-[144px] w-24 h-24 animate-spin-slow" />
                                <img src={next} className=" 2xl:w-[44px] 2xl:h-[40px] w-[35px] h-[30px]  absolute 2xl:left-[3rem] 2xl:top-[3.2rem]  top-8 left-[2rem]" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}



