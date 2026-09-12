import { APP_LOGO_URL } from "../util/constants";
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
import UserContext from "../util/UserContext";

const Header = () => {
    const [btnName, setBtnName] = useState("LOGIN");

    //******************************** React Context ************************************
    const { loggedInUser } = useContext(UserContext);

    //********************************  CUSTOM HOOK   ***********************************
    const onlineStatus = useOnlineStatus();
    return <>
        <div className="flex justify-between bg-amber-100 items-center">
            <img className="h-24" src={APP_LOGO_URL}></img>
            <div className="flex">
                <ul className="flex">
                    <li className="p-4">Online Status = {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="p-4 hover:bg-amber-200"><Link to='/'> Home </Link></li>
                    <li className="p-4 hover:bg-amber-200"><Link to='/about'> About </Link></li>
                    <li className="p-4 hover:bg-amber-200"><Link to='/contact-us'> Contact Us </Link></li>
                    <li className="p-4 hover:bg-amber-200"><Link to='/grocery'>Grocery</Link></li>
                    <li className="p-4 hover:bg-amber-200">Account</li>
                    <li className="p-4 hover:bg-amber-200">Cart</li>
                </ul>
                <Link className="p-4 hover:bg-amber-200" to='/login'>
                    <button className="login-btn" onClick={() => {
                        btnName == "LOGIN" ? setBtnName("LOGOUT") : setBtnName("LOGIN");
                    }}
                    >{btnName}</button></Link>
                <p className="p-4 font-bold">{loggedInUser}</p>
            </div>
        </div>
    </>
}

export default Header;