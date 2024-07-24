// SponsorsGrid.js
import React from 'react';
import '../style/sponsors.css';

import logo1 from '../images/LOGO-1.svg';
import logo2 from '../images/LOGO-2.svg';
import logo3 from '../images/LOGO-3.svg';
import logo4 from '../images/LOGO-4.svg';
import logo6 from '../images/LOGO-6.jpeg';
import logo7 from '../images/LOGO-7.svg';
import logo8 from '../images/LOGO-8.svg';
import logo9 from '../images/LOGO-9.svg';
import logo10 from '../images/LOGO-10.svg';
import logo11 from '../images/LOGO-11.svg';
import logo12 from '../images/LOGO-12.svg';
import logo13 from '../images/LOGO-13.svg';
import logo14 from '../images/LOGO-14.png';
import logo15 from '../images/LOGO-15.png';

const sponsorImages = [logo1,logo2, logo3, logo4, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13,logo14,logo15];

const SponsorsGrid = () => {
  return (
    <section className="sponsors-grid" id="sponsors">
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
