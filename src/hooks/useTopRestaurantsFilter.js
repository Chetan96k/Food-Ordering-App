const useTopRestaurantsFilter = (restaurantList) => {
    return restaurantList.filter((restaurant) => restaurant.info.avgRating > 4.4);
};

export default useTopRestaurantsFilter;
