import { useState, useEffect } from "react";
import { RES_LIST } from "../utils/constants";

const useRestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(RES_LIST);
            const json = await data.json();
            const resList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurants(resList || []);
        } catch (error) {
            console.error("Error fetching restaurant list:", error);
            setRestaurants([]);
        }
    };

    return restaurants;
};

export default useRestaurantList;
