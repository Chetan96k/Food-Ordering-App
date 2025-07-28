const MenuAccordian = ({ categoryTitle, itemCards, openIndex, toggleCategory, index }) => {
    return (
        <div key={categoryTitle + index} className="mb-8">
            {/* Category Header */}
            <div
                className="flex justify-between items-center cursor-pointer bg-white px-1 py-2 border-b border-gray-300"
                onClick={() => toggleCategory(index)}
            >
                <h3 className="text-2xl font-bold text-gray-900 tracking-wide">{categoryTitle} ({itemCards.length})</h3>
                <span className="text-lg text-gray-500">
                    {openIndex === index ? "▲" : "▼"}
                </span>
            </div>

            {/* Menu Items */}
            {openIndex === index && (
                <ul className="pl-4 pr-10 mt-5 space-y-4">
                    {itemCards.map((item) => {
                        const { id, name, price, description, isVeg, imageId, ratings } = item.card.info;
                        return (
                            <div
                                key={id}
                                className="px-4 pt-4 pb-10 border-b-2 border-b-gray-300 flex justify-between items-start"
                            >
                                <div className="w-9/12">
                                    <p>
                                        {isVeg ? (
                                            <span className="relative inline-block w-4 h-4 border-2 border-green-600 rounded-[4px] mr-2 align-middle">
                                                <span className="absolute top-[2.5px] left-[2px] w-2 h-2 bg-green-600 rounded-full"></span>
                                            </span>
                                        ) : (
                                            <span className="relative inline-block w-4 h-4 border-2 border-red-600 rounded-[4px] mr-2 align-middle">
                                                <span className="absolute top-[2.5px] left-[2px] w-2 h-2 bg-red-600 rounded-full"></span>
                                            </span>
                                        )}
                                    </p>
                                    <h4 className="text-xl font-bold text-gray-800">{name}</h4>
                                    <span className="text-lg font-semibold text-gray-900">₹{price ? price / 100 : 100}</span>
                                    {ratings?.aggregatedRating?.rating && (
                                        <p>⭐{ratings.aggregatedRating.rating}</p>
                                    )}

                                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>

                                </div>

                                <div className="mt-2 relative w-38 h-36">
                                    {imageId ? (
                                        <img
                                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
                                            alt={name || "Food Item"}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-lg">
                                            <span className="text-gray-400 text-sm font-medium">No Image Available</span>
                                        </div>
                                    )}

                                    <button className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 px-10 py-2 text-lg font-bold text-green-600 bg-white border border-gray-300 rounded-md shadow-md hover:bg-gray-100 transition">
                                        ADD
                                    </button>
                                </div>

                            </div>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default MenuAccordian;