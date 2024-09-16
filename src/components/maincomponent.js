// MainComponent.js
import React from 'react';
import TournamentBlock from './tournamentblock';

const MainComponent = () => {
  const upcomingTournaments = [
    {
      date: '1/06/2024',
      day: 'Sábado',
      startTime: '10:30 AM',
      location: 'Sede Barrio Alegre',
      text: 'TORNEO TENIS DE MESA, "Francisco “TITI” D’Ambruoso" con servicio de cantina'
    },
    {
      date: '10/08/2024',
      day: 'Sábado',
      startTime: '9:30 AM',
      location: 'Sede Barrio Alegre',
      text: 'COPA INVIERNO 2024, con servicio de cantina',
      aperturaDeInscripcion: '25/07',
      cierreDeInscripcion: '09/08 - 12:00 AM'
    },
    {
      date: '28/09/2024',
      day: 'Sábado',
      startTime: '10 AM',
      location: 'Sede Barrio Alegre',
      text: '4° TORNEO DE TENIS DE MESA, con servicio de cantina',
      aperturaDeInscripcion: '16/09',
      cierreDeInscripcion: '27/09 - 12:00 AM'
    },
  ];

  return (
    <section className="torneos" id="torneos">
        <div className="container">
            <h2>Torneos Próximos</h2>
            <div className="tournament-grid">
                {upcomingTournaments.map((tournament, index) => (
                <TournamentBlock key={index} tournament={tournament} />
                ))}
            </div>
        </div>
    </section>
  );
}

export default MainComponent;
