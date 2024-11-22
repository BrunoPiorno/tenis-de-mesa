import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faMapMarkerAlt, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "../style/tournamentBlock.css";  // Importación correcta del archivo CSS

const TournamentBlock = ({ tournament }) => {
  const { date, day, startTime, location, text, aperturaDeInscripcion, cierreDeInscripcion } = tournament;

  // Convertir fecha para comparar con el día actual
  const tournamentDate = new Date(date.split("/").reverse().join("-"));
  const today = new Date();
  const isPast = tournamentDate < today;

  return (
    <div className={`tournamentBlock ${isPast ? "finished" : ""}`}>
      <div className="iconRow">
        <FontAwesomeIcon icon={faCalendarAlt} />
        <span>{date}</span>
      </div>
      <div className="iconRow">
        <FontAwesomeIcon icon={faClock} />
        <span>
          {day}, {startTime}
        </span>
      </div>
      <div className="iconRow">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <span>{location}</span>
      </div>
      <div className="description">
        <p>{text}</p>
      </div>
      {aperturaDeInscripcion && (
        <div className="inscriptionDetails">
          <p>
            <strong>Apertura de Inscripción:</strong> {aperturaDeInscripcion}
          </p>
        </div>
      )}
      {cierreDeInscripcion && (
        <div className="inscriptionDetails">
          <p>
            <strong>Cierre de Inscripción:</strong> {cierreDeInscripcion}
          </p>
        </div>
      )}
      {isPast && (
        <div className="finishedTag">
          <FontAwesomeIcon icon={faTimesCircle} />
          <span>Finalizado</span>
        </div>
      )}
    </div>
  );
};

export default TournamentBlock;
