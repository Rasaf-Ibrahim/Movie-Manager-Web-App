import { createBrowserRouter } from "react-router-dom";

// pages
import LANDING___PAGE from "@/pages/_landing/_page";
import NOT_FOUND___PAGE from "@/pages/_not-found/_page";
import PRIVACY_POLICY___PAGE from "@/pages/privacy-policy/_page";
import TERMS_OF_SERVICE___PAGE from "@/pages/terms-of-service/_page";



// all routes
const allRoutes = createBrowserRouter([


    /* ✅✅ Accessible to every user ✅✅  */


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


    /* 🍔 Privacy Policy */
    {
        path: "/privacy-policy",
        element: (
            <PRIVACY_POLICY___PAGE />

        )
    },


    /* 🍔 Terms of Service */

    {
        path: "/terms-of-service",
        element: (
            <TERMS_OF_SERVICE___PAGE />
        )
    },





   

])



export default allRoutes