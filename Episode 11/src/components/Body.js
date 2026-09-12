import RestaurantCard, {PromotedRestaurantCard} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../util/useOnlineStatus";
import useRestaurantList from "../util/useRestaurantList";
import UserContext from "../util/UserContext";

const Body = () => {
    const [restData, setRestdata] = useState([]);
    const [filterClicked, setFilteredClicked] = useState(false);
    const {loggedInUser, setUserName} = useContext(UserContext);

    //********************************  CUSTOM HOOK   ***********************************
    const onlineStatus = useOnlineStatus();
    const restaurantData = useRestaurantList();

    // *****************************   HIGHER ORDER COMPONENT (HOC)    ********************************
    const ConditionalRestaurantCard = PromotedRestaurantCard(RestaurantCard)

    useEffect(() => {
        setRestdata(restaurantData);
    }, [restaurantData]);

    function handleSearch(inputValue) {
        if (inputValue == '') {
            setRestdata(restaurantData);
            return;
        }
        const filteredList = restaurantData.filter(ele => ele?.info?.name.toLowerCase().includes(inputValue.toLowerCase()));
        setRestdata(filteredList);
    }

    return <>
        {!onlineStatus ? <h2>You are offline. Check your internet</h2> : (restaurantData == undefined || restaurantData.length == 0 ? <Shimmer /> : <div className='body'>
            <div className="flex mx-10 mt-4">
                <p className="mr-4">Logged in as : {loggedInUser}</p>
                <input className='border-black border border-solid px-2 py-1 rounded-lg' placeholder='Search' onInput={(e) => {
                    handleSearch(e.target.value);
                }}></input>

                <button className={`mx-4 px-2 py-1 rounded-lg ${filterClicked ? "bg-blue-200" : "bg-gray-100 border border-solid border-gray-200"
                    }`} onClick={() => {
                        const flag = !filterClicked;
                        setFilteredClicked(flag);
                        if (flag) {
                            const filteredList = restaurantData.filter(ele => ele?.info?.avgRating >= 4.5)
                            setRestdata(filteredList);
                        }
                        else
                            setRestdata(restaurantData);
                    }}>Filter Top Restaurants</button>
                
                <label>Update User Name</label>
                <input className="border border-black border-solid ml-4 px-4 py-1 rounded-lg"
                onChange={(event) => {
                    setUserName(event.target.value) 
                    // uses setUserName to update react context
                }}
                value = {loggedInUser}
                ></input>
            </div>

            <div className='flex flex-wrap gap-4 justify-evenly m-4'>
                {restData.map(restaurant =>
                    <Link to={'/restaurant-menu/' + restaurant?.info.id} key={restaurant?.info.id}>
                        { restaurant?.info?.promoted ? <ConditionalRestaurantCard data={restaurant}/> : <RestaurantCard data={restaurant} />}
                    </Link>
                )}

            </div>
        </div>)}
    </>
}

export default Body;