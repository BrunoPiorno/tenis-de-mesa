// Footer.js
import React from 'react';
import './footer.css';
import logo from '../images/logo-posta.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo"><img src={logo} alt="Logo" /></div>
                <div className="social-icons">
                    <a href="https://www.instagram.com/trenque.tdm/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="icon instagram-icon" />
                    </a>
                    <a href="https://www.facebook.com/trenque.tdm?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="icon facebook-icon" />
                    </a>
                </div>
            </div>
            <p>Sitio Realizado por <a href="https://brunopiorno.com.ar">brunopiorno.com.ar</a></p>
        </div>
    </footer>
  );
}

export default Footer;
