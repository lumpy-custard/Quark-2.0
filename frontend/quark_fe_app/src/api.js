// src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/'; // Django API endpoint

export const getItems = async () => {
  try {
    const response = await axios.get(`${API_URL}items/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};