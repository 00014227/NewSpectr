import React, { useEffect, useState } from 'react'

export default function SnakeBox() {

  return (
    <div className='relative animation-container'>
       
      <div className='z-[4] snake-element absolute left-10 top-8 2xl:w-[400px] 2xl:h-[260px] w-[300px] h-[160px] flex justify-center items-center border border-teal-500 lg:ml-40'>
      <p className="text-white text-[56px] font-bold capitalize ">open</p>
      </div>
      <div className='z-[3] snake-element absolute left-5 top-4 2xl:w-[400px] 2xl:h-[260px] w-[300px] h-[160px] flex justify-center items-center border border-teal-500 lg:ml-40'>
        <p className=" font_border text-[56px] font-bold capitalize ">open</p>
      </div>
       <div className='z-[2] snake-element 2xl:w-[400px]  2xl:h-[260px] w-[300px] h-[160px] flex justify-center items-center border border-teal-500 lg:ml-40 '>
      <p className=" font_border text-[56px] font-bold capitalize ">open</p>
      </div>

      <div className='z-[1] snake-element absolute left-[18px] top-[-20px] 2xl:w-[400px] 2xl:h-[260px] w-[300px] h-[160px] flex justify-center items-center border border-teal-500 lg:ml-40'>
   
      <p className=" font_border text-[56px] font-bold capitalize ">open</p>
      </div> 

    

      


    </div>

  )
}
