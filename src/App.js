import logo from './vi_logo_2.jpeg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUS from './Pages/ContactUS';
import Product from './Pages/Product';
import KnowMore from './Pages/KnowMore';
import Founders from './Pages/Founders'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (   
    <div className="App">
      <BrowserRouter>
        
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="navbar-left">
            <img src={logo} alt="Virtuzen Infotech" className="logo" />
            <span className="brand-name">Virtuzen Infotech</span>
          </div>
          <ul className="navbar-menu">
              <li><a href="Home" className="active">Home</a></li>
              <li><a href="About" className="active">About us</a></li>
              <li><a href="Product" className="active">Product & Services</a></li>
              <li><a href="contactUs" className="active"> ContactUS</a></li>
          </ul>
        </nav>
        
        <Routes className="navbar-menu">
          <Route path='/' className="active" element = {<Home />} />
          <Route path='/home' element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/product' element = {<Product />} />
          <Route path='/contactUS' element = {<ContactUS />} />
          <Route path='/KnowMore' element = {<KnowMore />} />
          <Route path='/Founders' element = {<Founders />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
