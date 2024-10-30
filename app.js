// Constants
// Base URL for the weather API
const API_URL = 'https://api.open-meteo.com/v1/forecast';
const LATITUDE = 48.4284;  // Vancouver Island, BC
const LONGITUDE = -123.3656;  

// Fetch temperature data
async function fetchTemperature() {
  const url = `${API_URL}?latitude=${LATITUDE}&longitude=${LONGITUDE}&hourly=temperature_2m`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    // Log temperature
    console.log(`Temperature:`, data.hourly.temperature_2m);
    // Log first value
    console.log(`Current Temperature: ${data.hourly.temperature_2m[0]}°C`);
  } catch (error) {
    console.error('Error fetching temperature:', error);
  }
}

fetchTemperature();