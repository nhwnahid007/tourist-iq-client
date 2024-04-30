import { CiCloudSun } from "react-icons/ci";
import { FaEye, FaLocationArrow, FaRegClock } from "react-icons/fa";
import { MdBookmarkAdded, MdEmail, MdOutlinePriceCheck } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const tourists = useLoaderData()
    const {_id} = useParams()
    console.log(_id)
    const tourist = tourists.find((tourist) => tourist._id === _id);
    console.log(tourist)
    const {photo,description,spot,country,time,price,season,location,number,name,email} = tourist
    return (
        <div>
            <h1>{}</h1>
            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        {/* Image Column */}
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="h-full md:h-[600px] w-full object-cover"
            src={photo}
            alt="photo"
          />
        </div>
        
        <div className="max-w-lg bg-opacity-40 bg-base-200 md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-16 lg:w-3/5 lg:left-0 lg:mt-24 lg:ml-20 xl:mt-16 xl:ml-12 backdrop-filter backdrop-blur-lg">
          {/* Text Wrapper */}
          <div className="flex flex-col p-12 font-lora md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
              {spot}
            </h2>
            <p className="mt-4">
              {description}
            </p>

            <p className="text-gray-500 mt-5 flex gap-2 items-center text-sm">
            <FaLocationArrow />{location}, {country}
            </p>
            <p className="text-gray-500 gap-2 flex items-center text-sm">
            Visited since last year: <FaEye /> {number}
            </p>
            <p className="text-gray-500 gap-2 flex items-center text-sm">
            <FaRegClock /> For {time}
            </p>
            <p className="text-gray-500 flex items-center gap-2 text-sm">
            <MdOutlinePriceCheck />price of {price} $ Only
            </p>
            <p className="text-gray-500 flex items-center gap-2 text-sm">
            <CiCloudSun /> {season}
            </p>
            <p className="text-gray-500 flex items-center gap-2 text-sm">
            <MdBookmarkAdded /> Added by {name}
            </p>
            <p className="text-gray-500 flex items-center gap-2 text-sm">
            <MdEmail /> Email: {email}
            </p>
            {/* Button Container */}
            <div className="mt-8">
              <Link to='/'
                href="#"
                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
              >
                Home
              </Link>
            </div>
          </div>
          
        </div>
        
      </div>
        </div>
    );
};

export default ViewDetails;