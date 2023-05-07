import { Helmet, HelmetProvider } from "react-helmet-async";
import MAIN_LAYOUT___COMPONENT from "@/components/layout/main-layout";
import MOVIE_DETAILS___COMPONENT from "./page-specific-components/movie-details";



export default function MOVIE_DETAILS___PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Movie Details</title>
                </Helmet>


                {/* Component */}
                <MAIN_LAYOUT___COMPONENT>

                    <MOVIE_DETAILS___COMPONENT />

                </MAIN_LAYOUT___COMPONENT>

            </HelmetProvider>
        </>
    )
}





