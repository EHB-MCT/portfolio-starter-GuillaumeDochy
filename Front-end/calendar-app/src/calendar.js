import React, { useState } from 'react';
import Calendar from 'react-calendar';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    console.log('Selected date:', newDate);
    setDate(newDate);
  };

  return (
    <div>
      <h2>Calendar</h2>
      <Calendar value={date} onChange={handleDateChange} />
    </div>
  );
}

export default MyCalendar;