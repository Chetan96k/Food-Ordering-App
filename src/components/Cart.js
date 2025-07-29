import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice"; // update import path if needed

const Cart = () => {
    const cart = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>

            </div>

            {cart.length === 0 ? (
                <p className="text-gray-500 text-lg">Your cart is empty.</p>
            ) : (
                <>
                    <ul className="space-y-6 mb-10">
                        {cart.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-start justify-between bg-white p-4 rounded-lg shadow-sm border"
                            >
                                {/* Item Info */}
                                <div className="w-3/4">
                                    <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                                    <p className="text-gray-600 mt-1">
                                        ₹{(item.price / 100).toFixed(2)} × {item.quantity}
                                    </p>
                                    <div className="mt-2 flex items-center gap-3">
                                        <button
                                            onClick={() => dispatch(removeItem({ id: item.id }))}
                                            className="bg-gray-200 text-gray-700 px-2 rounded font-bold"
                                        >
                                            -
                                        </button>
                                        <span className="font-semibold">{item.quantity}</span>
                                        <button
                                            onClick={() => dispatch(addItem(item))}
                                            className="bg-gray-200 text-gray-700 px-2 rounded font-bold"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="w-24 h-24 rounded-md overflow-hidden">
                                    {item.imageId ? (
                                        <img
                                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_128,h_128/${item.imageId}`}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-sm text-gray-400">
                                            No Image
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Bottom Section: Clear Cart & Total */}
                    <div className="flex justify-between items-center border-t pt-4">
                        <button
                            onClick={() => dispatch(clearCart())}
                            className="px-5 py-2.5 bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-800 transition duration-200"
                        >
                            Clear Cart
                        </button>

                        <h2 className="text-xl font-bold text-gray-800">
                            Total: ₹{(total / 100).toFixed(2)}
                        </h2>
                    </div>

                </>
            )}
        </div>
    );
};

export default Cart;
