import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="text-center mt-16">
      <h2 className="text-4xl font-bold text-pink-300 drop-shadow-lg">
        Welcome to Handicrafts World
      </h2>
      <p className="text-gray-300 mt-3">
        Discover art, culture, and handmade creativity crafted with love 💕
      </p>
      <SearchBar onSearch={setSearch} />

      {search && (
        <p className="mt-4 text-pink-300 font-semibold">
          Showing results for: <b>{search}</b>
        </p>
      )}

      <div className="grid grid-cols-3 gap-6 mt-10 mx-10">
        <div className="card">🧶 Handmade Bags</div>
        <div className="card">🎨 Painted Pots</div>
        <div className="card">💍 Jewelry Designs</div>
      </div>
    </div>
  );
};

export default Home;
