const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, rating, deliveryTime, image } = resData;
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src={image} alt="food"></img>
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{rating} stars</p>
            <p>{deliveryTime} minutes</p>
        </div>
    )
}

export default RestaurantCard;