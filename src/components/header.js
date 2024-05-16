import React from 'react';
import './header.css'; 
import logo from '../images/logo-posta.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import WhatsApp from './whatsapp'; 

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo"><img src={logo} alt="Logo"/></div>
        <nav>
          <ul className="menu">
            <li><a href="#categorias" className="menu-link">Categorias</a></li>
            <li><a href="#sponsors" className="menu-link">Sponsors</a></li>
            <li><a href="#inscripcion" className="menu-link">Inscripción</a></li>
          </ul>
          <div className="social-icons">
            <a href="https://www.instagram.com/trenque.tdm/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icon instagram-icon" />
            </a>
            <a href="https://www.facebook.com/trenque.tdm?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="icon facebook-icon" />
            </a>
            <WhatsApp /> 
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
