import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from 'react';
// import {GET_RASTAURANT_LIST} from '../util/constants';
import {Link} from 'react-router-dom';
import {mockRestaurantList} from '../util/mockData'

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [RestaurantList, setRestaurantList] = useState([]);
    useEffect(() => {
        fetchAllData();
    }, []);

    async function fetchAllData() {
        // const response = await fetch(GET_RASTAURANT_LIST);
        // const jsonResponse = await response.json();
        // setRestaurantList(jsonResponse.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // setTimeout(() => {
        //     setRestaurantData(jsonResponse.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // }, 1500); //delayed through dummy time to see the Shimmer UI

        setRestaurantList(mockRestaurantList);
        setTimeout(() => {
            setRestaurantData(mockRestaurantList);
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
        {restaurantData == undefined || restaurantData.length == 0 ? <Shimmer/> : <div className='body'>
            <input className='search' placeholder='Search' onInput={(e) => {
                handleSearch(e.target.value); //use useRef/useMemo for debounced function

            }}></input>
            <button className="filter-top-rest-btn" onClick={() => {
                const filteredList = RestaurantList.filter(ele => ele?.info?.avgRating >= 4.5)
                setRestaurantData(filteredList);
            }}>Filter Top Restaurants</button>
            <div className='restaurant-container'>
                {restaurantData.map(restaurant =>
                    <Link to={'/restaurant-menu/' + restaurant?.info.id} key={restaurant?.info.id}><RestaurantCard  data={restaurant} /></Link>
                )}

            </div>
        </div>}
    </>
}

export default Body;