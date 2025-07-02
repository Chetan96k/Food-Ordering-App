import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    // super powerful local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.8496953&lng=74.4976741&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        //optional chaining
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        console.log(restaurants);
        setListOfRestaurants(restaurants);
        setOriginalList(restaurants);
    }

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