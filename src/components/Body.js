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
        // Reset list if new data is fetched
        resetList();
    }, [originalList]);

    const handleSearch = () => {
        filterByQuery(query);
        setShowTopRated(false); // Optional: reset top filter on new search
    };

    const finalList = showTopRated ? useTopRestaurantsFilter(filteredList) : filteredList;

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return (<div className="body"><h2>You are offline</h2></div>);
    }

    return finalList.length === 0 ? (
        <div className="body">
            <div className="filter">
                <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
                <p>Filters :</p>
                <button
                    className="filter-btn"
                    onClick={() => setShowTopRated(!showTopRated)}
                >
                    {showTopRated ? "Show All" : "Top Restaurants"}
                </button>
            </div>
            <Shimmer />
        </div>
    ) : (
        <div className="body">
            <div className="filter">
                <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
                <p>Filters :</p>
                <button
                    className="filter-btn"
                    onClick={() => setShowTopRated(!showTopRated)}
                >
                    {showTopRated ? "Show All" : "Top Restaurants"}
                </button>
            </div>
            <div className="restaurant-container">
                {finalList.map((restaurant, index) =>
                    restaurant.info ? (
                        <Link
                            to={`/restaurants/${restaurant.info.id}`}
                            key={restaurant.info.id || index}
                            style={{ textDecoration: "none", color: "inherit" }}
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
