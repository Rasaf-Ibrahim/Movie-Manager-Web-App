import { Helmet, HelmetProvider } from "react-helmet-async";
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
                <VERIFY_EMAIL___COMPONENT/>

            </HelmetProvider>
        </>
    )
}