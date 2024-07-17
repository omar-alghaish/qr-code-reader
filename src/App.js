import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (location) => {
    const URL = `https://geocoding-api.open-meteo.com/v1/search?name=${location}`;

    try {
      const geoResponse = await axios.get(URL);
      const { latitude, longitude } = geoResponse.data.results[0];

      const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
      const weatherResponse = await axios.get(weatherURL);
      const weather = weatherResponse.data.current_weather;

      setWeatherData({
        name: location,
        temperature_2m: weather.temperature,
        weather: {
          description: weather.weathercode
        }
      });
      setError(null);
    } catch (err) {
      setError('Could not fetch weather data');
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherForm onSearch={handleSearch} />
      {error && <p>{error}</p>}
      <Weather weatherData={weatherData} />
    </div>
  );
};

export default App;
