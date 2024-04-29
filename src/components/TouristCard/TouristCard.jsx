const TouristCard = ({ tourist }) => {
  console.log(tourist);
  const { photo, spot, location,country,time,price } = tourist;
  return (
    <div>
      <p></p>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
          <a href="#">
            <img className="w-[600px] h-[300px] lg:h-[400px]" src={photo} alt="spot photo" />
          </a>
          <div className="relative -mt-16 px-10 pt-2 pb-16 bg-white m-10">
            <a
              href="#"
              className="font-semibold font-lora text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
            >
              {spot}
            </a>
            <p className="text-gray-500 text-sm">{location},{country}</p>
            <p className="text-gray-500 text-sm">For {time} price of {price} $ Only</p>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View Details
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristCard;
