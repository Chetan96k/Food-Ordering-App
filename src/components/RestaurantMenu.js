import { useState } from "react";
import ShimmerRestaurant from "./ShimmerRestaurant";
import { useParams } from "react-router";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import MenuAccordian from "./MenuAccordian";

const RestaurantMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <ShimmerRestaurant />;

  const info = resInfo?.cards?.find((card) => card.card?.card?.info)?.card?.card?.info;

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c.card?.card?.itemCards
    );

  if (!info || !categories) return <h2 className="text-center mt-10 text-gray-600">Menu data not found</h2>;

  const { name, cuisines } = info;

  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8 mt-10">
      <div className="bg-white/50 backdrop-blur-md shadow-md rounded-xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center md:text-left">
          {name}
        </h1>
        <h3 className="text-base md:text-lg text-gray-500 mb-6 text-center md:text-left tracking-wide">
          {cuisines?.join(", ")}
        </h3>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center border-b border-gray-300 pb-2">
          🜲 Menu 🜲
        </h2>

        <div className="space-y-4">
          {categories.map((category, index) => {
            const itemCards = category.card.card.itemCards || [];
            const categoryTitle = category.card.card.title;

            return (
              <MenuAccordian
                key={categoryTitle + index}
                categoryTitle={categoryTitle}
                itemCards={itemCards}
                openIndex={openIndex}
                toggleCategory={toggleCategory}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
