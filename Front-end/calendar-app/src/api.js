import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export const fetchEvents = async () => {
  const response = await axios.get(`${API_URL}/events`);
  return response.data;
};

export const createEvent = async (event) => {
  const response = await axios.post(`${API_URL}/events`, event);
  return response.data;
};