const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;

  return (
    <div className="w-[300px] mb-1.5 transition-transform duration-100 ease-in hover:scale-[0.97] cursor-pointer rounded-xl bg-white">
      <img
        className="h-[210px] w-full rounded-[20px] object-cover"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="food"
      />
      <div className="px-3 flex flex-col">
        <h3 className="text-[22px] font-bold text-[#02060c] truncate mt-[6px] mb-[6px]">{name}</h3>
        <p className="text-[15px] text-[#686b78] truncate mb-[4px]">{cuisines.join(", ")}</p>
        <p className="text-[14px] text-[#535665] font-medium mb-[2px]">
          ⭐ {avgRating} • {sla.deliveryTime} mins
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
