import { useContext } from "react";
import { AuthContext } from "../ContexApi/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    
    const location = useLocation();
    if(loading)
    {
        return <h2 className="text-8xl font-medium mt-24 ml-20"><span className="loading loading-ring loading-lg "></span></h2>
    }
    if(user)
    {
        return children;
    }
    return <Navigate state={location.pathname} to='/login' ></Navigate>
};

export default PrivateRoute;