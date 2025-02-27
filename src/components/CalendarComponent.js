import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { 
  format, 
  parse, 
  startOfWeek, 
  getDay, 
  add, 
  setHours, 
  setMinutes, 
  isBefore, 
  isSameDay, 
  isSameMonth 
} from "date-fns";
import esES from "date-fns/locale/es";
import "../style/CalendarComponent.css";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

const locales = {
  es: esES,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Generar eventos especiales para febrero: solo los lunes de 20 a 22 hs.
const generateFebEvents = () => {
  let events = [];
  const year = new Date().getFullYear();
  const startFeb = new Date(year, 1, 1); // Febrero (mes 1)
  const endFeb = new Date(year, 2, 0);    // Último día de febrero
  let currentDate = startFeb;
  while (currentDate <= endFeb) {
    if (getDay(currentDate) === 1) { // 1 = lunes
      let date = new Date(currentDate);
      events.push({
        title: "Juego Libre",
        start: setHours(setMinutes(date, 0), 20),
        end: setHours(setMinutes(date, 0), 22)
      });
    }
    currentDate = add(currentDate, { days: 1 });
  }
  return events;
};

// Generar eventos de entrenamiento a partir del 18 de marzo: solo martes y jueves
// con "Entrenamiento" de 18:00 a 19:00, "Entrenamiento" de 19:00 a 20:00 y "Juego Libre" de 20:00 a 22:00.
const generateTrainingEvents = () => {
  let events = [];
  const year = new Date().getFullYear();
  const startTraining = new Date(year, 2, 18); // 18 de marzo (mes 2)
  // Generamos eventos hasta el final de mayo (3 meses: marzo, abril y mayo)
  const endTraining = new Date(year, 2 + 3, 0); // último día de mayo
  let currentDate = startTraining;
  while (currentDate <= endTraining) {
    // getDay: 0=Domingo, 1=Lunes, 2=Martes, 3=Miércoles, 4=Jueves, etc.
    if (getDay(currentDate) === 2 || getDay(currentDate) === 4) { // 2 = martes, 4 = jueves
      let date = new Date(currentDate);
      events.push(
        { title: "Entrenamiento", start: setHours(setMinutes(date, 0), 18), end: setHours(setMinutes(date, 0), 19) },
        { title: "Entrenamiento", start: setHours(setMinutes(date, 0), 19), end: setHours(setMinutes(date, 0), 20) },
        { title: "Juego Libre", start: setHours(setMinutes(date, 0), 20), end: setHours(setMinutes(date, 0), 22) }
      );
    }
    currentDate = add(currentDate, { days: 1 });
  }
  return events;
};

// Generar el evento del torneo el 15 de marzo
const generateTournamentEvent = () => {
  const year = new Date().getFullYear();
  const tournamentDate = new Date(year, 2, 15); // 15 de marzo (mes 2)
  return [{
    title: "Copa Almar",
    start: setHours(setMinutes(tournamentDate, 0), 9),
    end: setHours(setMinutes(tournamentDate, 0), 18)
  }];
};

const MyCalendar = () => {
  // Combinar eventos de febrero, entrenamientos y torneo
  const events = [
    ...generateFebEvents(),
    ...generateTrainingEvents(),
    ...generateTournamentEvent()
  ];
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [tooltipContent, setTooltipContent] = useState("");

  const getEventsForDate = (date) => {
    return events.filter(event => isSameDay(event.start, date));
  };

  return (
    <div className="calendar" id="calendar">
      <div className="container">
        <h2 className="calendar-title">Calendario de Eventos y Entrenamientos</h2>
        <Calendar
          className="calendar-container"
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          culture="es"
          messages={{
            today: "Hoy",
            previous: "Anterior",
            next: "Siguiente",
            month: "Mes",
            week: "Semana",
            day: "Día",
            agenda: "Agenda",
            noEventsInRange: "No hay eventos en este rango.",
            showMore: (count) => `+${count} más`,
            event: "Evento",
            date: "Fecha",
            time: "Hora",
          }}
          style={{ height: 500 }}
          onSelectEvent={(event) => setHoveredEvent(event)}
          onMouseLeave={() => setTooltipContent("")}
          onMouseOver={({ start }) => {
            const eventsForDate = getEventsForDate(start);
            const formattedEvents = eventsForDate
              .map(event => `${event.title} (${format(event.start, "HH:mm")} - ${format(event.end, "HH:mm")})`)
              .join('\n');
            setTooltipContent(formattedEvents);
          }}
          components={{
            event: ({ event }) => (
              <div
                className="event-item"
                data-tooltip-id="event-tooltip"
                data-tooltip-content={`${event.title} (${format(event.start, "HH:mm")} - ${format(event.end, "HH:mm")})`}
              >
                {event.title}
              </div>
            ),
          }}
        />
        <Tooltip id="event-tooltip" place="top" effect="solid">
          {tooltipContent}
        </Tooltip>
      </div>
    </div>
  );
};

export default MyCalendar;
