import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function SearchHistory() {
  const { state, dispatch } = useContext(WeatherContext);
  const { history } = state;

  const fetchFromHistory = async (city) => {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await res.json();
      dispatch({ type: "SET_WEATHER", payload: { city, data } });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: "Error fetching city from history" });
    }
  };

  return (
    <div className="mt-4">
      <h3 className="font-bold mb-2">Recent Searches:</h3>
      <div className="flex flex-wrap gap-2">
        {history.map((city, index) => (
          <button
            key={index}
            onClick={() => fetchFromHistory(city)}
            className="bg-white px-3 py-1 rounded shadow"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
