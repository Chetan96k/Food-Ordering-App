const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="food"></img>
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p>{sla.deliveryTime} minutes</p>
        </div>
    )
}

export default RestaurantCard;