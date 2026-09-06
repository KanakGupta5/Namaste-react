import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import {GET_RESTAURANT_MENU_BY_RESTAURANT_ID, IMG_CDN_URL} from '../util/constants';
import { mockRestaurantMenu } from "../util/mockData";
import Shimmer from "./Shimmer";
import useRestaurantMenu from '../util/useRestaurantMenu';

const RestaurantMenu = () => {
    const restaurantId = useParams();
    //********************************  CUSTOM HOOK   ***********************************
    const filteredRestaurantMenu = useRestaurantMenu(restaurantId);
    if(filteredRestaurantMenu == undefined){
        return <Shimmer />;
    }

    const {name , avgRatingString, cuisines, totalRatingsString, costForTwoMessage, timingsInfo, itemCards, cloudinaryImageId} = filteredRestaurantMenu;

    return <>
        <div className="restaurant-menu-container">
            <h1>{name}</h1>
            <img className='restaurant-logo' src={IMG_CDN_URL + cloudinaryImageId}></img>
            <p>{avgRatingString + ' ' + totalRatingsString + ' ' + costForTwoMessage}</p>
            <p>{cuisines.join(", ")}</p>
            <p>{timingsInfo?.message}</p>
            <div className="recommended-container">
                <h3>Recommended Dishes</h3>
                <ul>
                {itemCards.map(dishEle => <li key={dishEle?.card?.info?.name}>{dishEle?.card?.info?.name}</li>)}
                </ul>
            </div>
        </div>
    </>
}

export default RestaurantMenu;