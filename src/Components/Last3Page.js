import React, { useState } from 'react'
import hands from '../assets/hands.png'
import next from '../assets/next.svg'
import whatsup from '../assets/whatsup.png'
import whatsapp from '../assets/whatsapp.svg'
import telegram from '../assets/telegram.svg'
import instagram from '../assets/instagram.svg'
import { DialogDefault, LongDialog } from './Modal'
import Telegram, { Instagram } from './FooterIcon'

export default function Last3Page({ isBeating }) {
    const [rangeValue, setRangeValue] = useState(0);
    const handleRangeChange = (event) => {
        setRangeValue(parseInt(event.target.value));
      };
        return (
        <section className='flex-shrink-0  w-auto lg:pl-40  lg:h-screen  lg:flex 2xl:py-12 items-center gap-36 bg-black'>

            <div className=' '>
                <form className='flex lg:flex-row flex-col items-center gap-20'>
                    <div className=' space-y-10'>
                        <div className='flex flex-col'>
                            <label className=' text-white text-xl'>Название вашей компании</label>
                            <input type='text'
                                className=' w-[25rem] h-[3rem] bg-black border-2 text-white rounded-xl border-teal-500' />
                        </div>

                        <div className='flex flex-col'>
                            <label className=' text-white text-xl'>Ваше имя</label>
                            <input type='text'
                                placeholder='Введите ваше имя'
                                className=' w-[25rem] placeholder:text-white p-2.5 h-[3rem] bg-black border-2 text-white rounded-xl border-teal-500' />
                        </div>

                        <div className='flex flex-col'>
                            <label className=' text-white text-xl'>Какая услуга вас интересует</label>
                            <select id="countries" class="bg-black border-2 border-teal-500 text-white text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Выберите услугу</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                    </div>

                    <div className=' space-y-14'>
                       

                        <div>
                        <label className=' text-white text-xl'>Контактный номер</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-4 h-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                    </svg>
                                </div>
                                <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-black border-2 w-[25rem] border-teal-500 text-white text-sm rounded-lg placeholder:text-white focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                        <label className=' text-white text-xl'>Ваш бюджет: <span>{rangeValue}</span> $</label>
                        <input type='range'
                        min='0' max='20000' 
                        value={rangeValue}
                        onChange={handleRangeChange}
                        className=' bg- text-teal-500 appearance-none rounded-lg '/>
                        </div>


                        <button className=' text-white text-xl border-2 ml-10 border-teal-500 rounded-xl hover:bg-teal-500 w-[20rem] h-[3rem]'>Отправить</button>
                    </div>
                </form>
            </div>



            <div className=' xl:h-screen lg:h-[80vh] w-auto flex lg:flex-col justify-between px-8 py-12'>
                <Telegram/>
                <Instagram/>
                <Telegram/>

            </div>


            


            <footer className=' lg:h-screen h-[182px] lg:w-[182px] w-full lg:border-r border-t py-20 border-white lg:rotate-180 flex flex-col justify-between items-center'>
                <p className="text-white horizon-text text-base font-normal  font-['HelveticaNeueCyr'] capitalize leading-snug tracking-wider">spect agency</p>
                <p className="text-white horizon-text text-base font-normal font-['HelveticaNeueCyr'] capitalize leading-snug tracking-wider">2021-2024 COPYRIGHT</p>
            </footer>
        </section>
    )
}
