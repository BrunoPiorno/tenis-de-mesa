import React from 'react';

const GoogleForm = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd7Zntq38fiEb2t3F2Oplx9FE2o_EVTOYYbPRR3mPJ3wv_AwA/viewform?embedded=true";
  
  return (
    <section id="inscripcion">
        <div className="google-form">
            <div className="container">
                <h2>Formulario De Preinscripción</h2>
                <iframe
                  src={formUrl}
                  width="640"
                  height="1291"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                >
                  Cargando…
                </iframe>
            </div>
        </div>
    </section>
  );
}

export default GoogleForm;
