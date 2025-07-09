export const getOutfitSuggestion = ({ temp, condition }) => {
  if (condition.includes("rain")) return "Take an umbrella!";
  if (temp < 5) return "Wear a heavy jacket.";
  if (temp < 15) return "Wear a light jacket.";
  if (temp > 25 && condition.includes("clear")) return "Sunglasses suggested!";
  return "Dress comfortably.";
};
