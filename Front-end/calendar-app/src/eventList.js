import React, { useEffect, useState } from 'react';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
