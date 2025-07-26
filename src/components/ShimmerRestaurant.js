import "../styles/Shimmer.css";

const ShimmerRestaurant = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="space-y-6">
        {/* Restaurant name shimmer */}
        <div className="shimmer shimmer-line h-8 w-1/2 rounded-md"></div>

        {/* Cuisines shimmer */}
        <div className="shimmer shimmer-line h-5 w-1/3 rounded-md"></div>

        {/* Section title shimmer */}
        <div className="shimmer shimmer-line h-6 w-1/4 rounded-md"></div>

        {/* Menu item blocks */}
        <div className="mt-8 space-y-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="shimmer shimmer-line h-20 w-full rounded-xl"
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerRestaurant;
