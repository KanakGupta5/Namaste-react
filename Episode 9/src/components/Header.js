import { APP_LOGO_URL } from "../util/constants";
import { useState } from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("LOGIN");

    //********************************  CUSTOM HOOK   ***********************************
    const onlineStatus = useOnlineStatus();
    return <>
        <div className="header">
            <img className="logo" src={APP_LOGO_URL}></img>
            <div className="nav-items">
                <ul>
                    <li>Online Status = {onlineStatus ? "🟢": "🔴"}</li>
                    <li><Link to='/'> Home </Link></li>
                    {/* <li><a href='/'> Home </a></li> */}
                    <li><Link to='/about'> About </Link></li>
                    <li><Link to='/contact-us'> Contact Us </Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    {/* <li>Account</li>
                    <li>Cart</li> */}
                </ul>
                {/* <Link to='/login'>
                <button className="login-btn" onClick={() => {
                    btnName == "LOGIN" ? setBtnName("LOGOUT") : setBtnName("LOGIN");
                }}
                >{btnName}</button></Link> */}
            </div>
        </div>
    </>
}

export default Header;