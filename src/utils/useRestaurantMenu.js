import { useEffect, useState } from "react";
import { RES_INFO } from "../utils/constants";

const useRestaurantMenu = (resId) =>  {
    const [resInfo, setResInfo] = useState(null);

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

    return resInfo;
}

export default useRestaurantMenu;