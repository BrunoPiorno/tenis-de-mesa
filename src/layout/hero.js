// Hero.js
import React from 'react';
import pingpongImage from '../images/test.png'; 
import mobile from '../images/mobile.jpeg'; 
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_image">
        <img src={pingpongImage} alt="Imagen de Hero" className="hero-image desktop" /> 
        <img src={mobile} alt="Imagen de Hero" className="hero-image mobile" /> 
      </div>
    </section>
  );
}

export default Hero;