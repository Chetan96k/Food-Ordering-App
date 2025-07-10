import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
    // super powerful local state variable
    const restaurants = useRestaurantList(); // ⬅️ Correct usage of the custom hook
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [query, setQuery] = useState("");

    // When the data is fetched by the hook, set both states
    useEffect(() => {
        setListOfRestaurants(restaurants);
        setOriginalList(restaurants);
    }, [restaurants]);

    const handleSearch = () => {
        const filtered = originalList.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(query.toLowerCase())
        );
        setListOfRestaurants(filtered);
    };

    //conditional rendering via ternary operator
    return listOfRestaurants.length === 0 ? (
        <div className="body">
            <div className="filter">
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    onSearch={handleSearch}
                />
                <p>Filters :</p>
                <button className="filter-btn">
                    Top restaurant
                </button>

            </div>
            <Shimmer />
        </div>
    ) : (
        <div className="body">
            <div className="filter">
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    onSearch={handleSearch}
                />
                <p>Filters :</p>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = originalList.filter(
                            (restaurant) => restaurant.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}>
                    Top restaurant
                </button> 

            </div>
            <div className="restaurant-container">
                {listOfRestaurants.map((restaurant, index) =>
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
    )
}

export default Body;