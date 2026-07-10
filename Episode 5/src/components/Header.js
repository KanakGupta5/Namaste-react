import { APP_LOGO_URL } from "../util/constants";

const Header = () => {
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
                </div>
            </div>
    </>
}

export default Header;