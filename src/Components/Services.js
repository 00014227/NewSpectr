import React from 'react'
import ButtonModal from './Button'

export default function Services() {
    return (
        <section className='flex-shrink-0  w-auto lg:h-screen h-auto lg:flex block items-center lg:pb-0 pb-[50px]'>
            <div className=' lg:h-screen lg:w-[102px] h-[102px] w-full lg:border-r lg:border-l border-t border-b lg:py-20 border-white lg:rotate-180 flex flex-col lg:justify-between justify-center items-center'>
                <h3 className="font_border horizon-text 2xl:text-[100px] md:text-[68px] text-4xl  font-bold  font-['HelveticaNeueCyr'] capitalize leading-snug tracking-wider">наши услуги</h3>
            </div>
            <div className=' lg:ml-10 grid lg:grid-cols-3 gap-x-20'>
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

                <div className='lg:flex-wrap flex justify-center '>
                    <ButtonModal text={'SEO оптимизация'} />
                </div>
                <div className='lg:block md:flex justify-between  md:pr-10'>
                <div>
                    <ButtonModal text={'Digital маркетинг'} />
                </div>
                <div className='flex justify-center'>
                    <ButtonModal text={'AmoCRM'} />
                </div>
                </div>
               
                <div className='lg:block md:flex justify-between md:pr-10'>
                <div>
                    <ButtonModal text={'Таргет'} />
                </div>
                <div className='flex justify-center'>
                    <ButtonModal text={'Мероприятия'} />
                </div>
                </div>
               

            </div>


        </section>
    )
}
