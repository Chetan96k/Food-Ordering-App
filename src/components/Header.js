import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger & close icons

const Header = () => {
    const [btnName, setBtnName] = useState("Log out");
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="w-full flex justify-center border-b border-gray-200">
            <div className="w-full max-w-[1300px] flex justify-between items-center min-h-[50px] h-[80px] px-[10px] py-[10px]">
                {/* Logo */}
                <div className="flex">
                    <img src={LOGO_IMG} alt="food logo" className="h-[110px] w-auto" />
                </div>

                {/* Hamburger icon (visible on mobile only) */}
                <button
                    className="sm:hidden text-gray-800 z-50"
                    onClick={toggleMenu}
                >
                    {menuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>

                {/* Desktop Nav */}
                <nav className="hidden sm:block p-[10px]">
                    <ul className="flex items-center gap-x-15 list-none text-[20px] font-bold h-[30px]">
                        <li className="mx-[10px] flex flex-row-reverse hover:text-red-600 cursor-pointer">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="mx-[10px] flex flex-row-reverse hover:text-red-600 cursor-pointer">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="mx-[10px] flex flex-row-reverse hover:text-red-600 cursor-pointer">
                            <Link to="/help">Help</Link>
                        </li>
                        <li
                            className="mx-[10px] flex flex-row-reverse hover:text-red-600 cursor-pointer"
                            onClick={() =>
                                setBtnName(btnName === "Log In" ? "Log Out" : "Log In")
                            }
                        >
                            <Link to="/">{btnName}</Link>
                        </li>
                        <li className="mx-[10px] flex flex-row-reverse hover:text-red-600 cursor-pointer">
                            <span>Cart</span>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Nav */}
                {menuOpen && (
                    <nav className="absolute top-[80px] left-0 w-full bg-white shadow-lg sm:hidden z-40">
                        <ul className="flex flex-col items-center text-[18px] font-semibold py-4">
                            <li className="py-2" onClick={toggleMenu}>
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="py-2" onClick={toggleMenu}>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className="py-2" onClick={toggleMenu}>
                                <Link to="/help">Help</Link>
                            </li>
                            <li
                                className="py-2"
                                onClick={() => {
                                    setBtnName(btnName === "Log In" ? "Log Out" : "Log In");
                                    toggleMenu();
                                }}
                            >
                                <Link to="/">{btnName}</Link>
                            </li>
                            <li className="py-2" onClick={toggleMenu}>
                                <span>Cart</span>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
