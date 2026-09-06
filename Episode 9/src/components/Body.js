import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from 'react';
// import {GET_RASTAURANT_LIST} from '../util/constants';
import { Link } from 'react-router-dom';
import { mockRestaurantList } from '../util/mockData';
import useOnlineStatus from "../util/useOnlineStatus";
import useRestaurantList from "../util/useRestaurantList";

const Body = () => {
    //********************************  CUSTOM HOOK   ***********************************
    const onlineStatus = useOnlineStatus();    
    const restaurantData = useRestaurantList();

    return <>
        {!onlineStatus ? <h2>You are offline. Check your internet</h2> : (restaurantData == undefined || restaurantData.length == 0 ? <Shimmer /> : <div className='body'>

            <div className='restaurant-container'>
                {restaurantData.map(restaurant =>
                    <Link to={'/restaurant-menu/' + restaurant?.info.id} key={restaurant?.info.id}><RestaurantCard data={restaurant} /></Link>
                )}

            </div>
        </div>)}
    </>
}

export default Body;