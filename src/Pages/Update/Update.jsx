
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Update = () => {
    const {user} =useContext(AuthContext)
    const tourists = useLoaderData()
    const {_id} = useParams()
    console.log(_id)
    const touristData = tourists.find((tourist) => tourist._id === _id);
    console.log(touristData)
    const {
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
      } = touristData;
 
 
  console.log(touristData)


  const handleUpdateTourist = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedSpot = form.spot.value;
    const updatedCountry = form.country.value;
    const updatedLocation = form.location.value;
    const updatedDescription = form.description.value;
    const updatedPrice = form.price.value;
    const updatedSeason = form.season.value;
    const updatedTime = form.time.value;
    const updatedNumber = form.number.value;
   
    const updatedPhoto = form.photo.value;

    const updatedTourist = {
      spot: updatedSpot,
      country: updatedCountry,
      location: updatedLocation,
      description: updatedDescription,
      price: updatedPrice,
      season: updatedSeason,
      time: updatedTime,
      number: updatedNumber,
      email: email, // Assuming email and name are obtained from the original tourist data
      name: name,
      photo: updatedPhoto,
    };
    fetch(`http://localhost:5000/tourist/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTourist),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Tour Updated successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };
  return (
    <div>
      <h1>Update</h1>
      <div className="flex justify-center">
        <form
          onSubmit={handleUpdateTourist}
          className=" border bg-[#F5F7FA] hover:border-black p-5 backdrop-blur-sm rounded-3xl"
        >
          <h2 className="text-black text-3xl font-lora text-center mb-10">
            {" "}
            Update Tourist spot: {spot}
          </h2>
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
                defaultValue={spot}
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-poppins text-black font-semibold">
                  Country Name
                </span>
              </label>
              <select required className="input input-bordered" name="country" defaultValue={country}>
                
                <option value="Bangladesh">Bangladesh</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Singapore">Singapore</option>
                <option value="Thailand">Thailand</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Cambodia">Cambodia</option>
              </select>
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
                defaultValue={location}
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
                defaultValue={description}
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
                defaultValue={price}
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
                defaultValue={season}
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
                defaultValue={time}
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
                defaultValue={number}
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
              {user?.email ? (
                <input
                  className="input input-bordered "
                  readOnly
                  type="text"
                  name="email"
                  placeholder="email"
                  id=""
                  defaultValue={user?.email}
                />
              ) : (
                <input
                  className="input input-bordered "
                  placeholder="Enter your mail"
                  name="email"
                  required
                />
              )}
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
                defaultValue={name}
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
                defaultValue={photo}
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
    </div>
  );
};

export default Update;
