import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setProfile(res.data);
      setError(null);
    } catch (err) {
      setError("User not found. Please try again.");
      setProfile(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        GitHub Profile Finder
      </h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-center text-red-500">{error}</p>}
      {profile && <ProfileCard profile={profile} />}
    </div>
  );
};

export default App;
