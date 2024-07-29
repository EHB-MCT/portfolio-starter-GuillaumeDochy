import React, { useState, useEffect } from 'react';
import MyCalendar from './MyCalendar';
import { fetchEvents, createEvent } from './api';
import EventDetailsModal from './EventDetailsModal';
import EventListModal from './EventListModal';
import './styles.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [isEventDetailsModalOpen, setIsEventDetailsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isAddEventModalOpen, setAddEventModalOpen] = useState(false);
  const [isEventListModalOpen, setEventListModalOpen] = useState(false);

  useEffect(() => {
    fetchEvents()
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  const handleAddEvent = (newEvent) => {
    createEvent(newEvent)
      .then((createdEvent) => {
        setEvents([...events, createdEvent]);
        setIsEventDetailsModalOpen(false);
      })
      .catch((error) => console.error('Error adding event:', error));
  };

  const handleOpenEventList = () => {
    setEventListModalOpen(true);
  };

  const handleCloseEventList = () => {
    setEventListModalOpen(false);
  };

  return (
    <div>
      <MyCalendar
        events={events}
        onAddEvent={handleAddEvent}
        onEventClick={(event) => {
          setSelectedEvent(event);
          setIsEventDetailsModalOpen(true);
        }}
      />

      <button onClick={handleOpenEventList}>Show All Events</button>
      {isEventListModalOpen && <EventListModal events={events} onClose={handleCloseEventList} />}

      {isEventDetailsModalOpen && (
        <EventDetailsModal
          isOpen={isEventDetailsModalOpen}
          onRequestClose={() => setIsEventDetailsModalOpen(false)}
          event={selectedEvent}
          onAddEvent={handleAddEvent}
        />
      )}
    </div>
  );
};

export default App;
