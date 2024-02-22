import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailWorks from './pages/DetailWorks';
import Blog from './pages/Blog';
import Web from './pages/services/Web';
import Branding from './pages/services/Branding';

import TestPage from './pages/TestPage';
import { useTransition, animated } from 'react-spring';
import Marketing from './pages/services/Marketing';
import Smm from './pages/services/Smm';
import { useRef } from 'react';

function App() {
  const scrollContainerRef = useRef(null); 

  const handleWheelScroll = (e) => {
      // Specify the scroll distance for horizontal scrolling
      const scrollDistanceX = 100;

      // Check if scrolling down
      if (e.deltaY > 0) {
          // Scroll to the right by 'scrollDistanceX' pixels
          scrollContainerRef.current.scrollLeft += scrollDistanceX;
      } else if (e.deltaY < 0) {
          scrollContainerRef.current.scrollLeft -= scrollDistanceX;
      }
  };

  useEffect(() => {
    fetch('https://ahad.spectragency.uz/')
    .then(res => res.json())
    .then(data => console.log(data))
}, []); 
  // const location = useLocation();
  // const transitions = useTransition(location, (location) =>  '', {
  //   from: { opacity: 0, transform: 'translateX(100%)' },
  //   enter: { opacity: 1, transform: 'translateX(0%)' },
  //   leave: { opacity: 0, transform: 'translateX(-100%)' },
  // });

  return (
    <div ref={scrollContainerRef} onWheel={handleWheelScroll}>
      {/* {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}> */}
        
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/works" element={<DetailWorks />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/services/web" element={<Web />} />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/services/marketing" element={<Marketing/>} />
            <Route path='/services/smm' element={<Smm/>} />
          </Routes>
          
  
    </div>
  );
}

export default App;
