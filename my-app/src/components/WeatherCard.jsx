import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function WeatherCard() {
  const { state } = useContext(WeatherContext);
  const { weather, error } = state;

  if (error) return <p className="text-red-600">{error}</p>;
  if (!weather) return null;

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{weather.name}</h2>
      <p>Temp: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].main}</p>
      <p> Wind: {weather.wind.speed} m/s</p>
      <p> Humidity: {weather.main.humidity}%</p>
    </div>
  );
}
