import React from 'react';
import './whatsapp.css';
import whatsapp from '../images/whatsapp.png'; 

const WhatsappIcon = () => {
  const whatsappNumber = '+542392460230'; 
  
  return (
    <a href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`} className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
      <img src={whatsapp} alt="Whatsapp" className="whatsapp" /> 
    </a>
  );
}

export default WhatsappIcon;
