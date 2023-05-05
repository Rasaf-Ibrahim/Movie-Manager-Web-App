import { createBrowserRouter } from "react-router-dom";

// pages
import LANDING___PAGE from "@/pages/_landing/_page";
import NOT_FOUND___PAGE from "@/pages/_not-found/_page";



// all routes
const allRoutes = createBrowserRouter([


    /* 🍔 Landing Page */
    {
        path: "/",
        element: <LANDING___PAGE />,
    },

  
    /* 🍔 Not Found Page */
    {
        path: "*",
        element: <NOT_FOUND___PAGE />,
    },



   

])



export default allRoutes