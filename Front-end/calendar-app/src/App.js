import React, { useState, useEffect } from 'react';
import EventList from './eventList';
import EventForm from './EventForm';
import MyCalendar from './calendar'; 


function App() {
   const [events, setEvents] = useState([]);

   const addEvent = (eventData) => {
    fetch('http://localhost:4000/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    })
      .then((response) => response.json())
      .then((newEvent) => {
        setEvents([...events, newEvent]);
      })
      .catch((error) => {
        console.error('Error creating event:', error);
      });
  };

  return (
    <div>
      <h1>My Calendar App</h1>
      <EventForm onAddEvent={addEvent} />
      <EventList />
      <MyCalendar />
    </div>
  );
}

export default App;