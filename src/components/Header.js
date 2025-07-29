import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import { Menu, X, Home, Info, HelpCircle, User, ShoppingCart } from "lucide-react"; // Icons added
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Log out");
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    //Subscribing to our store
    const cart = useSelector((store) => store.cart.items);

    return (
        <header className="w-full flex justify-center border-b border-gray-200">
            <div className="w-full max-w-[1300px] flex justify-between items-center min-h-[50px] h-[80px] px-[10px] py-[10px]">
                {/* Logo */}
                <div className="flex">
                    <img src={LOGO_IMG} alt="food logo" className="h-[110px] w-auto" />
                </div>

                {/* Hamburger icon (mobile only) */}
                <button className="sm:hidden text-gray-800 z-50" onClick={toggleMenu}>
                    {menuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>

                {/* Desktop Nav */}
                <nav className="hidden sm:block p-[10px]">
                    <ul className="flex items-center gap-x-8 list-none text-[20px] font-bold h-[30px]">
                        <li className="mx-[10px] flex flex-row-reverse items-center gap-2 hover:text-red-600 cursor-pointer">
                            <Link to="/home" className="flex items-center gap-1">
                                <Home size={20} /> Home
                            </Link>
                        </li>
                        <li className="mx-[10px] flex flex-row-reverse items-center gap-2 hover:text-red-600 cursor-pointer">
                            <Link to="/about" className="flex items-center gap-1">
                                <Info size={20} /> About Us
                            </Link>
                        </li>
                        <li className="mx-[10px] flex flex-row-reverse items-center gap-2 hover:text-red-600 cursor-pointer">
                            <Link to="/help" className="flex items-center gap-1">
                                <HelpCircle size={20} /> Help
                            </Link>
                        </li>
                        <li
                            className="mx-[10px] flex flex-row-reverse items-center gap-1 hover:text-red-600 cursor-pointer"
                            onClick={() =>
                                setBtnName(btnName === "Log In" ? "Log Out" : "Log In")
                            }
                        >
                            <Link to="/" className="flex items-center gap-1">
                                <User size={20} /> {btnName}
                            </Link>
                        </li>
                        <li className="mx-[10px]">
                            <Link
                                to="/cart"
                                className="flex flex-row-reverse items-center gap-1 hover:text-red-600 cursor-pointer"
                            >
                                <span className="flex items-center gap-1">
                                    <ShoppingCart size={30} />
                                    {cart.length === 0 ? (
                                        <span>Cart</span>
                                    ) : (
                                        <span className="font-bold">{cart.length}</span>
                                    )}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Nav */}
                {menuOpen && (
                    <nav className="absolute top-[80px] left-0 w-full bg-white shadow-lg sm:hidden z-40">
                        <ul className="flex flex-col items-center text-[18px] font-semibold py-4 gap-2">
                            <li className="py-2" onClick={toggleMenu}>
                                <Link to="/home" className="flex items-center gap-1">
                                    <Home size={20} /> Home
                                </Link>
                            </li>
                            <li className="py-2" onClick={toggleMenu}>
                                <Link to="/about" className="flex items-center gap-1">
                                    <Info size={20} /> About Us
                                </Link>
                            </li>
                            <li className="py-2" onClick={toggleMenu}>
                                <Link to="/help" className="flex items-center gap-1">
                                    <HelpCircle size={20} /> Help
                                </Link>
                            </li>
                            <li
                                className="py-2"
                                onClick={() => {
                                    setBtnName(btnName === "Log In" ? "Log Out" : "Log In");
                                    toggleMenu();
                                }}
                            >
                                <Link to="/" className="flex items-center gap-1">
                                    <User size={20} /> {btnName}
                                </Link>
                            </li>
                            <li className="mx-[10px]">
                                <Link
                                    to="/cart"
                                    className="flex flex-row-reverse items-center gap-1 hover:text-red-600 cursor-pointer"
                                >
                                    <span className="flex items-center gap-1">
                                        <ShoppingCart size={30} />
                                        {cart.length === 0 ? (
                                            <span>Cart</span>
                                        ) : (
                                            <span className="font-bold">{cart.length}</span>
                                        )}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
