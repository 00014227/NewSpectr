import React, { useState } from 'react'
import axios from 'axios';
import Telegram, { FaceBook, Instagram } from './FooterIcon'
import { Dialog, DialogBody, Slider } from "@material-tailwind/react";
import CheckMark from "../assets/check-mark.webp"
import ErorMark from "../assets/error-icon.png"

export default function Last3Page({ isBeating }) {
    const [rangeValue, setRangeValue] = useState(0);
    const [open, setOpen] = React.useState(false);
    const [formStatus, setFormStatus] = useState(null);
    const [formData, setFormData] = useState({
        companyName: '',
        firstName: '',
        serviceInterest: '',
        contactNumber: '',
        budget: rangeValue,
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleOpen = () => setOpen(!open);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const isFormValid = Object.values(formData).every((value) => value.trim() !== '');
        if (!isFormValid) {
            setFormStatus(false)
            return;
        }

        try {
            const response = await axios.post('https://ahad.spectragency.uz/send', formData);
            setFormStatus(true);
        } catch (error) {
            console.error('Error sending data:', error);
            setFormStatus(false);
        }
    };

    const handleRangeChange = (event) => {
        setRangeValue(parseInt(event.target.value));
    };


    return (
        <section className='flex-shrink-0  w-auto lg:pl-40  lg:h-screen  lg:flex 2xl:py-12 items-center  gap-36 bg-black'>

            <div className=''>
                <form onSubmit={handleSubmit} className='flex lg:flex-row flex-col items-center md:gap-20 gap-10'>
                    <div className=' space-y-10 flex flex-col items-center'>
                        <div className='flex flex-col '>
                            <label className='text-white text-xl'>Название вашей компании</label>
                            <input
                                type='text'

                                value={formData.companyName}
                                onChange={handleInputChange}
                                name='companyName'
                                className='md:w-[25rem] mt-4 w-[90vw] h-[3rem] bg-black border-2 text-white rounded-xl border-teal-500  py-2'
                                placeholder='Введите название компании'
                                required
                            />
                        </div>


                        <div className='flex flex-col '>
                            <label className=' text-white text-xl'>Ваше имя</label>
                            <input
                                type='text'
                                value={formData.firstName}
                                onChange={handleInputChange}
                                name='firstName'
                                className='md:w-[25rem] mt-4 w-[90vw] h-[3rem] bg-black border-2 text-white rounded-xl border-teal-500  py-2'
                                placeholder='Введите название компании'
                            />

                        </div>

                        <div className='flex flex-col'>
                            <label className=' text-white text-xl'>Какая услуга вас интересует</label>
                            <select
                                id="countries"
                                value={formData.serviceInterest}
                                onChange={handleInputChange}
                                name='serviceInterest'
                                className="bg-black mt-4 border-2 md:w-[25rem] w-[90vw] border-teal-500 text-white text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option className='text-gray-400' selected>Выберите услугу</option>
                                <option >Маркетинг</option>
                                <option >Создание вебсайта</option>
                                <option >СММ</option>
                                <option >Брендинг</option>
                                <option >Продакшн</option>
                            </select>
                        </div>
                    </div>

                    <div className=' space-y-14 flex flex-col justify-center'>


                        <div className='flex flex-col lg:items-start '>
                            <label className=' text-white text-xl'>Контактный номер</label>
                            <div className="relative ">
                                <div className="absolute inset-y-0 start-0 top-4 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name='contactNumber'

                                    value={formData.contactNumber}
                                    onChange={handleInputChange}
                                    id="phone-input"
                                    aria-describedby="helper-text-explanation" className="bg-black mt-4 h-[3rem] border-2 md:w-[25rem] w-[90vw] border-teal-500 text-white text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+998 94-059-97-79" required />
                            </div>
                        </div>

                        <div className='flex flex-col lg:items-start '>
                            <label className=' text-white text-xl'>Ваш бюджет: <span>{formData.budget}</span> $</label>
                            <div className=' mt-4 relative flex items-center'>
                                <input type='range'
                                    name='budget'
                                    min='0' max='20000'
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    className=' range-slider md:w-[25rem]  h-[1.4rem] w-[90vw] text-teal-500 bg-black border border-teal-500 appearance-none rounded-lg ' />

                                <div
                                    style={{ width: formData.budget / 200 + "%" }}
                                    className="absolute  bg-teal-500 rounded-lg h-[1.4rem]"
                                ></div>
                            </div>
                        </div>


                        <button onClick={() => handleOpen()} type='submit' className=' text-white text-xl border-2  mx-auto border-teal-500 rounded-xl hover:bg-teal-500 w-[20rem] h-[3rem]'>Отправить</button>
                        <Dialog open={formStatus !== null && open } handler={() => setFormStatus(null)  } className="lg:w-[30rem] w-full h-[20rem] flex items-center justify-center">
                            <DialogBody className=''>
                                <div className='flex flex-col items-center justify-center'>


                                    {formStatus === true && (
                                        <div className='flex flex-col items-center justify-center'>
                                            <img className='w-28 h-28' src={CheckMark} alt='Check Mark' />
                                            <p className='text-3xl'>Заявка принята</p>
                                            <p className='text-xl'>Спасибо! Ваше сообщение отправлено!</p>
                                            <p className='text-xl'>Мы свяжемся с вами в ближайшее время</p>
                                            <button onClick={() => setOpen(!open)} className=' bg-green-600 text-white rounded-lg px-10 mt-5 py-4 text-lg'>Готово</button>
                                        </div>
                                    )}
                                    {formStatus === false && (
                                        <div className='flex flex-col items-center justify-center'>
                                            <img className='w-28 h-28' src={ErorMark} alt='Error Mark' />
                                            <p className='text-3xl'>Ошибка отправки</p>
                                            <p className='text-xl w-[20rem] text-center'>Пожалуйста, убедитесь, что вы заполнили все поля формы</p>
                                            <button onClick={() => setOpen(!open)} className=' bg-red-600 font-bold text-white rounded-lg px-10 mt-5 py-4 text-lg'>Назад</button>

                                        </div>
                                    )}





                                </div>
                            </DialogBody>
                        </Dialog>
                    </div>
                </form>
            </div>



            <div className=' xl:h-screen lg:h-[80vh] w-auto flex lg:flex-col justify-between px-8 py-12'>
                <Telegram />
                <Instagram />
                <FaceBook />

            </div>





            <footer className=' lg:h-screen h-[182px] lg:w-[182px] w-full lg:border-r border-t py-20 border-white lg:rotate-180 flex flex-col justify-between items-center'>
                <p className="text-white horizon-text text-base font-normal  font-['HelveticaNeueCyr'] capitalize leading-snug tracking-wider">spectr agency</p>
                <p className="text-white horizon-text text-base font-normal font-['HelveticaNeueCyr'] capitalize leading-snug tracking-wider">2021-2024 COPYRIGHT</p>
            </footer>
        </section>
    )
}
