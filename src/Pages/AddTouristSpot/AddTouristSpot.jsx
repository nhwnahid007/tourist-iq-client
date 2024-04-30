import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AddTouristSpot = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
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
    const email = form.email.value; 
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
    //send data to the server\
    fetch("https://tourist-iq-server.vercel.app/tourist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTourist),
    })
      .then((res) => res.json())
      .then((data) => {
        
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Info added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="flex justify-center">
      <Helmet>
        <title>Add Tourist spot</title>
      </Helmet>
      <form
        onSubmit={handleAddTourist}
        className=" border bg-[#F5F7FA] hover:border-black p-5 backdrop-blur-sm rounded-3xl"
      >
        <h2 className="text-black text-3xl font-lora text-center mb-10"> Add Tourist spot </h2>
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
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-poppins text-black font-semibold">
                Country Name
              </span>
            </label>
            <select required className="input input-bordered" name="country">
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
            {
              user?.email? <input className="input input-bordered " readOnly type="text" name="email" placeholder="email" id="" defaultValue={user?.email} /> : <input
              className="input input-bordered "
              placeholder="Enter your mail"
              name="email"
              required
              
            />
            }
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
