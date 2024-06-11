// Hero.js
import React from 'react';
import pingpongImage from '../images/pingpong.jpg'; 
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_image">
        <img src={pingpongImage} alt="Imagen de Hero" className="hero-image" /> 
      </div>
      <div className="hero-content">
        <h1 className="hero-title">TENIS DE MESA <br/> TRENQUE LAUQUEN</h1>
        {/* <button><a href="#inscripcion">Preinscripción Al Torneo</a></button> */}
      </div>
    </section>
  );
}

export default Hero;
