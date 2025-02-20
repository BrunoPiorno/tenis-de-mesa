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
                <h2>Menores</h2>
                <p>Son jugadores hasta 15 años. El énfasis en la diversión es crucial, ya que ayuda a cultivar su amor por el deporte desde una edad temprana.</p>
                </div>
            <div className="categoria-card">
                <h2>Cuarta</h2>
                <p>Los jugadores de esta división son, en su mayoría, aquellos que comienzan a tener sus primeras experiencias en torneos. Generalmente, se trata de deportistas que juegan de manera recreativa, no suelen practicar en clubes, juegan de forma intuitiva y no utilizan materiales de competición.</p>
            </div>
            <div className="categoria-card">
                <h2>Tercera</h2>
                <p>Son jugadores con poca experiencia, aunque algunos comienzan a mostrar técnicas aprendidas en clases en clubes. Algunos ya utilizan materiales de competición y tienen más experiencia en competencias.</p>
            </div>
            <div className="categoria-card">
                <h2>Segunda</h2>
                <p>Son jugadores que demuestran un dominio más amplio de técnicas, tácticas y estrategias de juego. En su mayoría, practican regularmente en clubes y han mostrado progresos en el dominio de técnicas más avanzadas, como la ejecución de topspins y otros efectos.</p>
            </div>
            <div className="categoria-card">
                <h2>Primera</h2>
                <p>Son jugadores altamente experimentados que entrenan en clubes o de manera autónoma, siempre con un alto nivel de exigencia. Poseen amplios conocimientos sobre técnicas y tácticas de juego.</p>
            </div>
            
        </div>
      </div>
    </section>
  );
}

export default Categoria;
