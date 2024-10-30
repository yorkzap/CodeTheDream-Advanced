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
    // Get first hour temp
    const temp = data.hourly.temperature_2m[0];  
    displayTemperature(`Current Temperature: ${temp}°C`);
  } catch (error) {
    displayTemperature('Error fetching temperature data.');
    console.error(error);
  }
}

// Helper funct for displaying temp
function displayTemperature(message) {
    const weatherDiv = document.getElementById('weather-data');  // Select div from HTML
    weatherDiv.innerText = message;  // Set the inner text with the message
  }