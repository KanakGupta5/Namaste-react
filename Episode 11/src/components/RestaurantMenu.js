import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { GET_RESTAURANT_MENU_BY_RESTAURANT_ID, IMG_CDN_URL } from '../util/constants';
import ItemAccordian from "./ItemAccordian";
import Shimmer from "./Shimmer";
import useRestaurantMenu from '../util/useRestaurantMenu';

const RestaurantMenu = () => {
    const restaurantId = useParams();
    const [showIndex, setShowIndex] = useState(null);
    //********************************  CUSTOM HOOK   ***********************************
    const filteredRestaurantMenu = useRestaurantMenu(restaurantId);
    if (filteredRestaurantMenu == undefined) {
        return <Shimmer />;
    }

    function handleAccordianClick(index){
        index == showIndex ? setShowIndex(null) : setShowIndex(index);
    }


    return <>
        <div className="flex mt-2 flex-col w-1/3 mx-auto gap-y-2">
            <p className="font-bold text-2xl">{filteredRestaurantMenu?.name}</p>
            <img className="w-full h-56 object-cover rounded-lg" src={IMG_CDN_URL + filteredRestaurantMenu?.cloudinaryImageId}></img>
            <div className="flex flex-col">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                    <p className="font-semibold text-md">{filteredRestaurantMenu?.avgRatingString} ({filteredRestaurantMenu?.totalRatingsString}) • {filteredRestaurantMenu?.costForTwoMessage}</p>
                </div>
                <p className="text-orange-400 font-medium">{filteredRestaurantMenu?.cuisines.join(", ")}</p>
                <p><span className="text-green-600">{filteredRestaurantMenu?.timingsInfo?.status}</span> • {filteredRestaurantMenu?.timingsInfo?.message}</p>
            </div>
            <div className="flex flex-col gap-y-4">
                {filteredRestaurantMenu?.itemCards.map((category, index) => {
                    return <ItemAccordian key={category?.title + filteredRestaurantMenu?.id} data={category} showItemList={index == showIndex ? true : false} accordianHandler = {() => {handleAccordianClick(index)}}/>
                })}
            </div>
        </div>
    </>
}

export default RestaurantMenu;