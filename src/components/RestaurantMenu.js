import { useState } from "react";
import ShimmerRestaurant from "./ShimmerRestaurant";
import { useParams } from "react-router";
import useRestaurantMenu from "../hooks/useRestaurantMenu";


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

    if (!info || !categories) return <h2>Menu data not found</h2>;

    const { name, cuisines, costForTwoMessage } = info;

    const toggleCategory = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 mt-10">
            <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-xl w-full">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{name}</h1>
                <h3 className="text-lg text-gray-500 mb-5 tracking-wide">{cuisines?.join(", ")}</h3>

                <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">
                    Menu
                </h2>

                {categories.map((category, index) => {
                    const itemCards = category.card.card.itemCards || [];
                    const categoryTitle = category.card.card.title;

                    return (
                        <div key={categoryTitle + index} className="mb-8">
                            {/* Category Header */}
                            <div
                                className="flex justify-between items-center cursor-pointer bg-white px-1 py-2 border-b border-gray-300"
                                onClick={() => toggleCategory(index)}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 tracking-wide">{categoryTitle}</h3>
                                <span className="text-lg text-gray-500">
                                    {openIndex === index ? "▲" : "▼"}
                                </span>
                            </div>

                            {/* Menu Items */}
                            {openIndex === index && (
                                <ul className="pl-4 pr-10 mt-5 space-y-4">
                                    {itemCards.map((item) => {
                                        const { id, name, price } = item.card.info;
                                        return (
                                            <li
                                                key={id}
                                                className="p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-200"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <h4 className="text-lg font-medium text-gray-800">{name}</h4>
                                                    <span className="text-lg font-semibold text-gray-900">₹{price / 100}</span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );


};

export default RestaurantMenu;
