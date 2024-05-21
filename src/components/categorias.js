// Categoria.js
import React from 'react';
import '../style/categorias.css'; 

const Categoria = () => {
  return (
    <section className="categorias" id="categorias">
      <h1>Categorias</h1>
      <div className="container">
        <div className="categorias__cont">
            <div className="categoria-card">
                <h2>Principiante</h2>
                <p>Los jugadores de esta división, mayoritariamente son jugadores que comienzan a realizar sus primeras experiencias en torneos. en su mayoría son jugadores quejuegan en fora recreativa, no suelen practicar en clubes, juegan en forma intuitiv.</p>
            </div>
            <div className="categoria-card">
                <h2>Intermedio</h2>
                <p>Son jugadores con poca experiencia y algunos comienzan a mostrar técnicas aprendidas tomando clases en clubes. algunos ya utilizan materiales de competicion y cuentan con mayor experiencia competiendo.</p>
            </div>
            <div className="categoria-card">
                <h2>Avanzado</h2>
                <p>Son jugadores que muestran un dominio más amplio de técnicas, tácticas y estrategias de juego. En su mayoría practican regularmente en clubes y muestran progresos en el dominio de técnicas mas avanzadas de juego, como la realización de topspins y otros efectos, tanto de drive como de revés.</p>
            </div>
            <div className="categoria-card">
                <h2>Primera</h2>
                <p>Son jugadores altamente experimentados que entrenan en clubes o por su cuenta, pero con alta exigencia. Utilizan gomas y maderas de competición y poseen amplios conocimientos sobre técnicas y tácticas de juego</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Categoria;
