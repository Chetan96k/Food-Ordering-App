import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log("User typed:", e.target.value); // For testing
  };

  return (
    <input
      className="search"
      type="text"
      placeholder="Search Food"
      value={query}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
