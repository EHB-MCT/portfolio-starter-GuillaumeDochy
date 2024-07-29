import React from 'react';
import './styles.css';

function EventListModal({ events, onClose }) {
  const sortedEvents = [...events].sort((a, b) => new Date(a.start) - new Date(b.end));

  return (
    <div className="modal visible">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>All Events</h2>
        <ul className="event-list">
          {sortedEvents.map((event, index) => (
            <li key={index} className={`event-item event-priority-${event.priority}`}>
              <h3>{event.title}</h3>
              <p>{new Date(event.start).toLocaleDateString()}</p>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventListModal;