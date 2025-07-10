import React from "react";
import TournamentBlock from "./tournamentblock";
import RankingSection from "./RankingSection";
import "../style/tournamentBlock.css";
import "../style/common.css";

const MainComponent = () => {
  const upcomingTournaments = [
    {
      date: "15/03/2025",
      day: "Sábado",
      startTime: "9:00 AM",
      location: "Trenque Lauquen",
      text: "Copa Almar, con servicio de cantina",
      aperturaDeInscripcion: "01/03",
      cierreDeInscripcion: "14/03 - 12:00 AM",
    },
    {
      date: "31/05/2025",
      day: "Sábado",
      startTime: "9:00 AM",
      location: "30 De Agosto",
      text: "Torneo Tenis De Mesa en Cuartel de Bomberos",
      aperturaDeInscripcion: "16/05",
      cierreDeInscripcion: "30/05 - 12:00 AM",
    },
    {
      date: "26/07/2025",
      day: "Sábado",
      startTime: "9:00 AM",
      location: "Trenque Lauquen",
      text: "Copa De Invierno, en Barrio Alegre",
      aperturaDeInscripcion: "10/07",
      cierreDeInscripcion: "25/07 - 12:00 AM",
    },
  ];

  return (
    <div className="main-content">
      <section className="tournamentSection section-padding" id="torneos">
        <div className="section-container">
          <h2 className="section-title">Torneos 2025</h2>
          <div className="grid">
            {upcomingTournaments.map((tournament, index) => (
              <TournamentBlock key={index} tournament={tournament} />
            ))}
          </div>
        </div>
      </section>
      <RankingSection />
    </div>
  );
};

export default MainComponent;
 