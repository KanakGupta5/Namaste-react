import { APP_LOGO_URL } from "../util/constants";
import { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return <>
        <div className="header">
            <img className="logo" src={APP_LOGO_URL}></img>
            <div className="nav-items">
                <ul>
                    <li><Link to='/'> About </Link></li>
                    <li><Link to='/contact-us'> Contact Us </Link></li>
                </ul>
            </div>
        </div>
    </>
}

export default Header;