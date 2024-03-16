import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';



export default function Eye() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
  
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };
  
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const eyeProps = useSpring({
      transform: `translate(${(mousePosition.x - screenSize.width / 2) / (screenSize.width / 30)}px, ${
        (mousePosition.y - screenSize.height / 3) / (screenSize.height / 14 )
      }px)`,
    });
  
    return (
 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="eye" className='lg:w-[600px] lg:h-[500px] w-[200px] lg:block hidden'>
      <path
        d="M50.5 32.3c-16.6 0-32.7 15.9-33.4 16.5-.5.5-.7 1.1-.7 1.7s.3 1.2.7 1.7c.7.7 16.7 16.5 33.4 16.5s32.7-15.9 33.4-16.5c.4-.4.7-1.1.7-1.7s-.3-1.2-.7-1.7c-.7-.7-16.8-16.5-33.4-16.5zm0 31.6c-11.6 0-23.6-9.5-28.1-13.4 4.5-4 16.5-13.4 28.1-13.4s23.6 9.5 28.1 13.4c-4.5 4-16.5 13.4-28.1 13.4z"
        fill="white"
      />
      <animated.path
        style={{ transform: eyeProps.transform }}
        d="M41.9 50.5c0 4.8 3.9 8.6 8.6 8.6s8.6-3.9 8.6-8.6-3.9-8.6-8.6-8.6-8.6 3.8-8.6 8.6zm12.4 0c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8 1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8z"
        fill="white"
      />
    </svg>
   
    );
  };
