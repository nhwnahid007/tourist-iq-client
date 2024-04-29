// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../Style/styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div id="banner">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="rounded-lg w-full lg:h-[775px] object-cover"
              src="https://i.postimg.cc/J4p8XBbX/singapore-2696704-1280.jpg"
              alt=""
            />
            <div className="absolute  inset-0 flex justify-center items-center text-white text-lg font-semibold">
              <div className="text-center">
                <h2 className="text-3xl  md:text-4xl lg:text-5xl leading-tight">
                  Discover Amazing Destinations
                </h2>
                <p className="mt-2 text-lg md:text-xl lg:text-2xl">
                  Explore the worlds wonders with touristIQ
                </p>
                <button className="mt-4 px-6 py-3 bg-yellow-300 text-blue-900 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300">
                <a href="#tourists">Start Exploring</a>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="rounded-lg w-full lg:h-[775px] object-cover"
              src="https://i.postimg.cc/P5fbqNHN/halong-4270460-1280.jpg"
              alt=""
            />
            <div className="absolute  inset-0 flex justify-center items-center text-white text-lg font-semibold">
              <div className="text-center">
                <h2 className="text-3xl  md:text-4xl lg:text-5xl leading-tight">
                  Discover Amazing Destinations
                </h2>
                <p className="mt-2 text-lg md:text-xl lg:text-2xl">
                  Explore the worlds wonders with touristIQ
                </p>
                <button className="mt-4 px-6 py-3 bg-yellow-300 text-blue-900 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300">
                <a href="#tourists">Start Exploring</a>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="rounded-lg w-full lg:h-[775px] object-cover"
              src="https://i.postimg.cc/L5KCQPWN/cambodia-3464542-1280.jpg"
              alt=""
            />
            <div className="absolute  inset-0 flex justify-center items-center text-white text-lg font-semibold">
              <div className="text-center">
                <h2 className="text-3xl  md:text-4xl lg:text-5xl leading-tight">
                  Discover Amazing Destinations
                </h2>
                <p className="mt-2 text-lg md:text-xl lg:text-2xl">
                  Explore the worlds wonders with touristIQ
                </p>
                <button className="mt-4 px-6 py-3 bg-yellow-300 text-blue-900 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300">
                <a href="#tourists">Start Exploring</a>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="rounded-lg w-full lg:h-[775px] object-cover"
              src="https://i.postimg.cc/RZzVBpkT/kuala-lumpur-1283140-1280.jpg"
              alt=""
            />
            <div className="absolute  inset-0 flex justify-center items-center text-white text-lg font-semibold">
              <div className="text-center">
                <h2 className="text-3xl  md:text-4xl lg:text-5xl leading-tight">
                  Discover Amazing Destinations
                </h2>
                <p className="mt-2 text-lg md:text-xl lg:text-2xl">
                  Explore the worlds wonders with touristIQ
                </p>
                <button className="mt-4 px-6 py-3 bg-yellow-300 text-blue-900 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300">
                  <a href="#tourists">Start Exploring</a>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
