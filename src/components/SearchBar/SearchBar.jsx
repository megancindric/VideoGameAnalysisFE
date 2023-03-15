import React from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <div className="flex flex-col p-16">
      <label
        for="search"
        className="block text-4xl mb-2 text-violet-800 font-semibold"
      >
        Search Video Games
      </label>
      <input
        type="search"
        id="search"
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-lg text-lg p-2.5 drop-shadow-lg text-violet-800 font-semibold"
      />
    </div>
  );
};

export default SearchBar;
