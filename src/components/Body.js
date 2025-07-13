import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../hooks/useRestaurantList";
import useSearchFilter from "../hooks/useSearchFilter";
import useTopRestaurantsFilter from "../hooks/useTopRestaurantsFilter";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const originalList = useRestaurantList();
  const [query, setQuery] = useState("");
  const [showTopRated, setShowTopRated] = useState(false);

  const [filteredList, filterByQuery, resetList] = useSearchFilter(originalList);

  useEffect(() => {
    resetList();
  }, [originalList]);

  const handleSearch = () => {
    filterByQuery(query);
    setShowTopRated(false);
  };

  const finalList = showTopRated
    ? useTopRestaurantsFilter(filteredList)
    : filteredList;

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold text-gray-700">You are offline</h2>
      </div>
    );
  }

  return finalList.length === 0 ? (
    <div className="mt-6 flex flex-col items-center w-full">
      {/* Search & Filter Section */}
      <div className="w-full max-w-7xl flex flex-wrap justify-evenly items-center gap-6 px-4 py-6 bg-white">
        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
        <div className="flex items-center gap-4">
          <span className="font-medium text-gray-600">Filters:</span>
          <button
            className="px-5 py-2.5 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition duration-200"
            onClick={() => setShowTopRated(!showTopRated)}
          >
            {showTopRated ? "Show All" : "Top Restaurants"}
          </button>
        </div>

      </div>

      {/* Shimmer Placeholder */}
      <div className="w-full max-w-7xl px-4 mt-10">
        <Shimmer />
      </div>
    </div>
  ) : (
    <div className="mt-6 flex flex-col items-center w-full">
      {/* Search & Filter Section */}
      <div className="w-full max-w-7xl flex flex-wrap justify-evenly items-center gap-6 px-4 py-6 bg-white">
        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
        <div className="flex items-center gap-4">
          <span className="font-medium text-gray-600">Filters:</span>
          <button
            className="px-5 py-2.5 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition duration-200"
            onClick={() => setShowTopRated(!showTopRated)}
          >
            {showTopRated ? "Show All" : "Top Restaurants"}
          </button>
        </div>

      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl  mt-10">
        {finalList.map((restaurant, index) =>
          restaurant.info ? (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id || index}
              className="hover:scale-[1.0] transition-transform duration-200"
            >
              <RestaurantCard resData={restaurant.info} />
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Body;
