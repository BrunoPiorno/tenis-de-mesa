import React from 'react';

const GoogleForm = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd7Zntq38fiEb2t3F2Oplx9FE2o_EVTOYYbPRR3mPJ3wv_AwA/viewform?embedded=true";
  
  return (
    <div className="google-form">
        <div className="container">
            <h2>Formulario De Inscripción</h2>
            <iframe src={formUrl} width="640" height="1291" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
        </div>
    </div>
  );
}

export default GoogleForm;