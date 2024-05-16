// Footer.js
import React from 'react';
import './footer.css'; // Importa el archivo de estilos CSS específico para el footer
import logo from '../images/logo-posta.png'; 

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo">
                <img src={logo} alt="Logo" />
                </div>
                <div className="footer-social-icons">
                <a href="https://www.facebook.com/tupagina" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/tupagina" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
