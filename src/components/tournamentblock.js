import React from 'react';
import '../style/tournamentBlock.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMapMarkerAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const TournamentBlock = ({ tournament }) => {
  const { date, day, startTime, location, text, aperturaDeInscripcion, cierreDeInscripcion } = tournament;
  const tournamentDate = new Date(date.split('/').reverse().join('-'));
  const today = new Date();
  const isPast = tournamentDate < today;

  return (
    <div className="tournament-block">
      <div className="tournament-icon">
        <FontAwesomeIcon icon={faCalendarAlt} />
        <span>{date}</span>
      </div>
      <div className="tournament-icon">
        <FontAwesomeIcon icon={faClock} />
        <span>{day}, {startTime}</span>
      </div>
      <div className="tournament-icon">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <span>{location}</span>
      </div>
      <div className="tournament-text">
        <p>{text}</p>
      </div>
      {aperturaDeInscripcion && (
        <div className="tournament-inscription">
          <p><strong>Apertura de Inscripción:</strong> {aperturaDeInscripcion}</p>
        </div>
      )}
      {cierreDeInscripcion && (
        <div className="tournament-inscription">
          <p><strong>Cierre de Inscripción:</strong> {cierreDeInscripcion}</p>
        </div>
      )}
      {isPast && (
        <div className="tournament-finalizado">
          <FontAwesomeIcon icon={faTimesCircle} className="finalizado-icon" />
          <span>Finalizado</span>
        </div>
      )}
    </div>
  );
}

export default TournamentBlock;
