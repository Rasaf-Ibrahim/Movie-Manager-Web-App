import { createBrowserRouter } from "react-router-dom";

// pages
import LANDING___PAGE from "@/pages/_landing/_page";



// all routes
const allRoutes = createBrowserRouter([


    /* 🍔 Landing Page */
    {
        path: "/",
        element: <LANDING___PAGE />,
    },


   

])



export default allRoutes