import React from "react";
import WeatherProvider from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import OutfitSuggestion from "./components/OutfitSuggestion";
import SearchHistory from "./components/SearchHistory";

function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-500 text-gray-800 p-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">Weather Dashboard</h1>
          <SearchBar />
          <WeatherCard />
          <OutfitSuggestion />
          <SearchHistory />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
