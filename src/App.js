import logo from './vi_logo_2.jpeg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUS from './Pages/ContactUS';
import Product from './Pages/Product';
import KnowMore from './Pages/KnowMore';
import Founders from './Pages/Founders'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import ScrollToTop from './Pages/ScrollToTop';

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
      <Router>
        
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="navbar-left">
            <img src={logo} alt="Virtuzen Infotech" className="logo" />
            <span className="brand-name">Virtuzen Infotech</span>
          </div>
          <ul className="navbar-menu">
              <li><Link to="/Home" className="active">Home</Link></li>
              <li><Link to="/About" className="active">About us</Link></li>
              <li><Link to="/Product" className="active">Product & Services</Link></li>
              <li><Link to="/contactUs" className="active"> ContactUS</Link></li>
          </ul>
        </nav>
        <ScrollToTop />
        <Routes className="navbar-menu">
          <Route path='/' className="active" element = {<Home />} />
          <Route path='/home' element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/product' element = {<Product />} />
          <Route path='/contactUS' element = {<ContactUS />} />
          <Route path='/KnowMore' element = {<KnowMore />} />
          <Route path='/Founders' element = {<Founders />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
