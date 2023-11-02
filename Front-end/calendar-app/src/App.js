import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import EventList from './EventList';
import AddEvent from './AddEvent';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // Fetch events from your API and set them in the state
    // You can replace this with your actual API endpoint.
    fetch('your_api_endpoint')
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="App">
      <h1>Calendar App</h1>
      <Calendar events={events} selectedDate={selectedDate} />
      <EventList events={events} />
      <AddEvent />
    </div>
  );
}

export default App;