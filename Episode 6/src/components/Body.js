import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from 'react';

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [RestaurantList, setRestaurantList] = useState([]);
    console.log("RestaurantList", RestaurantList);
    useEffect(() => {
        fetchAllData();
    }, []);

    async function fetchAllData() {
        const response = await fetch("https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurants");
        const jsonResponse = await response.json();
        setRestaurantList(jsonResponse?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setTimeout(() => {
            setRestaurantData(jsonResponse?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }, 1500); //delayed through dummy time to see the Shimmer UI
    }

    function handleSearch(inputValue) {
        if (inputValue == '') {
            setRestaurantData(RestaurantList);
            return;
        }
        const filetredList = RestaurantList.filter(ele => ele?.info?.name.toLowerCase().includes(inputValue.toLowerCase()));
        setRestaurantData(filetredList);
    }

    return <>
        {restaurantData.length == 0 ? <Shimmer/> : <div className='body'>
            <input className='search' placeholder='Search' onInput={(e) => {
                handleSearch(e.target.value); //use useRef/useMemo for bebounced function

            }}></input>
            <button className="filter-top-rest-btn" onClick={() => {
                const filteredList = RestaurantList.filter(ele => ele?.info?.avgRating >= 4.5)
                setRestaurantData(filteredList);
            }}>Filter Top Restaurants</button>
            <div className='restaurant-container'>
                {restaurantData.map(restaurant =>
                    <RestaurantCard key={restaurant?.info.id} data={restaurant} />
                )}

            </div>
        </div>}
    </>
}

export default Body;