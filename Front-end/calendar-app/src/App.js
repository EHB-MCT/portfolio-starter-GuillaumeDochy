import React, { useState, useEffect } from 'react';
import MyCalendar from './MyCalendar';
import { fetchEvents, createEvent } from './api';

const App = () => {
  const [events, setEvents] = useState([]);
  const [isEventFormOpen, setIsEventFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents()
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  const handleAddEvent = (newEvent) => {
    createEvent(newEvent)
      .then((createdEvent) => {
        setEvents([...events, createdEvent]);
        setIsEventFormOpen(false);
      })
      .catch((error) => console.error('Error adding event:', error));
  };

  return (
    <div>
      <MyCalendar
        events={events}
        onAddEvent={() => setIsEventFormOpen(true)}
        onEventClick={(event) => setSelectedEvent(event)}
      />

      {isEventFormOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsEventFormOpen(false)}>
              &times;
            </span>
            <h2>Add Event</h2>
            {/* Add your event creation form here */}
          </div>
        </div>
      )}

      {selectedEvent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedEvent(null)}>
              &times;
            </span>
            <h2>Event Details</h2>
            <p><strong>Title:</strong> {selectedEvent.title}</p>
            <p><strong>Description:</strong> {selectedEvent.description}</p>
            <p><strong>Start:</strong> {selectedEvent.start.toString()}</p>
            <p><strong>End:</strong> {selectedEvent.end.toString()}</p>
            <p><strong>Priority:</strong> {selectedEvent.priority}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
