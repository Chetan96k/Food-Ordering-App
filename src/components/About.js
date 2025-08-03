const About = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh] px-4">
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 max-w-xl w-full text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-4">
          We are a food delivery service dedicated to bringing delicious meals to your doorstep.
        </p>
        <p className="text-gray-600 text-base sm:text-lg mb-4">
          Our mission is to connect you with the best local restaurants and provide a seamless ordering experience.
        </p>
        <p className="text-gray-600 text-base sm:text-lg">
          Thank you for choosing us!
        </p>
      </div>
    </div>
  );
};

export default About;