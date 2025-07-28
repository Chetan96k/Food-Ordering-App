const Help = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh] px-4">
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 max-w-xl w-full text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Need Help?
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          We're here to assist you. Browse FAQs or contact our support team.
        </p>
        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
          <button className="px-5 sm:px-6 py-2.5 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition duration-200">
            FAQs
          </button>
          <button className="px-5 sm:px-6 py-2.5 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
