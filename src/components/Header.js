import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Log out");

    return (
        <header className="w-full flex justify-center">
                <div className="w-full max-w-[1300px] flex justify-between items-center overflow-hidden min-h-[50px] h-[80px] px-[10px] py-[10px]">
                    {/* Logo */}
                    <div className="flex">
                        <img src={LOGO_IMG} alt="food logo" className="h-[110px] w-auto" />
                    </div>

                    {/* Navigation */}
                    <nav className="p-[10px]">
                        <ul className="flex items-center gap-x-15 list-none text-[20px] font-bold h-[30px] ">
                            <li className="mx-[10px] flex flex-row-reverse transition-colors duration-200 hover:text-red-600 cursor-pointer">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="mx-[10px] flex flex-row-reverse transition-colors duration-200 hover:text-red-600 cursor-pointer">
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className="mx-[10px] flex flex-row-reverse transition-colors duration-200 hover:text-red-600 cursor-pointer">
                                <Link to="/help">Help</Link>
                            </li>
                            <li
                                className="signin-btn mx-[10px] flex flex-row-reverse transition-colors duration-200 hover:text-red-600 cursor-pointer"
                                onClick={() =>
                                    setBtnName(btnName === "Log In" ? "Log Out" : "Log In")
                                }
                            >
                                <Link to="/">{btnName}</Link>
                            </li>
                            <li className="mx-[10px] flex flex-row-reverse transition-colors duration-200 hover:text-red-600 cursor-pointer">
                                <span>Cart</span>
                            </li>
                        </ul>
                    </nav>
                </div>
        </header>

    );
};

export default Header;
