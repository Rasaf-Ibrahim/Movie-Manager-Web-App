import { Helmet, HelmetProvider } from "react-helmet-async";
import MAIN_LAYOUT___COMPONENT from "@/components/layout/main-layout";
import PRIVACY_POLICY___COMPONENT from "./page-specific-components/privacy-policy";



export default function PRIVACY_POLICY___PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Privacy Policy</title>
                </Helmet>


                {/* Component */}
                <MAIN_LAYOUT___COMPONENT 
                    navbar_margin_bottom = {'2.5rem'}
                    footer_margin_top  = {'2rem'}  
                >

                    <PRIVACY_POLICY___COMPONENT />

                </MAIN_LAYOUT___COMPONENT>

            </HelmetProvider>
        </>
    )
}





