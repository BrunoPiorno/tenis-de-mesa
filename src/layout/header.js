import React, { useState, useEffect } from 'react';
import './header.css'; 
import logo from '../images/logo-posta.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import WhatsApp from '../components/whatsapp'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll vertical es mayor a 50px, activa la clase "scrolled"
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header__cont">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <div className="container">
              <ul className="menu" onClick={closeMenu}>
                <li><a href="#categorias" className="menu-link">Categorias</a></li>
                <li><a href="#sponsors" className="menu-link">Sponsors</a></li>
                {/* <li><a href="#calendar" className="menu-link">Calendario</a></li> */}
                <li><a href="#inscripcion" className="menu-link">Preinscripción</a></li>
                <li><a href="#torneos" className="menu-link">Torneos</a></li>
                <a className="ranking-button" href="https://trenquetdmranking.com.ar/" target="_blank" rel="noopener noreferrer">Ranking</a>
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
