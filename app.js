// Constants
// Base URL for the weather API
const API_URL = 'https://api.open-meteo.com/v1/forecast';
const LATITUDE = 48.4284;  // Vancouver Island, BC
const LONGITUDE = -123.3656;  

// Fetch temperature data and display it
async function fetchTemperature() {
    const url = `${API_URL}?latitude=${LATITUDE}&longitude=${LONGITUDE}&hourly=temperature_2m`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      // Get first hour temp
      const temp = data.hourly.temperature_2m[0];
      displayData(`Current Temperature: ${temp}°C`);
    } catch (error) {
      displayData('Error fetching temperature.');
      console.error(error);
    }
  }
  
  // Get weather conditions
  async function fetchConditions() {
    const url = `${API_URL}?latitude=${LATITUDE}&longitude=${LONGITUDE}&hourly=weathercode`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const conditionCode = data.hourly.weathercode[0]; 
      const condition = interpretWeatherCode(conditionCode);
      displayData(`Current Condition: ${condition}`);
    } catch (error) {
      displayData('Error fetching condition.');
      console.error(error);
    }
  }
  
  // Helper function to display messages in the #weather-data div
  function displayData(message) {
    const weatherDiv = document.getElementById('weather-data');
    weatherDiv.innerText = message;
  }
  
  // Map weather codes from API to values
  function interpretWeatherCode(code) {
    const codes = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      61: 'Light rain',
      63: 'Moderate rain',
      65: 'Heavy rain'
    };
    return codes[code] || 'Unknown condition: The program is a bit under the weather (heh) ';
  }