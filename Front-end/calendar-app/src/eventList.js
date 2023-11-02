import React, { useState } from 'react';

function EventList({ events }) {
  const [sortedEvents, setSortedEvents] = useState(events);

  const sortEventsByPriority = (priority) => {
    const sorted = events.filter((event) => event.priority === priority);
    setSortedEvents(sorted);
  };

  return (
    <div>
      <h2>Event List</h2>
      <button onClick={() => sortEventsByPriority('low')}>Low Priority</button>
      <button onClick={() => sortEventsByPriority('medium')}>Medium Priority</button>
      <button onClick={() => sortEventsByPriority('high')}>High Priority</button>
      <ul>
        {sortedEvents.map((event) => (
          <li key={event.id}>
            {event.title} - Priority: {event.priority}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;