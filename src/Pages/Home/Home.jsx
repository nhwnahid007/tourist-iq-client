import { useLoaderData } from "react-router-dom";
import TouristCard from "../../components/TouristCard/TouristCard";

const Home = () => {
  const tourists = useLoaderData();
  return (
    <div>
      <h1>This is home </h1>
      <p>{tourists.length}</p>

    <div className="grid lg:grid-cols-2">
        {
            tourists.map(tourist => <TouristCard key={tourist.id} tourist={tourist} ></TouristCard>)
        }
    </div>
      
    </div>
  );
};

export default Home;
