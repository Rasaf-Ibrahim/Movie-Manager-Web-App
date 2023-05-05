import { Helmet, HelmetProvider } from "react-helmet-async";
import MAIN_LAYOUT___COMPONENT from "@/components/layout/main-layout";
import TERMS_OF_SERVICE___COMPONENT from "./page-specific-components/terms-of-service";



export default function TERMS_OF_SERVICE___PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Terms of Service</title>
                </Helmet>


                {/* Component */}
                <MAIN_LAYOUT___COMPONENT 
                    navbar_margin_bottom = {'2.5rem'}
                    footer_margin_top  = {'2rem'}  
                >

                    <TERMS_OF_SERVICE___COMPONENT />

                </MAIN_LAYOUT___COMPONENT>

            </HelmetProvider>
        </>
    )
}





