import { useEffect, useState } from "react";
import { mockRestaurantMenu } from "./mockData";

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestuarant] = useState(null);

    useEffect(() => {
        fetchRestaurantMenu();
    }, []);

    const fetchRestaurantMenu = () => {
        const filteredList = mockRestaurantMenu.filter(restaurantMenuEle => resId?.id == restaurantMenuEle?.info?.id);
        setRestuarant(filteredList[0]?.info);
    }

    return restaurant;
}

export default useRestaurantMenu;