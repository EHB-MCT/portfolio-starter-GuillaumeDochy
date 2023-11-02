import React, { useState } from 'react';

function EventForm({ onAddEvent }) {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    start: '',
    end: '',
    priority: 'medium',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventDataJSON = JSON.stringify(eventData);
    onAddEvent(eventDataJSON);
    setEventData({
      title: '',
      description: '',
      start: '',
      end: '',
      priority: 'medium',
    });
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Start Date and Time:
          <input
            type="datetime-local"
            name="start"
            value={eventData.start}
            onChange={handleInputChange}
          />
        </label>
        <label>
          End Date and Time:
          <input
            type="datetime-local"
            name="end"
            value={eventData.end}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Priority:
          <select name="priority" value={eventData.priority} onChange={handleInputChange}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default EventForm;
