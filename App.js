import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://static.vecteezy.com/system/resources/previews/019/606/496/large_2x/burger-graphic-clipart-design-free-png.png"
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

const RestaurantCard = (props) => {
    const { name, menu, stars, deliveryTime } = props;
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg" alt="food"></img>
            <h3>{name}</h3>
            <p>{menu}</p>
            <p>{stars} stars</p>
            <p>{deliveryTime} minutes</p>
        </div>
    )
}

const resList = [
    
]

const Body = () => {
    return (
        <div className="body">
            <input className="search" type="text" placeholder="Search Food"></input>
            <div className="restaurant-container">
                <RestaurantCard name="Meghana Foods" menu="Gobi Manchuri" stars="4.4" deliveryTime="38" />
                <RestaurantCard name="KFC" menu="Manchow Soup" stars="4.0" deliveryTime="28" />
                <RestaurantCard name="Kareems" menu="Biryani" stars="4.1" deliveryTime="88" />
                <RestaurantCard name="Masters Chef" menu="Papad" stars="5.0" deliveryTime="30" />
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("item"));

root.render(<App />);
