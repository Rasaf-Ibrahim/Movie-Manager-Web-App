import { Helmet, HelmetProvider } from "react-helmet-async";
import MAIN_LAYOUT___COMPONENT from "@/components/layout/main-layout";
import LANDING___COMPONENT from "./page-specific-components/landing";



export default function LANDING___PAGE() {

    return (
        <>
            <HelmetProvider>


                <Helmet>
                    <title>Movie Manager</title>
                </Helmet>

                {/* Component */}
                <MAIN_LAYOUT___COMPONENT 
                    navbar_margin_bottom = {'0.02rem'}
                    footer_margin_top  = {'1rem'}  
                >

                    <LANDING___COMPONENT />

                </MAIN_LAYOUT___COMPONENT>
              


            </HelmetProvider>
        </>
    )
}





