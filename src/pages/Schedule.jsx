import React from 'react';
import '../styles/Schedule.css'; // Asegúrate de que este import esté presente

const scheduleData = [
  {
    day: 'Viernes 18 de Octubre, 2025',
    events: [
      { time: '19:00', artist: 'Apertura de Puertas' },
      { time: '20:30', artist: 'Raly Barrionuevo' },
      { time: '22:00', artist: 'La Sole Pastorutti' },
      { time: '23:45', artist: 'El Chaqueño Palavecino' },
    ],
  },
  {
    day: 'Sábado 19 de Octubre, 2025',
    events: [
      { time: '19:00', artist: 'Apertura de Puertas' },
      { time: '20:30', artist: 'Los Manseros Santiagueños' },
      { time: '22:00', artist: 'Miranda!' },
      { time: '23:45', artist: 'DJ Leo Lencina (Cierre)' },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="schedule-container">
      <h1 className="schedule-title">Cronograma del Evento</h1>

      {scheduleData.map((dayData, index) => (
        <div key={index} className="schedule-day-card">
          <h2 className="schedule-day-title">{dayData.day}</h2>
          <div className="schedule-events-grid">
            {dayData.events.map((event, eventIndex) => (
              <div key={eventIndex} className="schedule-event-item">
                <span className="event-time">{event.time}</span>
                <span className="event-artist">{event.artist}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;