import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation,  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailWorks from './pages/DetailWorks';
import Blog from './pages/Blog';
import Web from './pages/services/Web';
import Branding from './pages/services/Branding';

import TestPage from './pages/TestPage';
import { useTransition, animated } from 'react-spring';
import Marketing from './pages/services/Marketing';
import Smm from './pages/services/Smm';
import Production from './pages/services/Production';
import Contact from './pages/Contact';


function App() {

//   useEffect(() => {
//     fetch('https://ahad.spectragency.uz/')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }, []); 


  return (
    <div className=''>
  
        
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/works" element={<DetailWorks />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/services/web" element={<Web />} />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/services/marketing" element={<Marketing/>} />
            <Route path='/services/smm' element={<Smm/>} />
            <Route path='/services/production' element={<Production/>}/>
          </Routes>
          
  
    </div>
  );
}

export default App;
