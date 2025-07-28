import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withRatingColor } from "./RestaurantCard";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";
import TopRatedFilter from "./TopRatedFilter";
import useRestaurantList from "../hooks/useRestaurantList";
import useSearchFilter from "../hooks/useSearchFilter";
import useTopRestaurantsFilter from "../hooks/useTopRestaurantsFilter";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const originalList = useRestaurantList();
  const [query, setQuery] = useState("");
  const [showTopRated, setShowTopRated] = useState(false);

  const [filteredList, filterByQuery, resetList] = useSearchFilter(originalList);
  const ColorRatedRestaurantCard = withRatingColor(RestaurantCard);

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
      <div className="flex justify-center items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] text-center px-4">
        <h2 className="text-2xl font-semibold text-gray-700">You are offline</h2>
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-col items-center w-full px-2 sm:px-4 md:px-8">
      {/* Search & Filter Section */}
      <div className="w-full max-w-7xl flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 px-4 py-6">
        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
        <TopRatedFilter showTopRated={showTopRated} setShowTopRated={setShowTopRated} />
      </div>

      {/* Loading State */}
      {finalList.length === 0 ? (
        <div className="w-full max-w-7xl px-4 mt-10">
          <Shimmer />
        </div>
      ) : (
        // Restaurant Cards Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl mt-10 px-2 sm:px-0">
          {finalList.map((restaurant, index) =>
            restaurant.info ? (
              <Link
                to={`/restaurants/${restaurant.info.id}`}
                key={restaurant.info.id || index}
                className="hover:scale-[1.01] transition-transform duration-200"
              >
                <ColorRatedRestaurantCard resData={restaurant.info} />
              </Link>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
