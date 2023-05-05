import { Helmet, HelmetProvider } from "react-helmet-async";
;
import SEND_PASSWORD_RESET_MAIL___COMPONENT from "./page-specific-components/send-password-reset-mail";


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function SEND_PASSWORD_RESET_MAIL___PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Send Password Reset Mail</title>
                </Helmet>

                {/* Component */}
                <SEND_PASSWORD_RESET_MAIL___COMPONENT />

            </HelmetProvider>
        </>
    )
}