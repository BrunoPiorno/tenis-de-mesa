import React from 'react';
import heroImage from '../images/hero.jpg';
import heroMobileImage from '../images/hero-mobile.jpg';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_image">
        <picture>
          <source srcSet={heroMobileImage} media="(max-width: 768px)" />
          <img src={heroImage} alt="Tenis de Mesa" className="hero-image" />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
