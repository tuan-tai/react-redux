import axios from "axios";

const API_ROOT = 'https://jsonplaceholder.typicode.com/';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
export const callApi = (endpoint) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  return axios.get(fullUrl)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    })
};