// Categoria.js
import React from 'react';
import './categorias.css'; 

const Categoria = () => {
  return (
    <section className="categorias" id="categorias">
      <h1>Categorias</h1>
      <div className="container">
        <div className="categorias__cont">
            <div className="categoria-card">
                <h2>Principiante</h2>
                <p>Un principiante en el tenis de mesa es aquel que ha jugado muy pocas veces y está comenzando a familiarizarse con el deporte. Están en las etapas iniciales de aprendizaje y pueden estar explorando las reglas básicas y técnicas fundamentales del juego.</p>
            </div>
            <div className="categoria-card">
                <h2>Intermedio</h2>
                <p>Un jugador intermedio en el tenis de mesa es aquel que ha adquirido cierta experiencia y conocimiento sobre el juego. Pueden haber desarrollado habilidades básicas de golpeo, movimiento y estrategia.</p>
            </div>
            <div className="categoria-card">
                <h2>Avanzado</h2>
                <p>Un jugador avanzado en el tenis de mesa es aquel que dedica tiempo y esfuerzo significativos a la práctica y perfeccionamiento del juego. Han alcanzado un nivel de habilidad considerable y pueden participar en competiciones locales o regionales. Los jugadores avanzados están constantemente buscando mejorar su técnica, táctica y condición física para competir al más alto nivel.</p>
            </div>
            <div className="categoria-card">
                <h2>Primera</h2>
                <p>Un jugador de primera en el tenis de mesa es aquel que ha alcanzado un nivel de dominio excepcional en el deporte y compite profesionalmente a nivel nacional o internacional. Han dedicado años de entrenamiento riguroso y competiciones para alcanzar este nivel, y están entre los mejores jugadores en su categoría. Los jugadores de primera son reconocidos por su habilidad técnica, inteligencia táctica y capacidad para enfrentar desafíos competitivos en el más alto nivel.</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Categoria;
