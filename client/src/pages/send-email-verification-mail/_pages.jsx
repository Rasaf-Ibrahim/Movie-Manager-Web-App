import { Helmet, HelmetProvider } from "react-helmet-async";
import SEND_EMAIL_VERIFICATION_MAIL___COMPONENT from "./page-specific-components/send-email-verification-mail";


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function SEND_EMAIL_VERIFICATION_MAIL___PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Send Email Verification Mail</title>
                </Helmet>

                {/* Component */}
                <SEND_EMAIL_VERIFICATION_MAIL___COMPONENT />

            </HelmetProvider>
        </>
    )
}