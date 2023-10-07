import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Services from "../Pages/Services";
import Home from "../Home/Home";
import PopularEvent from "../Pages/PopularEvent";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>, 
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
        }
      ]
    },
  ]);

export default router;