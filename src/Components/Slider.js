import React from 'react';

const Slider = ({text}) => {
  return (
    // lg:ml-36
    <div className="lg:h-screen lg:w-[242px] w-full md:h-[160px] h-[70px] overflow-hidden lg:border-r lg:border-l border-t border-b border-white space-y-12 lg:rotate-180  ">
      <div className='flex items-center justify-center infinite-scroll gap-10 mx-auto my-auto'>
        <div className="w-2.5 h-2.5 bg-teal-500 mt-16 lg:my-0 my-auto" />
        <p className="text-white md:text-[100px] text-xl font-bold tracking-widest capitalize">
          {text}
        </p>
      </div>


      <div className='flex items-center justify-center infinite-scroll gap-10 mx-auto'>
        <div className="w-2.5 h-2.5 bg-teal-500  lg:my-0 my-auto" />
        <p className="text-white md:text-[100px] text-xl font-bold tracking-widest ">
        {text}
        </p>

      </div>

      <div className='flex items-center justify-center infinite-scroll gap-10 mx-auto'>
        <div className="w-2.5 h-2.5 bg-teal-500  lg:my-0 my-auto" />
        <p className="text-white md:text-[100px] text-xl font-bold tracking-widest ">
        {text}
        </p>

      </div>

      <div className='flex items-center justify-center infinite-scroll gap-10 mx-auto my-auto'>
        <div className="w-2.5 h-2.5 bg-teal-500 mt-16 lg:my-0 my-auto" />
        <p className="text-white md:text-[100px] text-xl font-bold tracking-widest capitalize">
        {text}
        </p>
      </div>


      <div className='flex items-center justify-center infinite-scroll gap-10 mx-auto'>
        <div className="w-2.5 h-2.5 bg-teal-500  lg:my-0 my-auto" />
        <p className="text-white text-[100px] font-bold tracking-widest ">
        {text}
        </p>

      </div>

      <div className='flex items-center justify-center infinite-scroll gap-10 mx-auto'>
        <div className="w-2.5 h-2.5 bg-teal-500  lg:my-0 my-auto" />
        <p className="text-white text-[100px] font-bold tracking-widest ">
        {text}
        </p>

      </div>
    </div>
  );
};

export default Slider;
