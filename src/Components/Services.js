import React from 'react'
import ButtonModal from './Button'
import readbtn from '../assets/readbtn.png'
import next from '../assets/next.svg'
import { Link } from 'react-router-dom'

export default function Services() {
    return (
        <section className='flex-shrink-0  w-auto lg:h-screen h-auto lg:flex block items-center lg:pb-0 pb-[50px]'>
            <div className=' lg:h-[100%] lg:w-[102px] h-[102px] w-full lg:border-r lg:border-l border-t border-b lg:py-20 border-white lg:rotate-180 flex flex-col lg:justify-between justify-center items-center'>
                <h3 className="font_border horizon-text 2xl:text-[100px] md:text-[58px] text-4xl  font-bold  font-['HelveticaNeueCyr'] uppercase leading-snug tracking-wider">наши услуги</h3>
            </div>
            <div className=' lg:ml-20 px-16 lg:flex lg:space-x-20'>
                <div className='lg:flex'>
                <div className=' space-y-4'>
                    <ButtonModal text={'WEB РАЗРАБОТКИ'}/>
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
                <div className='flex items-end justify-end'>
                <Link to='/services/web'>
                <div className='relative h-fit'>
                     <img src={readbtn} className=" 2xl:w-[144px] 2xl:h-[144px] w-24 h-24 animate-spin-slow"/>
                     <img src={next} className=" 2xl:w-[44px] 2xl:h-[40px] w-[35px] h-[30px]  absolute top-9 left-7"/>
                </div>
                </Link>
                </div>
              
                </div>

                <div className='lg:flex'>
                <div className=' space-y-4'>
                    <ButtonModal text={'БРЕНДИНГ'}/>
                    <ul className=' text-white list-disc 2xl:text-[28px] lg:text-[18px]'>
                        <li>определение бренда и его позиционирование на рынке</li>
                        <li>разработка уникального нейминга и создание логотипа</li>
                        <li>создание брендбука и фирменный стиль ( цветовая политра,<br/> шрифт,
графические элементы, аудио, символы)</li>
                        <li>формирование брендовой идентичности</li>
                        <li>коммуникации и продвижение</li>
                        <li>разработка ценностей, миссии и управление брендом</li>
                        <li>ребрендинг</li>
                        <li>разработка дизайна упаковки</li>
                        <li>персональный брендинг</li>
                    </ul>
                </div>

                <div className='flex items-end justify-end'>
                    <Link to='/services/branding'>
                <div className='relative h-fit'>
                     <img src={readbtn} className=" 2xl:w-[144px] 2xl:h-[144px] w-24 h-24 animate-spin-slow"/>
                     <img src={next} className=" 2xl:w-[44px] 2xl:h-[40px] w-[35px] h-[30px]  absolute top-9 left-7"/>
                </div>
                </Link>
                </div>
                </div>

                <div className='lg:flex'>
                <div className=' space-y-4'>
                    <ButtonModal text={'МАРКЕТИНГ'}/>
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

                <div className='flex items-end justify-end'>
                    <Link to='/services/marketing'>
                <div className='relative h-fit'>
                     <img src={readbtn} className=" 2xl:w-[144px] 2xl:h-[144px] w-24 h-24 animate-spin-slow"/>
                     <img src={next} className=" 2xl:w-[44px] 2xl:h-[40px] w-[35px] h-[30px]  absolute top-9 left-7"/>
                </div>
                </Link>
                </div>
                </div>

                <div className='lg:flex'>
                <div className=' space-y-4'>
                    <ButtonModal text={'SMM'}/>
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

                <div className='flex items-end justify-end'>
                    <Link to='/services/smm'>
                <div className='relative h-fit'>
                     <img src={readbtn} className=" 2xl:w-[144px] 2xl:h-[144px] w-24 h-24 animate-spin-slow"/>
                     <img src={next} className=" 2xl:w-[44px] 2xl:h-[40px] w-[35px] h-[30px]  absolute top-9 left-7"/>
                </div>
                </Link>
                </div>
                </div>
            </div>


        </section>
    )
}



          {/* <div className=' lg:ml-10 grid lg:grid-cols-2 gap-x-20'>
                <div className='lg:block md:flex justify-between md:pr-10'>
                    <div className=''>
                        <ButtonModal text={'Разроботка веб сайтов'} />
                    </div>
                    <div className='flex justify-center'>
                        <ButtonModal text={'Брендиг'} />
                    </div>
                </div>





              

                <div className='lg:block md:flex justify-between md:pr-10'>
                    <div className='flex justify-center'>
                        <ButtonModal text={'Full маркениг'} />
                    </div>
                    <div>
                        <ButtonModal text={'SMM'} />
                    </div>
                </div>

                {/* <div className='lg:flex-wrap flex justify-center '>
                    <ButtonModal text={'SEO оптимизация'} />
                </div> */}
            //     <div className='lg:block md:flex justify-between  md:pr-10'>
            //     <div>
            //         <ButtonModal text={'Digital маркетинг'} />
            //     </div>
            //     <div className='flex justify-center'>
            //         <ButtonModal text={'AmoCRM'} />
            //     </div>
            //     </div>
               
            //     <div className='lg:block md:flex justify-between md:pr-10'>
            //     <div>
            //         <ButtonModal text={'Таргет'} />
            //     </div>
            //     <div className='flex justify-center'>
            //         <ButtonModal text={'Мероприятия'} />
            //     </div>
            //     </div>
               

            // </div> 