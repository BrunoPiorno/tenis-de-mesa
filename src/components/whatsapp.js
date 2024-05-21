import React from 'react';
import '../style/whatsapp.css';
import whatsapp from '../images/whatsapp.png'; 

const WhatsappIcon = () => {
  const whatsappNumber = '+542392484143';
  
  return (
    <a href={`https://wa.me/${whatsappNumber}`} className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
      <img src={whatsapp} alt="Whatsapp" className="whatsapp" /> 
    </a>
  );
}

export default WhatsappIcon;