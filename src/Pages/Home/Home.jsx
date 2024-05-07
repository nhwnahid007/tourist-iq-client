import { useLoaderData } from "react-router-dom";
import TouristCard from "../../components/TouristCard/TouristCard";
import Banner from "../../components/Banner/Banner";
import Reviews from "../../components/Reviews/Reviews";
import Testimonial from "../../components/Testimonial/Testimonial";
import CustomerReviews from "../../components/Reviews/CustomerReviews";

import Countries from "../../components/Countries/Countries";
import { Helmet } from "react-helmet-async";
import Title from "../../components/Title/Title";

const Home = () => {
  const tourists = useLoaderData();
  const limitedTourists = tourists.slice(0, 6);
  return (
    <div  data-aos="fade-up"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-anchor-placement="top-center">
      <Helmet>
        <title>TouristIQ</title>
      </Helmet>
      <div
       
        className="flex justify-center items-center"
      >
        <Title></Title>
      </div>
      <Banner></Banner>

      <div id="tourists" className="grid bg-base-200 lg:grid-cols-2">
        {limitedTourists.map((tourist) => (
          <TouristCard key={tourist.id} tourist={tourist}></TouristCard>
        ))}
      </div>

      <Countries></Countries>

      <div className="lg:flex mt-10 justify-center items-center">
        <div className="mx-auto"><Reviews></Reviews></div>
        <div className="mx-auto"><CustomerReviews></CustomerReviews></div>
      </div>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
