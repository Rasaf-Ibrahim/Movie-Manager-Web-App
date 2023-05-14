import { Helmet, HelmetProvider } from "react-helmet-async";
import MAIN_LAYOUT___COMPONENT from "@/components/layout/main-layout";
import SEARCH_MOVIE___COMPONENT from "./page-specific-components/search-movie";
import ONLY_NAVBAR_LAYOUT___COMPONENT from "@/components/layout/only-navbar-layout";



export default function SEARCH_MOVIE___PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Search Movie</title>
                </Helmet>


                {/* Component */}
                <ONLY_NAVBAR_LAYOUT___COMPONENT>

                    <SEARCH_MOVIE___COMPONENT />

                </ONLY_NAVBAR_LAYOUT___COMPONENT>

            </HelmetProvider>
        </>
    )
}





