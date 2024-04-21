import React, { useEffect, useState } from 'react';
import Spectr from '../assets/spectr.jpg'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

const ButtonModal = ({ text, style, isAnimating, category, documentId }) => {
  const shouldAnimate = isAnimating && !!style; // Check if isAnimating is true and style prop is provided
  const [open, setOpen] = React.useState(false);
  const [popupContent, setPopupContent] = useState(null); 
  const [infoData, setInfoData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://ahad.spectragency.uz/services');
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            setInfoData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            // You might want to handle errors here, such as setting a state for an error message.
        }
    };

    fetchData();
}, []);


  const getPortfolio = async () => {
    const result = infoData.find(item => item.id === documentId);

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
          <div className="element absolute lg:w-[113px] w-[80px] h-[2.5rem]  border border-teal-500 ml-16 lg:left-[8.3rem] left-[11rem] lg:top-[-0.5rem] top-[-0.7rem] z-10"></div>

          {/* Third Element */}
          <div

            className={`element absolute max-w-[320px] w-full 2xl:py-2 px-7  h-auto border border-teal-500 hover:bg-teal-500 text-white z-10 2xl:text-2xl text-[20px] font-bold font-Jost leading-[43.20px] ${shouldAnimate ? 'animated-button' : ''} ${style}`}
          >
            {text}
          </div>
        </div>
      </button>

      <Dialog open={open} handler={handleOpen}
       PaperProps={{
        style: {
          backgroundColor: "white",
          boxShadow: "none"
        },
      }}
        style={{
          base: {
            backdrop: {
              display: "grid",
              placeItems: "place-items-center",
              position: "fixed",
              top: 0,
              left: 0,
              width: "w-screen",
              height: "h-screen",
              backgroundColor: "black",
              backgroundOpacity: "bg-opacity-60",
              
            },
            
          },
        }}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        
        className="popup lg:w-[40vw] lg:h-[80vh] h-[50vh]   mx-auto my-auto lg:my-auto lg:flex lg:items-center lg:justify-center items-end justify-end bg-white">
        {popupContent && (
          <>
          <div className='lg:hidden flex justify-between items-center px-4  '>
                <DialogHeader className=' text-[36px] text-white leading-[4rem] w-auto'>{popupContent.title}</DialogHeader>

                <svg onClick={handleOpen} className='' width="40" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="5.06828" height="92.6265" transform="matrix(0.697572 -0.716514 0.697572 0.716514 0 3.63184)" fill="#FFFFFF" />
                  <rect width="5.06828" height="92.6265" transform="matrix(-0.697572 -0.716514 0.697572 -0.716514 5.38672 70)" fill="#FFFFFF" />
                </svg>

              </div>
            {/* <img loading='lazy' role="presentation" decoding='async' fetchpriority='high' className='lg:h-[80vh] lg:w-[50%] w-full h-[30vh]' src={Spectr} alt="Portfolio" /> */}
            {/* <img loading='lazy' role="presentation" decoding='async' fetchpriority='high' className='lg:h-[80vh] lg:w-[50%] w-full h-[30vh]' src="https://i.ibb.co/Vw2R9N6/photo-2024-04-02-16-37-53.jpg" alt="Portfolio" /> */}

            <DialogBody className=" lg:h-full h-fit">
              <div className='lg:flex justify-between items-center hidden px-4 '>
                <DialogHeader className=' 2xl:text-[70px] text-white text-[50px] leading-[4rem] w-auto'>{popupContent.title}</DialogHeader>

                <svg onClick={handleOpen} className=' 2xl:w-[4rem] w-[2rem] 2xl:h-[4rem] h-[2rem]'  viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="5.06828" height="92.6265" transform="matrix(0.697572 -0.716514 0.697572 0.716514 0 3.63184)" fill="#FFFFFF" />
                  <rect width="5.06828" height="92.6265" transform="matrix(-0.697572 -0.716514 0.697572 -0.716514 5.38672 70)" fill="#FFFFFF" />
                </svg>

              </div>
              <Typography className="font-normal px-4 lg:mt-11 text-white">
                {popupContent.description}
              </Typography>
              <DialogFooter className="space-x-2">
                {/* <Button variant="text" color="blue-gray" className='text-white' onClick={handleOpen}>
                  cancel
                </Button> */}

              </DialogFooter>
            </DialogBody>


          </>
        )}
      </Dialog>

    </>
  );
};

export default ButtonModal;
