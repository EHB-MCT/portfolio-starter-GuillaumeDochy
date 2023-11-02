import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import AddEventForm from './AddEventForm';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events, onAddEvent }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleAddEvent = (newEvent) => {
    onAddEvent(newEvent);
    setIsModalOpen(false);
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
      />

      {isModalOpen && (
        <div className="event-modal-overlay">
          <div className="event-modal">
            <AddEventForm
              selectedDate={selectedDate}
              onAddEvent={handleAddEvent}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
