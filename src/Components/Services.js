import React from 'react'
import ButtonModal from './Button'
import readbtn from '../assets/readbtn.png'
import next from '../assets/next.svg'
import { Link } from 'react-router-dom'

export default function Services() {
    return (
        <section className='flex-shrink-0  w-auto lg:h-screen h-auto lg:flex block items-center lg:pb-0 pb-[50px]'>
            <div className=' lg:h-screen 2xl:w-[182px] lg:w-[102px] h-[70px]  w-screen lg:border-r lg:border-l border-t border-b  border-white lg:rotate-180 flex flex-col lg:justify-between justify-center items-center'>
                <h3 className="font_border horizon-text 2xl:text-[70px] my-auto md:text-[60px] text-5xl  font-bold  font-['HelveticaNeueCyr'] leading-snug tracking-wider">наши услуги</h3>
            </div>
            <div className=' lg:ml-20 px-8 lg:flex lg:space-x-20'>
                <div className='lg:flex'>
                    <div className=' space-y-4'>
                        <ButtonModal text={'WEB РАЗРАБОТКИ'} />
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
                    <div className='flex items-end lg:justify-end md:justify-center'>
                        <Link to='/services/web'>
                            <div className='relative h-fit'>
                                <img src={readbtn} className=" 2xl:w-[144px] 2xl:h-[144px] w-24 h-24 animate-spin-slow" />
                                <img src={next} className=" 2xl:w-[44px] 2xl:h-[40px] w-[35px] h-[30px]  absolute xl:left-[3rem] xl:top-[3.2rem] top-9 left-7" />
                            </div>
                        </Link>
                    </div>

                </div>

                <div className='lg:flex'>
                    <div className='flex flex-col items-end'>
                        <div className=' space-y-4 '>
                            <ButtonModal text={'БРЕНДИНГ'} />
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
                                <img src={next} className=" 2xl:w-[44px] 2xl:h-[40px] w-[35px] h-[30px]  absolute xl:left-[3rem] xl:top-[3.2rem] top-9 left-7" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='lg:flex'>
                    <div className=' space-y-4'>
                        <ButtonModal text={'МАРКЕТИНГ'} />
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

                    <div className='flex items-end lg:justify-end md:justify-center'>
                        <Link to='/services/marketing'>
                            <div className='relative h-fit'>
                                <img src={readbtn} className=" 2xl:w-[144px] 2xl:h-[144px] w-24 h-24 animate-spin-slow" />
                                <img src={next} className=" 2xl:w-[44px] 2xl:h-[40px] w-[35px] h-[30px]  absolute xl:left-[3rem] xl:top-[3.2rem] top-9 left-7" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='lg:flex'>
                    <div className='flex flex-col items-end'>
                    <div className=' space-y-4'>
                        <ButtonModal text={'SMM'} />
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
                    <div className='flex items-end justify-end'>
                        <Link to='/services/smm'>
                            <div className='relative h-fit'>
                                <img src={readbtn} className=" 2xl:w-[144px] 2xl:h-[144px] w-24 h-24 animate-spin-slow" />
                                <img src={next} className=" 2xl:w-[44px] 2xl:h-[40px] w-[35px] h-[30px]  absolute xl:left-[3rem] xl:top-[3.2rem] top-9 left-7" />
                            </div>
                        </Link>
                    </div>
                </div>


                <div className='lg:flex'>
                    <div className=' space-y-4'>
                        <ButtonModal text={'Продакшн'} />
                        <ul className=' text-white list-disc 2xl:text-[28px] lg:text-[18px]'>
                            <li>профессиональный видеоролик</li>
                            <li>создание контента</li>
                            <li> проведении фотосессии</li>
                            <li>мобилография</li>
                            <li>голос бренда</li>


                        </ul>
                    </div>

                    <div className='flex items-end lg:justify-end md:justify-center'>
                        <Link to='/services/production'>
                            <div className='relative h-fit'>
                                <img src={readbtn} className=" 2xl:w-[144px] 2xl:h-[144px] w-24 h-24 animate-spin-slow" />
                                <img src={next} className=" 2xl:w-[44px] 2xl:h-[40px] w-[35px] h-[30px]  absolute xl:left-[3rem] xl:top-[3.2rem] top-9 left-7" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


        </section>
    )
}



