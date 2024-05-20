// Header.js
import React, { useState } from 'react';
import './header.css'; 
import logo from '../images/logo-posta.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import WhatsApp from './whatsapp'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__cont">
          <div className="logo"><img src={logo} alt="Logo" /></div>
          <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <div className="container">
              <ul className="menu">
                <li><a href="#categorias" className="menu-link">Categorias</a></li>
                <li><a href="#sponsors" className="menu-link">Sponsors</a></li>
                <li><a href="#inscripcion" className="menu-link">Preinscripción</a></li>
              </ul>
              <div className="social-icons">
                <a href="https://www.instagram.com/trenque.tdm/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="icon instagram-icon" />
                </a>
                <a href="https://www.facebook.com/trenque.tdm?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="icon facebook-icon" />
                </a>
              </div>
            </div>
          </nav>
          <WhatsApp /> 
        </div>
      </div>
    </header>
  );
}

export default Header;
