import { APP_LOGO_URL } from "../util/constants";
import {useState} from 'react';

const Header = () => {
    const [btnName, setBtnName] = useState("LOGIN");
    return <>
            <div className="header">
                <img className="logo" src={APP_LOGO_URL}></img>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>Offers</li>
                        <li>Account</li>
                        <li>Cart</li>
                    </ul>
                    <button className="login-btn" onClick={() => {
                        btnName == "LOGIN" ? setBtnName("LOGOUT") : setBtnName("LOGIN");
                    }}                    
                    >{btnName}</button>
                </div>
            </div>
    </>
}

export default Header;