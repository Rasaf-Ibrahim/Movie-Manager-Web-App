// router
import { RouterProvider } from "react-router-dom";
import allRoutes from "@/routes/all-routes";

// react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// useTheme hook
import { useTheme } from '@mui/material/styles';
import NETWORK_STATUS___COMPONENT from "@/components/reusable/for-any-project/network-status/network-status";
import WAKE_UP_THE_SERVER from "./components/reusable/for-any-project/wake-up-the-server/wake-up-the-server";


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function App() {

    // useTheme
    const theme = useTheme()

    return (

        <>

            {/*🚀 Router  */}
            <RouterProvider router={allRoutes} />


            <NETWORK_STATUS___COMPONENT />

            <WAKE_UP_THE_SERVER/>


            {/*🚀 ToastContainer */}
            {theme.palette.mode === 'dark' ?

                <ToastContainer theme='dark' position='bottom-right' autoClose={5000} />

                :

                <ToastContainer position='bottom-right' autoClose={5000} />
            }


        </>


    )

}