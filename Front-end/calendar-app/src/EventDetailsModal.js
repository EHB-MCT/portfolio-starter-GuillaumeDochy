import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const EventDetailsModal = ({ isOpen, onRequestClose, event, onAddEvent }) => {
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    priority: 'low',
    start: null,
    end: null,
  });

  useEffect(() => {
    if (event) {
      setNewEvent({
        title: event.title || '',
        description: event.description || '',
        priority: event.priority || 'low',
        start: event.start || null,
        end: event.end || null,
      });
    }
  }, [event]);

  const handleSaveEvent = () => {
    onAddEvent({
      title: newEvent.title,
      description: newEvent.description,
      start: newEvent.start,
      end: newEvent.end,
      priority: newEvent.priority,
    });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
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
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <DatePicker
          selected={newEvent.start ? new Date(newEvent.start) : null}
          onChange={(date) => setNewEvent({ ...newEvent, start: date })}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Start Date and Time"
        />
        <DatePicker
          selected={newEvent.end ? new Date(newEvent.end) : null}
          onChange={(date) => setNewEvent({ ...newEvent, end: date })}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="End Date and Time"
        />
        <select
          value={newEvent.priority}
          onChange={(e) => setNewEvent({ ...newEvent, priority: e.target.value })}
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
