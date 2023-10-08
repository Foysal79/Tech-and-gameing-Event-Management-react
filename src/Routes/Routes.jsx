import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Services from "../Pages/Services";
import Home from "../Home/Home";
import PopularEvent from "../Pages/PopularEvent";
import Error from "../Pages/Error";
import RecentEvent from "../Pages/WelcomeTo";
import Register from "../Pages/Register";
import Login from "../Pages/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>, 
      errorElement: <Error></Error>,
      children: [
        {
           path: "/",
           element: <Home></Home>,
           loader: () => fetch('/data.json'),
        },
        {
            path: "/Service",
            element: <Services></Services>,
            loader: () => fetch('/data.json')
        },
        {
            path:"/popularEvent",
            element: <PopularEvent></PopularEvent>,
            loader: () => fetch('/data.json'),
        },
        {
          path: '/about',
          element: <RecentEvent></RecentEvent>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
        
      ]
    },
  ]);

export default router;