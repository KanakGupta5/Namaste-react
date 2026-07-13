import {IMG_CDN_URL} from '../util/constants';

const RestaurantCard = (restaurant) => {
    const {name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla} = restaurant?.data?.info;
    return <>
        <div className='restaurant-card'>
            <img className='restaurant-logo' src={IMG_CDN_URL + cloudinaryImageId}></img>
            <h3 className='margin-0'>{name}</h3>
            <div className='rating-cuisine'>
                <h4 className='margin-0'>{avgRating + " star"}</h4>
                <h4 className='margin-0'>{sla?.slaString}</h4>
            </div>
            <h5 className='margin-0 cuisine'>{cuisines.join(",")}</h5>
        </div>
    </>
}

export default RestaurantCard;