import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import AddEventForm from './AddEventForm';
import EventDetailsModal from './EventDetailsModal';
import { fetchEvents, createEvent } from './api';
import './styles.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEventDetailsModalOpen, setIsEventDetailsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedEvents = await fetchEvents();
      setEvents(fetchedEvents);
    };

    fetchData();
  }, []);

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor:
        event.priority === 'low'
          ? 'green'
          : event.priority === 'medium'
          ? 'orange'
          : 'red',
    };
    return {
      style,
    };
  };

  const handleSelectSlot = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setIsModalOpen(true);
  };

  const handleAddEvent = async (newEvent) => {
    const createdEvent = await createEvent(newEvent);

    setEvents([...events, createdEvent]);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setIsEventDetailsModalOpen(true);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        style={{ height: 500 }}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
      />

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <AddEventForm selectedDate={selectedDate} onAddEvent={handleAddEvent} />
          </div>
        </div>
      )}

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

export default MyCalendar;
