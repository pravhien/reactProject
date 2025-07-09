import React, { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

export default function SearchBar() {
  const [city, setCity] = useState("");
  const { dispatch } = useContext(WeatherContext);

  const fetchWeather = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) {
        const text = await res.text();
        console.error("API Error Response:", text);
        throw new Error("City not found");
      }
      const data = await res.json();
      dispatch({ type: "SET_WEATHER", payload: { city: cityName, data } });
    } catch (err) {
      console.error("Fetch Error:", err.message);
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city.trim());
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-grow p-2 rounded-l-md"
        placeholder="Enter city name..."
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
        Search
      </button>
    </form>
  );
}
