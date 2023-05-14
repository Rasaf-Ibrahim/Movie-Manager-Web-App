import { Helmet, HelmetProvider } from "react-helmet-async";
import MAIN_LAYOUT___COMPONENT from "@/components/layout/main-layout";
import PROFILE___COMPONENT from "./page-specific-components/profile";
import ONLY_NAVBAR_LAYOUT___COMPONENT from "@/components/layout/only-navbar-layout";


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
                <ONLY_NAVBAR_LAYOUT___COMPONENT>
                    <PROFILE___COMPONENT />
                </ONLY_NAVBAR_LAYOUT___COMPONENT>

            </HelmetProvider>
        </>
    )
}