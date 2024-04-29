import { useLoaderData } from "react-router-dom";
import TouristCard from "../../components/TouristCard/TouristCard";

const Home = () => {
  const tourists = useLoaderData();
  const limitedTourists = tourists.slice(0, 6);
  return (
    <div>
      <h1>This is home </h1>
      <p>{tourists.length}</p>

    <div className="grid bg-base-200 lg:grid-cols-2">
        {
            limitedTourists.map(tourist => <TouristCard key={tourist.id} tourist={tourist} ></TouristCard>)
        }
    </div>
      
    </div>
  );
};

export default Home;
