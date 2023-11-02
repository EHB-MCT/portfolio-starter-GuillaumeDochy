import React, { useState, useEffect } from 'react';
import MyCalendar from './MyCalendar';
import AddEventForm from './AddEventForm';
import EventDetailsModal from './EventDetailsModal';
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
        <AddEventForm
          isOpen={isEventFormOpen}
          onRequestClose={() => setIsEventFormOpen(false)}
          onSubmit={handleAddEvent}
        />
      )}

      {selectedEvent && (
        <EventDetailsModal
          isOpen={selectedEvent !== null}
          onRequestClose={() => setSelectedEvent(null)}
          event={selectedEvent}
        />
      )}
    </div>
  );
};

export default App;
