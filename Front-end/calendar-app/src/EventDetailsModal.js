import React, { useState } from 'react';
import Modal from 'react-modal';

const EventDetailsModal = ({ isOpen, onRequestClose, event, onAddEvent }) => {
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    priority: 'low',
  });

  const handleSaveEvent = () => {
    onAddEvent({
      title: newEvent.title,
      description: newEvent.description,
      start: event ? event.start : null,
      end: event ? event.end : null,
      priority: newEvent.priority,
    });
  };

  return (
    <Modal>
      <h2>Event Details</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
        />
        <select
          value={newEvent.priority}
          onChange={(e) =>
            setNewEvent({ ...newEvent, priority: e.target.value })
          }
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={handleSaveEvent}>Save Event</button>
      </div>
    </Modal>
  );
};

export default EventDetailsModal;
