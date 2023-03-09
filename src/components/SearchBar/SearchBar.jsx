import React from "react";

const SearchBar = ({ setSearch }) => {
  return <input type="search" onChange={(e) => setSearch(e.target.value)} />;
};

export default SearchBar;
