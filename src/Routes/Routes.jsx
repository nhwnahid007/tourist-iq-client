import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import AllTouristSpot from "../Pages/AllTouristSpot/AllTouristSpot";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyList from "../Pages/MyList/MyList";
import Update from "../Pages/Update/Update";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/tourist')
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/addTouristSpot',
          element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
        },
        {
          path: '/allTouristSpot',
          element: <AllTouristSpot></AllTouristSpot>,
          loader: () => fetch('http://localhost:5000/tourist')
        },
        {
          path: "/tourist/:_id",
          element: (
            <PrivateRoute>
              <ViewDetails></ViewDetails>
            </PrivateRoute>
          ),
          loader: () => fetch("http://localhost:5000/tourist"),
        },

        {
          path: 'myList',
          element:<PrivateRoute><MyList></MyList></PrivateRoute>
        },
        {
          path: '/Update/:_id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader: () => fetch("http://localhost:5000/tourist"),
        }
      ]
    },
    
  ]);

export default router;