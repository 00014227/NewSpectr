import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailWorks from './pages/DetailWorks';
import Blog from './pages/Blog';
import Web from './pages/services/Web';
import Branding from './pages/services/Branding';
import Presentation from './pages/services/Presentation';
import TestPage from './pages/TestPage';
import { useTransition, animated } from 'react-spring';

function App() {
  // const location = useLocation();
  // const transitions = useTransition(location, (location) =>  '', {
  //   from: { opacity: 0, transform: 'translateX(100%)' },
  //   enter: { opacity: 1, transform: 'translateX(0%)' },
  //   leave: { opacity: 0, transform: 'translateX(-100%)' },
  // });

  return (
    <>
      {/* {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}> */}
        
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/works" element={<DetailWorks />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/services/web" element={<Web />} />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/services/presentation" element={<Presentation />} />
          </Routes>
          
  
    </>
  );
}

export default App;
