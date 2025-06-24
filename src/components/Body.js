import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Body = () => {
    // super powerful local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    // normal JS variable
    // let listOfRestaurantsJS = [
    //     {
    //         "id": 1,
    //         "name": "Spicy Bites",
    //         "cuisines": ["Indian", "Biryani", "Tandoori"],
    //         "rating": 3.9,
    //         "deliveryTime": "30 mins",
    //         "distance": "2.1 km",
    //         "costForTwo": "₹300 for two",
    //         "isVeg": false,
    //         "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJDyOhEO_OnIe_QQ8afV1yhGgbUGidSDQl9g&s"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Green Leaf",
    //         "cuisines": ["South Indian", "Vegan"],
    //         "rating": 4.6,
    //         "deliveryTime": "25 mins",
    //         "distance": "1.5 km",
    //         "costForTwo": "₹250 for two",
    //         "isVeg": true,
    //         "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjX1ZTt8dB3INdkQ_tcY_pge3H1jk-BaNEg&s"
    //     }
    // ];

    return (
        <div className="body">
            <div className="filter">
                <SearchBar />
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (restaurant) => restaurant.rating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}>
                    Top restaurant
                </button>

            </div>
            <div className="restaurant-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;