
import './App.css';

import HomePage from './pages/HomePage';
import DetailWorks from './pages/DetailWorks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Web from './pages/services/Web';
import Branding from './pages/services/Branding';
import Presentation from './pages/services/Presentation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<App />}/>
        <Route index element={<HomePage />} />
        <Route path="/works" element={<DetailWorks />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/services/web" element={<Web/>}/>
        <Route path="/services/branding" element={<Branding/>}/>
        <Route path="/services/presentation" element={<Presentation/>}/>
      </Routes>
      
      </BrowserRouter>

  );
}

export default App;
