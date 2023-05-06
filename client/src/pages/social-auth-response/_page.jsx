import { Helmet, HelmetProvider } from "react-helmet-async";
import SOCIAL_AUTH_RESPONSE___COMPONENT from "./page-specific-components/social-auth-response";
;


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function SOCIAL_AUTH_RESPONSE___PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Social Authentication Response</title>
                </Helmet>

                {/* Component */}
                <SOCIAL_AUTH_RESPONSE___COMPONENT />

            </HelmetProvider>
        </>
    )
}