import { Helmet, HelmetProvider } from "react-helmet-async";
import MAIN_LAYOUT___COMPONENT from "@/components/layout/main-layout";
import PROFILE___COMPONENT from "./page-specific-components/profile";


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function PROFILE___PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Profile</title>
                </Helmet>

                {/* Component */}
                <MAIN_LAYOUT___COMPONENT>
                    <PROFILE___COMPONENT />
                </MAIN_LAYOUT___COMPONENT>

            </HelmetProvider>
        </>
    )
}