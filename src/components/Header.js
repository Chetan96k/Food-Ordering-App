import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Log out");
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_IMG}
                    alt="food logo"
                    className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/Help">Help</Link></li>
                    <li className="signin-btn" onClick={() => {
                        setBtnName(btnName === "Log In" ? "Log Out" : "Log In")
                    }}><Link to="/">{btnName}</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;