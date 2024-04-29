import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const handleSignOut = () => {
        logOut()
        .then(()=>{
          console.log('logged out')
          swal("Good job!", "Successfully Logged Out!", "success");
        })
      };
    const navLinks = (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allTouristSpot">All Tourists spot</NavLink>
          </li>
          <li>
            <NavLink to="/addTouristSpot">Add Tourist Spot</NavLink>
          </li>
          <li>
            <NavLink to="/MyList">My List</NavLink>
          </li>
          
          
        </>
      );
  return (
    <div className="navbar mt-2 bg-base-100">
      <div className="navbar-start z-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* li */}
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost flex items-center text-xl">
          {" "}
          <img
            className="w-7"
            src="https://i.ibb.co/MkNS6bT/tourist-IQ.png"
            alt=""
          />{" "}
          <span className="hidden z-0 md:flex">TouristIQ</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-2 menu-horizontal px-1">
          {/*  */}
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <Link
              to="/user"
              className="tooltip z-10 tooltip-left "
              data-tip={user?.displayName}
            >
              <img
                className="w-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
                src={
                  user.photoURL ||
                  "https://i.ibb.co/FHfFTWX/User-Profile-PNG-Free-Download.png"
                }
                alt="userPhoto"
              />
            </Link>

            <button onClick={handleSignOut} className="btn font-bold">
              Logout
            </button>
          </>
        ) : (
          <div className="flex gap-5">
            <Link to="/login" className="btn">
              Sign in
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
