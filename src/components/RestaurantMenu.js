import { useState } from "react";
import ShimmerRestaurant from "./ShimmerRestaurant";
import { useParams } from "react-router";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import MenuAccordian from "./MenuAccordian";


const RestaurantMenu = () => {
    const [openIndex, setOpenIndex] = useState(null); // toggle dropdown state

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (!resInfo) return <ShimmerRestaurant />;

    // Deeply nested info
    const info = resInfo?.cards?.find(
        (card) => card.card?.card?.info
    )?.card?.card?.info;

    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c.card?.card?.itemCards
    );

    // console.log(resInfo);
    // console.log(info);
    // console.log(categories);

    if (!info || !categories) return <h2>Menu data not found</h2>;

    const { name, cuisines } = info;

    const toggleCategory = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4 mt-10">
            <div className="bg-inherit p-10 w-full">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{name}</h1>
                <h3 className="text-lg text-gray-500 mb-5 tracking-wide">{cuisines?.join(", ")}</h3>

                <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">
                    🜲 Menu 🜲
                </h2>

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
    );


};

export default RestaurantMenu;
