import { Helmet, HelmetProvider } from "react-helmet-async";
import MAIN_LAYOUT___COMPONENT from "@/components/layout/main-layout";
import VERIFY_EMAIL___COMPONENT from "./page-specific-components/verify-email";


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function VERIFY_EMAIL___PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Verify Email</title>
                </Helmet>

                {/* Component */}
                <MAIN_LAYOUT___COMPONENT>
                    <VERIFY_EMAIL___COMPONENT />
                </MAIN_LAYOUT___COMPONENT>

            </HelmetProvider>
        </>
    )
}