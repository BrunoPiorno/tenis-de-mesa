import React from 'react';

const GoogleForm = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf8gZgXVPSdoxvV9VT8S8UpFgf4RlV3TdaqDY7g7p3IxqsJsw/viewform?usp=sf_link";
  
  return (
    <section id="inscripcion">
        <div className="google-form">
            <div className="container">
                <h2>Formulario De Preinscripción</h2>

                {/* { <h2 style={{ color: "red" }}>Preinscripción Finalizada</h2> } */}
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
