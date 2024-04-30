import { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";
import ViewCountryDetails from "../ViewCountryDetails.jsx/ViewCountryDetails";
import { Helmet } from "react-helmet-async";

const ViewCountry = () => {
  const { name } = useParams();
  const loadecountries =  useLoaderData()
  const [countries, setCountries] = useState([]);
console.log(loadecountries)
  useEffect(() => {
    fetch('https://tourist-iq-server.vercel.app/tourist') // Corrected URL
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCountries(data);
      });
  }, []);

  console.log(name);
console.log(countries)
// const filterCountry = loadecountries.find(country => country.name === name)
const filterCountry = countries.filter(country => country.country === name)
console.log(filterCountry)
console.log(filterCountry)
  return (
    <div>
      <Helmet>
        <title>View Country</title>
      </Helmet>
      
      {/* Display country data here */}
      <div className="grid bg-base-200 lg:grid-cols-2">
        {
          filterCountry.map(country => <ViewCountryDetails countries={country} key={country._id}></ViewCountryDetails> )
        }
      </div>
    </div>
  );
};

export default ViewCountry;
