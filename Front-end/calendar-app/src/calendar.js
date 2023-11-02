import React from 'react';
import Calendar from 'react-calendar';

function CalendarComponent({ events, selectedDate }) {
  // Customize the rendering of the calendar to show events based on date
  const eventDates = events.map((event) => new Date(event.date));

  return (
    <div>
      <Calendar
        value={selectedDate}
        tileContent={({ date, view }) => {
          if (view === 'month' && eventDates.includes(date)) {
            // Determine priority and set appropriate CSS class
            const event = events.find((e) => e.date === date);
            const priorityClass = `event-priority-${event.priority}`;
            return <div className={priorityClass}></div>;
          }
        }}
      />
    </div>
  );
}

export default CalendarComponent;