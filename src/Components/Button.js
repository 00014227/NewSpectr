import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import infoData from '../data/info.json'

const ButtonModal = ({ text, style, isAnimating, category, documentId }) => {
  const shouldAnimate = isAnimating && !!style; // Check if isAnimating is true and style prop is provided
  const [open, setOpen] = React.useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const getPortfolio = async () => {
    const result = infoData.info.find(item => item.id === documentId);
  
    setPopupContent(result)
  };

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    let timeoutId;

    if (shouldAnimate) {
      // Start the animation after 4 seconds
      timeoutId = setTimeout(() => {
        // Your logic to trigger the animation goes here
        console.log('Animation triggered after 4 seconds');
      }, 4000);
    }

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [shouldAnimate]);

  return (
    <>
      <button className='flex justify-center items-center' onClick={() => { getPortfolio(); handleOpen(); }}>
        <div className='relative flex justify-end mt-11 h-[5rem] lg:w-[300px] w-[300px] group'>
          {/* First Element */}
          <div className="element absolute lg:w-[56.50px] w-[46px] lg:h-[1.7rem] h-[30px] border border-teal-500 z-10 lg:left-[16.5rem] left-[18rem] bottom-[68px] "></div>

          {/* Second Element */}
          <div className="element absolute lg:w-[113px] w-[80px] h-[2.5rem]  border border-teal-500 ml-16 lg:left-[8.3rem] left-[11rem] lg:top-[-0.5rem] top-[-0.7rem] z-30"></div>

          {/* Third Element */}
          <div

            className={`element absolute w-[300px] 2xl:py-2 px-7  h-auto border border-teal-500 hover:bg-teal-500 text-white z-40 2xl:text-2xl text-[20px] font-bold font-Jost capitalize leading-[43.20px] ${shouldAnimate ? 'animated-button' : ''} ${style}`}
          >
            {text}
          </div>
        </div>
      </button>
    <div className='flex items-center justify-center'>
      <Dialog open={open} handler={handleOpen} className="w-[70vw] h-[80vh] mx-auto my-auto flex">
      {popupContent && (
        <>
      <img loading='lazy' role="presentation" decoding='async' fetchpriority = 'high' className='h-[80vh] w-[50%]' src={popupContent.imageUrl} alt="Portfolio" />

      <DialogBody className="h-[42rem]">
        <DialogHeader>{popupContent.serviceTitle}</DialogHeader>
        <Typography className="font-normal">
          {popupContent.description}
        </Typography>
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button variant="text" color="blue-gray" onClick={handleOpen}>
          cancel
        </Button>
        <Button variant="gradient" color="green" onClick={handleOpen}>
          confirm
        </Button>
      </DialogFooter>
      </>
    )}
</Dialog>
</div>
    </>
  );
};

export default ButtonModal;
