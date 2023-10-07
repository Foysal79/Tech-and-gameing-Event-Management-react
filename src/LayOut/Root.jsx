import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../Pages/NavBar";
import Services from "../Pages/Services";
import SimpleSlider from "../Pages/Slider";


const Root = () => {
    return (
        <div className="w-11/12 mx-auto mt-4  font-ral">
            
            <NavBar></NavBar>
            <Outlet></Outlet>
            <h1 className="text-5xl">fotter</h1>
        </div>
    );
};

export default Root;