import { Helmet, HelmetProvider } from "react-helmet-async";
import MAIN_LAYOUT___COMPONENT from "@/components/layout/main-layout";
import MOVIE___COMPONENT from "./page-specific-components/movie";



export default function MOVIE___PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Privacy Policy</title>
                </Helmet>


                {/* Component */}
                <MAIN_LAYOUT___COMPONENT>

                    <MOVIE___COMPONENT />

                </MAIN_LAYOUT___COMPONENT>

            </HelmetProvider>
        </>
    )
}





