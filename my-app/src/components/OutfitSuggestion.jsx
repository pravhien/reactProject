import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { getOutfitSuggestion } from "../utils/outfitLogic";

export default function OutfitSuggestion() {
  const { state } = useContext(WeatherContext);
  const { weather } = state;

  if (!weather) return null;

  const suggestion = getOutfitSuggestion({
    temp: weather.main.temp,
    condition: weather.weather[0].main.toLowerCase(),
  });

  return (
    <div className="bg-yellow-100 p-3 rounded shadow-md mb-4">
      <p className="font-semibold">Outfit Suggestion: {suggestion}</p>
    </div>
  );
}
