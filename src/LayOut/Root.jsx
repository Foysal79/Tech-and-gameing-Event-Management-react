import { Outlet } from "react-router-dom";

import NavBar from "../Pages/NavBar";

import Footer from "../Pages/Footer";
import Copyright from "../Pages/Copyright";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div className="font-ral">
            
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Copyright></Copyright>
            <Toaster/>
        </div>
    );
};

export default Root;