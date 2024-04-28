import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const Root = () => {
    return (
        <div className="mx-8">
            <Navbar></Navbar>
            <Outlet></Outlet> 
        </div>
    );
};

export default Root;