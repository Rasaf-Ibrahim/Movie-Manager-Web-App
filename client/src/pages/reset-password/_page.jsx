import { Helmet, HelmetProvider } from "react-helmet-async";
import RESET_PASSWORD___COMPONENT from "./page-specific-components/reset-password";


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function RESET_PASSWORD___PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Reset Password</title>
                </Helmet>

                {/* Component */}
                <RESET_PASSWORD___COMPONENT />

            </HelmetProvider>
        </>
    )
}