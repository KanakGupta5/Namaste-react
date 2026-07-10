import { RestaurantList } from "../util/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from 'react';

// let count = 0;
// const debouncedSearch = function (cb, delay) {
//         let timer;
//         return function () {
//             clearTimeout(timer);
//             timer = setTimeout(() => {
//                 cb();
//             }, delay);
//         }
//     }

const Body = () => {
    const [restaurantData, setRestaurantData] = useState(RestaurantList);


    function handleSearch(inputValue) {
        if (inputValue == '') {
            setRestaurantData(RestaurantList);
            return;
        }
        const filetredList = RestaurantList.filter(ele => ele?.info?.name.toLowerCase().includes(inputValue.toLowerCase()));
        setRestaurantData(filetredList);
    }

    // const handleDebouncedSearch = debouncedSearch(handleSearch, 1000);

    return <>
        <div className='body'>
            <input className='search' placeholder='Search' onInput={(e) => {
                handleSearch(e.target.value); //use useRef/useMemo for bebounced function

            }}></input>
            <button className="filter-top-rest-btn" onClick={() => {
                const filteredList = RestaurantList.filter(ele => ele?.info?.avgRating > 4)
                setRestaurantData(filteredList);
            }}>Filter Top Restaurants</button>
            <div className='restaurant-container'>
                {restaurantData.map(restaurant =>
                    <RestaurantCard key={restaurant?.info.id} data={restaurant} />
                )}

            </div>
        </div>
    </>
}

export default Body;