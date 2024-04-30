import { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";
import ViewCountryDetails from "../ViewCountryDetails.jsx/ViewCountryDetails";

const ViewCountry = () => {
  const { name } = useParams();
  const loadecountries =  useLoaderData()
  const [countries, setCountries] = useState([]);
console.log(loadecountries)
  useEffect(() => {
    fetch('http://localhost:5000/tourist') // Corrected URL
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
      <p>View country</p>
      
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
