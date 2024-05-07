/* eslint-disable react/prop-types */
import { FaLocationArrow, FaRegClock } from "react-icons/fa";
import { MdOutlinePriceCheck } from "react-icons/md";
import { Link } from "react-router-dom";


const TouristCard = ({ tourist }) => {
  console.log(tourist);
  const {_id, photo, spot, location,country,time,price } = tourist;
  return (
    <div  data-tooltip-content="Click view details button to see details" className="my-anchor-element">
     
      <p></p>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
          <a href="#">
            <img className="w-[600px] h-[300px] lg:h-[400px]" src={photo} alt="spot photo" />
          </a>
          <div className="relative rounded-lg -mt-20 px-10 pt-2 pb-16 bg-white m-10">
            <a
              href="#"
              className="font-semibold font-lora text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
            >
              {spot}
            </a>
            <p className="text-gray-500 flex gap-2 items-center text-sm">
            <FaLocationArrow />{location}, {country}
            </p>
            <p className="text-gray-500 gap-2 flex items-center text-sm">
            <FaRegClock /> For {time}
            </p>
            <p className="text-gray-500 flex items-center gap-2 text-sm">
            <MdOutlinePriceCheck />price of {price} $ Only
            </p>
            <Link to={`/tourist/${_id}`} className="relative inline-flex items-center justify-center p-0.5 mt-4 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="my-anchor-element relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View Details
              </span>
              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristCard;
