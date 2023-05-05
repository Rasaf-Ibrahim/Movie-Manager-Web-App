import { Helmet, HelmetProvider } from "react-helmet-async";
import SIGN_UP___COMPONENT from "./page-specific-components/signup";




export default function SIGN_UP___PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Sign Up</title>
                </Helmet>

                {/* Component */}
                <SIGN_UP___COMPONENT />

            </HelmetProvider>
        </>
    )
}