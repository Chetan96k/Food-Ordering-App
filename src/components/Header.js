import { LOGO_IMG } from "../utils/constants";

const Header = () => {
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
                    <li>Cart</li>
                    <li>Sign In</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;