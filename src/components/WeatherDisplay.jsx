import React from "react";
import TemperatureChart from "./TemperatureChart";

export default function WeatherDisplay({ weather }) {

  if (!weather) return null;

  return (
    <div>
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Humidity: {weather.main.humidity}%</p>

      <TemperatureChart temp={weather.main.temp} />
    </div>
  );
}