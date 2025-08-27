import React from 'react';

const GoogleForm = () => {
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSei7g8hdoZSiOsxh4ncM0b1YdTdOKMOeMGNzCl6tJkND8bFUg/viewform?usp=header";
  
  return (
    <section id="inscripcion">
        <div className="google-form">
            <div className="container">
                { <h2>Formulario De Preinscripción</h2>}

                {/* {<h2 style={{ color: "red" }}>Preinscripción Finalizada, Nos vemos el 26/7</h2> } */}
                {<iframe
                  src={formUrl}
                  width="640"
                  height="1291"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                >
                  Cargando…
                </iframe>   }
            </div>
        </div>
    </section>
  );
}

export default GoogleForm;
