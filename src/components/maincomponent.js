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
