import React, { useState } from "react";

const SearchBar = ({ query, setQuery, onSearch }) => {

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search">
      <input
        className="search-bar"
        type="text"
        placeholder="Search Food"
        value={query}
        onChange={handleChange}
      />
      <button className="search-btn" onClick={onSearch}>Find</button>
    </div>
  );
};

export default SearchBar;
