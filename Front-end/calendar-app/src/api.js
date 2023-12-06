
const API_BASE_URL = 'http://localhost:4000/api'; 

export const fetchEvents = () => {
  return fetch(`${API_BASE_URL}/events`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error fetching events:', error);
      throw error;
    });
};

export const createEvent = (newEvent) => {
  return fetch(`${API_BASE_URL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEvent),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error creating event:', error);
      throw error;
    });
};
