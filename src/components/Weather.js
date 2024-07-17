import React from 'react';

const Weather = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div>
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.temperature_2m}°C</p>
      <p>Conditions: {weatherData.weather.description}</p>
    </div>
  );
};

export default Weather;
