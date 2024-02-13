import React from 'react'
import ButtonModal from './Button'

export default function Services() {
    return (
        <section className='flex-shrink-0  w-auto lg:h-screen h-auto lg:flex block items-center lg:pb-0 pb-[50px]'>
            <div className=' lg:h-screen lg:w-[102px] h-[182px] w-full lg:border-r lg:border-l border-t border-b py-20 border-white lg:rotate-180 flex flex-col lg:justify-between justify-center items-center'>
                <h3 className="font_border horizon-text 2xl:text-[100px] md:text-[68px] text-4xl  font-bold  font-['HelveticaNeueCyr'] capitalize leading-snug tracking-wider">наши услуги</h3>
            </div>
            <div className=' ml-10 grid grid-cols-5'>
        
            <ButtonModal text={'Разроботка веб сайтов'}/>
            <ButtonModal text={'Брендиг'}/>
            <ButtonModal text={'Таргет'}/>
            <ButtonModal text={'Full маркениг'}/>
            <ButtonModal text={'SMM'}/>
            <ButtonModal text={'SEO оптимизация'}/>
            <ButtonModal text={'Digital маркетинг'}/>
            <ButtonModal text={'AmoCRM'}/>
            <ButtonModal text={'Сиситема лояльности'}/>
            <ButtonModal text={'Мероприятия'}/>
            </div>
            

        </section>
    )
}
