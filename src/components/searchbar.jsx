import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="🔍 Search beautiful handmade items..."
        className="border border-white/20 bg-white/10 text-white placeholder-gray-400 rounded-l-md p-3 w-1/2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="bg-pink-500 text-white px-4 rounded-r-md hover:bg-pink-600 transition">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
