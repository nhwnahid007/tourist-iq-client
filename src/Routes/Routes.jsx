import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";



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
          element: <AddTouristSpot></AddTouristSpot>
        },
      ]
    },
    
  ]);

export default router;