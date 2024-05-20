import React from 'react';
import './tournamentBlock.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const TournamentBlock = ({ tournament }) => {
  const { date, day, startTime, location, text } = tournament;

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
    </div>
  );
}

export default TournamentBlock;
