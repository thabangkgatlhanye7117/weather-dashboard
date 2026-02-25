import React, { useState } from "react";
import axios from "axios";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";

export default function App() {

  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    setWeather(response.data);
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
}
