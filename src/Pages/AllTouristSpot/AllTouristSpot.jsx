import { useLoaderData } from "react-router-dom";
import AllTouristsCard from "../../components/AllTouristsCard/AllTouristsCard";


const AllTouristSpot = () => {
    const touristsSpot = useLoaderData()
    
    return (
        <div>
            <h1>All tourist: {touristsSpot.length}</h1>
            <div className="grid bg-base-200 lg:grid-cols-2">
        {
            touristsSpot.map(allTourist => <AllTouristsCard allTourist={allTourist} key={allTourist.id}></AllTouristsCard>)
        }
    </div>
        </div>
    );
};

export default AllTouristSpot;