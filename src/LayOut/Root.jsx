import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../Pages/NavBar";
import Services from "../Pages/Services";
import SimpleSlider from "../Pages/Slider";
import Footer from "../Pages/Footer";
import Copyright from "../Pages/Copyright";


const Root = () => {
    return (
        <div className="font-ral">
            
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Copyright></Copyright>
        </div>
    );
};

export default Root;