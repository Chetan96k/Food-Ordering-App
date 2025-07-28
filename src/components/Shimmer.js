import "../styles/Shimmer.css"; // Make sure this CSS file is imported

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="w-full max-w-[300px] mb-1.5 rounded-xl bg-white shadow-sm"
          >
            {/* Image Placeholder */}
            <div className="shimmer h-[210px] w-full rounded-[20px] mb-3"></div>

            {/* Text placeholders */}
            <div className="px-3 space-y-2">
              <div className="shimmer h-6 rounded w-3/4"></div>
              <div className="shimmer h-4 rounded w-5/6"></div>
              <div className="shimmer h-4 rounded w-2/3"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;