import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";

const Header = () => {
    const [btnName, setBtnName] = useState("Sign In");
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_IMG}
                    alt="food logo"
                    className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Help</li>
                    <li className="signin-btn" onClick={() => {
                        setBtnName(btnName === "Sign In" ? "Sign Out" : "Sign In")
                    }}>{btnName}</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;