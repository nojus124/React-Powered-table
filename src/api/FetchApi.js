import { API_ENDPOINT } from '../config/ApiConfig';

export function fetchData(page = 1, size = 10, endpoint = API_ENDPOINT) {
  const url = new URL(endpoint);
  url.searchParams.append('page', page);
  url.searchParams.append('size', size);

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
}