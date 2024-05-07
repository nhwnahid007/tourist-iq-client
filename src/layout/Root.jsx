import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../components/Footer/Footer";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Root = () => {
    return (
        <div>
            <div className="mx-8">
                <Navbar></Navbar>
                <Outlet></Outlet> 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;