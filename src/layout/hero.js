// Hero.js
import React from 'react';
import heroImage from '../images/hero.png'; 
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_image">
        <img src={heroImage} alt="Tenis de Mesa" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;