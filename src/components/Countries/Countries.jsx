import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://tourist-iq-server.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);
  console.log(countries);

  return (
   <div>
     <h1 className="text-center my-5 text-5xl font-lora">Countries</h1>
      <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 gap-5 lg:container lg:mx-auto justify-items-center">
       
        {countries.map((country) => (
          <Link to={`/countries/${country.name}`} key={country._id}>
            <div className=" my-anchor-element card card-side md:w-[500px] md:h-[400px] h-[300px] hover:scale-105 hover:cursor-pointer bg-base-100 shadow-xl">
            
              <figure>
                <img
                  className=" md:w-[500px] w-[300px]  mx-3 h-full object-cover"
                  src={country.image}
                  alt="Movie"
                />
              </figure>
              <div className="card-body grid">
                <h2 className="card-title font-lora">{country.name}</h2>
                <p>{country.details}</p>
                <div className="card-actions justify-end">
                  
                </div>
              </div>
            </div>
          </Link>



        ))}
      </div>
   </div>
  );
};

export default Countries;
