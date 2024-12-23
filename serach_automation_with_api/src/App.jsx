import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import SuggestionList from "./components/SuggestionList";

const App = () => {
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (query) => {
    try {
      const res = await axios.get(
        `https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&limit=10&format=json&origin=*`
      );
      setSuggestions(res.data[1]); // Wikipedia API returns suggestions in the second element of the response
    } catch (error) {
      console.error("Error fetching data from API", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Search Auto-Complete</h1>
      <SearchBar onSearch={handleSearch} />
      {suggestions.length > 0 && <SuggestionList suggestions={suggestions} />}
    </div>
  );
};

export default App;
