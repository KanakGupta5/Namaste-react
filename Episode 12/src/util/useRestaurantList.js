import { useEffect, useState } from "react"
import {mockRestaurantList} from './mockData';

const useRestaurantList = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    useEffect(() => {
        fetchAllData();
    }, []);

    async function fetchAllData() {
        setTimeout(() => {
            setRestaurantData(mockRestaurantList);
        }, 1500); //delayed through dummy time to see the Shimmer UI
    }

    return restaurantData;
}

export default useRestaurantList;