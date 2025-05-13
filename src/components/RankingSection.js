import React from 'react';
import '../style/rankingSection.css';
import '../style/common.css';
import rankingPreview from '../images/ranking-preview.png';

const RankingSection = () => {
  return (
    <section className="rankingSection section-padding" id="ranking">
      <div className="section-container">
        <h2 className="section-title">Ranking Oficial</h2>
        <div className="rankingContent">
          <div className="rankingInfo">
            <h3>Consultá el Ranking Oficial</h3>
            <p>Mantenete al día con las posiciones actualizadas del ranking de tenis de mesa.</p>
            <ul className="rankingFeatures">
              <li>
                <span className="icon">📊</span>
                <span>Ranking actualizado después de cada torneo</span>
              </li>
              <li>
                <span className="icon">🏆</span>
                <span>Seguimiento de puntos y posiciones</span>
              </li>
              <li>
                <span className="icon">📱</span>
                <span>Acceso desde cualquier dispositivo</span>
              </li>
            </ul>
            <a 
              href="https://trenquetdmranking.com.ar/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rankingButton"
            >
              Ver Ranking Completo
            </a>
          </div>
          <div className="rankingImage">
            <img 
              src={rankingPreview}
              alt="Vista previa del ranking"
              className="previewImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingSection;
