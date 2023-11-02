import React, { useState } from 'react';
import EventDetailsModal from './EventDetailsModal';
import { createEvent } from './api';

const AddEventForm = ({ onAddEvent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    start: new Date(),
    end: new Date(),
    priority: 'low',
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    onAddEvent(newEvent);
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Add Event</button>
      <EventDetailsModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        event={newEvent}
      />
      <div>
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Event Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        {/* Include inputs for start, end, and priority */}
        <button onClick={handleSubmit}>Save Event</button>
      </div>
    </div>
  );
};

export default AddEventForm;
