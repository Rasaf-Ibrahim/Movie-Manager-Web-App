import { Helmet, HelmetProvider } from "react-helmet-async";
import MAIN_LAYOUT___COMPONENT from "@/components/layout/main-layout";
import SEARCH_MOVIE___COMPONENT from "./page-specific-components/search-movie";



export default function SEARCH_MOVIE___PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Search Movie</title>
                </Helmet>


                {/* Component */}
                <MAIN_LAYOUT___COMPONENT>

                    <SEARCH_MOVIE___COMPONENT />

                </MAIN_LAYOUT___COMPONENT>

            </HelmetProvider>
        </>
    )
}





