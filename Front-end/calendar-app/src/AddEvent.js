import React, { useState } from 'react';

function AddEvent() {
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    priority: 'low',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the newEvent data to your API to create a new event
    // You will need to implement this API call.
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newEvent.title}
          onChange={handleInputChange}
          placeholder="Event title"
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
        />
        <select name="priority" value={newEvent.priority} onChange={handleInputChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;