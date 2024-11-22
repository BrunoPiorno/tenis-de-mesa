import React from "react";
import TournamentBlock from "./tournamentblock";
import "../style/tournamentBlock.css"; 

const MainComponent = () => {
  const upcomingTournaments = [
    {
      date: "1/06/2024",
      day: "Sábado",
      startTime: "10:30 AM",
      location: "Sede Barrio Alegre",
      text: 'TORNEO TENIS DE MESA, "Francisco “TITI” D’Ambruoso" con servicio de cantina',
      aperturaDeInscripcion: "20/05",
      cierreDeInscripcion: "31/05 - 12:00 AM",
    },
    {
      date: "10/08/2024",
      day: "Sábado",
      startTime: "9:30 AM",
      location: "Sede Barrio Alegre",
      text: "COPA INVIERNO 2024, con servicio de cantina",
      aperturaDeInscripcion: "25/07",
      cierreDeInscripcion: "09/08 - 12:00 AM",
    },
    {
      date: "28/09/2024",
      day: "Sábado",
      startTime: "10:00 AM",
      location: "Sede Barrio Alegre",
      text: '4° TORNEO DE TENIS DE MESA, con servicio de cantina',
      aperturaDeInscripcion: "16/09",
      cierreDeInscripcion: "27/09 - 12:00 AM",
    },
    {
      date: "02/11/2024",
      day: "Sábado",
      startTime: "9:45 AM",
      location: "Sede Barrio Alegre",
      text: 'Copa "Naicó", con servicio de cantina',
      aperturaDeInscripcion: "26/10",
      cierreDeInscripcion: "01/11 - 12:00 AM",
    },
    {
      date: "07/12/2024",
      day: "Sábado",
      startTime: "9:45 AM",
      location: "30 de Agosto",
      text: "Torneo Tenis De Mesa en Cuartel de Bomberos",
      aperturaDeInscripcion: "22/11",
      cierreDeInscripcion: "06/12 - 12:00 AM",
    },
  ];

  return (
    <section className="tournamentSection" id="torneos">
      <div className="container">
        <h2 className="title">Torneos Próximos</h2>
        <div className="grid">
          {upcomingTournaments.map((tournament, index) => (
            <TournamentBlock key={index} tournament={tournament} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
