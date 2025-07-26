// src/components/TopRatedFilter.jsx
const TopRatedFilter = ({ showTopRated, setShowTopRated }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="font-medium text-gray-600">Filters:</span>
      <button
        className="px-5 py-2.5 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition duration-200"
        onClick={() => setShowTopRated(!showTopRated)}
      >
        {showTopRated ? "Show All" : "Top Restaurants"}
      </button>
    </div>
  );
};

export default TopRatedFilter;
