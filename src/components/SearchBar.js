const SearchBar = ({ query, setQuery, onSearch }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="mx-1 flex flex-wrap items-center gap-4">
      <input
        type="text"
        placeholder="Search for food or restaurants"
        value={query}
        onChange={handleChange}
        className="w-[280px] sm:w-[300px] px-5 py-2.5 text-sm text-gray-800 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
      />
      <button
        onClick={onSearch}
        className="px-5 py-2.5 bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-800 transition duration-200"
      >
        Find
      </button>
    </div>
  );
};

export default SearchBar;
