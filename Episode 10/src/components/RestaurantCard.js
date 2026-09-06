import {IMG_CDN_URL} from '../util/constants';

const RestaurantCard = (restaurant) => {
    const {name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla} = restaurant?.data?.info;
    return <>
        <div className='flex flex-col max-w-64 w-64 bg-gray-200 hover:bg-gray-300 border border-gray-300 border-solid'>
            <img className='w-64' src={IMG_CDN_URL + cloudinaryImageId}></img>
            <h3 className='px-2 font-bold'>{name}</h3>
            <div className='px-2'>
                <h4 className=''>{avgRating + " star"}</h4>
                <h4 className='margin-0'>{sla?.slaString}</h4>
            </div>
            <h5 className='px-2'>{cuisines.join(", ")}</h5>
        </div>
    </>
}

export default RestaurantCard;