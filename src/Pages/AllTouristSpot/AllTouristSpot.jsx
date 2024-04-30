import { useState } from "react";
import AllTouristsCard from "../../components/AllTouristsCard/AllTouristsCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllTouristSpot = () => {
    const touristsSpot = useLoaderData();
    const [sortOrder, setSortOrder] = useState("asc"); 

   
    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const sortedTourists = [...touristsSpot].sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;
        
        if (sortOrder === "asc") {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });

    return (
        <div className="flex flex-col items-center">
            <Helmet>
        <title>All Tourist Spot</title>
      </Helmet>
            <div className="mb-4">
                {/* Dropdown menu for sorting */}
                <select
                    className="px-4 py-2 border border-gray-300 rounded-md bg-white"
                    value={sortOrder}
                    onChange={handleSortChange}
                >
                    
                    <option value="asc">Low To High</option>
                    <option value="desc">High To Low</option>
                </select>
            </div>
            
            <div className="grid bg-base-200 lg:grid-cols-2">
                {sortedTourists.map(allTourist => (
                    <AllTouristsCard key={allTourist.id} allTourist={allTourist} />
                ))}
            </div>
        </div>
    );
};

export default AllTouristSpot;
