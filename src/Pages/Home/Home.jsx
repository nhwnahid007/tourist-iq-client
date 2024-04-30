import { useLoaderData } from "react-router-dom";
import TouristCard from "../../components/TouristCard/TouristCard";
import Banner from "../../components/Banner/Banner";
import Reviews from "../../components/Reviews/Reviews";
import Testimonial from "../../components/Testimonial/Testimonial";
import CustomerReviews from "../../components/Reviews/CustomerReviews";

import Countries from "../../components/Countries/Countries";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const tourists = useLoaderData();
  const limitedTourists = tourists.slice(0, 6);
  return (
    <div>
      <Helmet>
        <title>TouristIQ</title>
      </Helmet>
      <Banner></Banner>

    <div id="tourists" className="grid bg-base-200 lg:grid-cols-2">
        {
            limitedTourists.map(tourist => <TouristCard key={tourist.id} tourist={tourist} ></TouristCard>)
        }
    </div>

     <Countries></Countries>


    <div className="lg:flex mt-10 items-center"><Reviews></Reviews>
    <CustomerReviews></CustomerReviews>
    </div>
    <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
