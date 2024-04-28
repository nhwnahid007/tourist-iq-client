const AddTouristSpot = () => {
  const handleAddTourist = (event) => {
    event.preventDefault();
    const form = event.target;

    const spot = form.spot.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const price = form.price.value;
    const season = form.season.value;
    const time = form.time.value;
    const number = form.number.value;
    const email = form.email.value; // Corrected typo
    const name = form.name.value;
    const photo = form.photo.value;

    const newTourist = {
      spot,
      country,
      location,
      description,
      price,
      season,
      time,
      number,
      email,
      name,
      photo,
    };
    console.log(newTourist);
  };
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleAddTourist}
        className=" border hover:border-black p-5 backdrop-blur-sm rounded-3xl"
      >
        <h2 className="text-black text-center mb-10"> Add Tourist spot </h2>
        {/* Form name and quantity row */}
        <div className="lg:flex gap-x-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-poppins text-black font-semibold">
                {" "}
                Tourist Spot Name{" "}
              </span>
            </label>

            <input
              className="input input-bordered"
              placeholder="Enter sopt name"
              name="spot"
            />
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text font-poppins text-black font-semibold">
                {" "}
                Country Name{" "}
              </span>
            </label>
            <input
              className="input input-bordered "
              placeholder="Enter country name"
              name="country"
            />
          </div>
        </div>
        {/* Form row end */}

        {/* Form supplier row */}
        <div className="lg:flex gap-x-5 my-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-poppins text-black font-semibold">
                {" "}
                Location{" "}
              </span>
            </label>
            <input
              className="input input-bordered "
              placeholder="Enter location"
              name="location"
            />
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text font-poppins text-black font-semibold">
                Description
              </span>
            </label>
            <input
              className="input input-bordered "
              placeholder="Enter description"
              name="description"
            />
          </div>
        </div>
        {/* Form row end */}

        {/* Form categoty row */}
        <div className="lg:flex gap-x-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-poppins text-black font-semibold">
                {" "}
                Average Cost{" "}
              </span>
            </label>
            <input
              className="input input-bordered "
              placeholder="Enter average cost"
              name="price"
            />
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text font-poppins text-black font-semibold">
                {" "}
                Seasonality{" "}
              </span>
            </label>
            <input
              className="input input-bordered "
              placeholder="Enter season"
              name="season"
            />
          </div>
        </div>
        {/* Form row end */}

        {/* Form categoty row */}
        <div className="lg:flex gap-x-5 my-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-poppins text-black font-semibold">
                {" "}
                Travel time{" "}
              </span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter travel time"
              type="text"
              name="time"
            />
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text font-poppins text-black font-semibold">
                {" "}
                Total Visit per Year{" "}
              </span>
            </label>
            <input
              className="input input-bordered "
              placeholder="Enter total visit per year"
              name="number"
            />
          </div>
        </div>
        {/* Form row end */}

        {/* Form categoty row */}
        <div className="lg:flex gap-x-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-poppins text-black font-semibold">
                {" "}
                User Email{" "}
              </span>
            </label>
            <input
              className="input input-bordered "
              placeholder="Enter your mail"
              name="email"
            />
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text font-poppins text-black font-semibold">
                {" "}
                Your Name{" "}
              </span>
            </label>
            <input
              className="input input-bordered "
              placeholder="Enter your name"
              name="name"
            />
          </div>
        </div>
        {/* Form row end */}

        {/* Form photo url row */}
        <div className="gap-x-5 my-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-poppins text-black font-semibold">
                {" "}
                Photo{" "}
              </span>
            </label>
            <input
              className="input input-bordered "
              placeholder="Enter Photo URL"
              name="photo"
            />
          </div>
        </div>
        {/* Form row end */}
        <input
          className="btn hover:bg-yellow-500 focus:ring-2 focus:ring-green-400 focus:outline-none font-semibold text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out w-full mt-5 bg-[#D2B48C]"
          type="submit"
          value="Add "
        />
      </form>
    </div>
  );
};

export default AddTouristSpot;
