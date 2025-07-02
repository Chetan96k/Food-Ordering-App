import { useEffect, useState } from "react";
import ShimmerRestaurant from "./ShimmerRestaurant";
import { useParams } from "react-router";
import { RES_INFO } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [openIndex, setOpenIndex] = useState(null); // toggle dropdown state

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch(
                RES_INFO + resId + "&catalog_qa=undefined"//296025
            );
            const json = await data.json();
            setResInfo(json.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

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
        <div className="res-info-container">
            <h1 className="res-name">{name}</h1>
            <h3 className="res-cuisines">
                {cuisines?.join(", ")}
            </h3>
            <h2 className="menu-title">Menu</h2>


            {categories.map((category, index) => {
                const itemCards = category.card.card.itemCards || [];
                const categoryTitle = category.card.card.title;

                console.log(index);

                return (
                    <div key={categoryTitle + index} className="menu-category">
                        <div
                            className="category-header"
                            onClick={() => toggleCategory(index)}
                        >
                            <h3>{categoryTitle}</h3>
                            <span>{openIndex === index ? "▲" : "▼"}</span>
                        </div>

                        {openIndex === index && (
                            <ul className="menu-items">
                                {itemCards.map((item) => {
                                    const { id, name, price } = item.card.info;
                                    return (
                                        <li key={id} className="menu-item">
                                            {name} - ₹{price / 100}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default RestaurantMenu;
