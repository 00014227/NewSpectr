import React, { useRef, useState } from "react";
import Slider from "react-slick";
import potfolios from '../data/potfolio.json'


function Partners({images}) {
    const [isHovered, setIsHovered] = useState(false);
    const [imageSrc, setImageSrc] = useState('');



    const handleMouseEnter = (src1) => {
        setIsHovered(true);
        setImageSrc(src1)
    };

    // Handle mouse leave to change image source back to original
    const handleMouseLeave = (src) => {
        setIsHovered(false);
        setImageSrc(src);
    };

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        
    };

    return (
        <div className=" w-[100vw]  mt-4">
            <Slider          {...settings} className="flex   mx-auto ">

            {images.map((item, index) => (
                        <div
                            onMouseEnter={() => handleMouseEnter(item.src1)}
                            onMouseLeave={() => handleMouseLeave(item.src)}
                   
                            className='lg:w-[12rem] w-[8rem] h-[8rem] bg-white rounded-2xl  mt-4  flex justify-center items-center px-4'>

                            <img
                                key={index}
                                className=' w-full h-full object-contain '
                                src={isHovered && imageSrc === item.src1 ? item.src1 : item.src}

                                alt='Image'
                            />


                        </div>
                    ))}
            </Slider>

        </div>
    );
}

export default Partners;