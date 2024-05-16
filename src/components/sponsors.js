// SponsorsGrid.js
import React from 'react';
import './sponsors.css'; // Importa el archivo de estilos CSS específico para la grilla de sponsors

import logo1 from '../images/logo-1.png';
import logo2 from '../images/logo-2.png';
import logo3 from '../images/logo-3.png';
import logo4 from '../images/logo-4.png';
import logo6 from '../images/logo-6.jpeg';
import logo7 from '../images/logo-7.jpeg';
import logo8 from '../images/logo-8.jpeg';
import logo9 from '../images/logo-9.jpeg';
import logo10 from '../images/logo-10.jpeg';
import logo11 from '../images/logo-11.jpeg';
import logo12 from '../images/logo-12.jpeg';
import logo13 from '../images/logo-13.jpeg';

const sponsorImages = [logo1, logo2, logo3, logo4, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13];

const SponsorsGrid = () => {
  return (
    <section className="sponsors-grid">
      <div className="container">
        <h1>Nuestros Sponsors</h1>
        <div className="sponsors-grid__content">
          {sponsorImages.map((sponsor, index) => (
            <div key={index} className="sponsor-container">
              <img src={sponsor} alt={`Logo de sponsor ${index + 1}`} className="sponsor-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsorsGrid;
