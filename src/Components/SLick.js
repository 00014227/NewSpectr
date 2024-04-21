import React, { useRef, useState } from "react";
import Slider from "react-slick";
import potfolios from '../data/potfolio.json'

function SLick() {
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
    <div className=" w-screen">
      <Slider          {...settings} className="flex   mx-auto">

        {potfolios.portfolio.map((item, index) => (



          <div
            onMouseEnter={() => handleMouseEnter(item.image)}
            onMouseLeave={() => handleMouseLeave(item.geyLogo)}
            key={item.id} className='w-[12rem] h-[8rem] bg-white rounded-2xl py-3 mt-4 ml-4 flex justify-center items-center px-4'>
            <img className="w-full h-full object-contain" src={isHovered && imageSrc === item.image ? item.image : item.geyLogo} />
          </div>


        ))}
      </Slider>

    </div>
  );
}
export default SLick;
