const RestaurantCard = (props) => {
  const { resData, ratingColor } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId, locality } = resData;

  return (
    <div className="w-full max-w-[300px] mb-1.5 transition-transform duration-100 ease-in hover:scale-[0.97] cursor-pointer rounded-xl bg-white">
      <img
        className="h-[210px] w-full rounded-[20px] object-cover"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="food"
      />
      <div className="px-3 flex flex-col">
        <h3 className="text-[22px] font-bold text-[#02060c] truncate mt-[6px]">{name}</h3>
        <p className="text-[14px] font-medium mt-[4px] mb-[6px]">
          ⭐ <span className={` px-1.5 py-[1px] rounded ${ratingColor}`}>{avgRating}</span> • {sla.deliveryTime} mins
        </p>
        <p className="text-[15px] text-[#686b78] truncate mb-[1px]">{cuisines.join(", ")}</p>
        <p className="text-[15px] text-[#686b78] truncate">{locality} • {sla.lastMileTravelString}</p>
      </div>
    </div>
  );
};


// src/components/hoc/withRatingColor.jsx
export const withRatingColor = (RestaurantCard) => {
  return (props) => {
    const { avgRating } = props.resData;

    let ratingColor = "bg-gray-300 text-black"; // default
    if (avgRating > 4.3) ratingColor = "bg-green-500 text-white";
    else if (avgRating > 3.7) ratingColor = "bg-yellow-400 text-black";
    else ratingColor = "bg-red-500 text-white";

    return <RestaurantCard {...props} ratingColor={ratingColor} />;
  };
};


export default RestaurantCard;
