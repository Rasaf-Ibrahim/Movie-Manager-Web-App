import { Helmet, HelmetProvider } from "react-helmet-async";
import BOOKMARKED_MOVIES___COMPONENT from "./page-specific-components/bookmarked-movies";
import ONLY_NAVBAR_LAYOUT___COMPONENT from "@/components/layout/only-navbar-layout";



export default function BOOKMARKED_MOVIES___PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Bookmarked Movies</title>
                </Helmet>


                {/* Component */}
                <ONLY_NAVBAR_LAYOUT___COMPONENT footer_margin_top='1rem'>

                    <BOOKMARKED_MOVIES___COMPONENT />

                </ONLY_NAVBAR_LAYOUT___COMPONENT>

            </HelmetProvider>
        </>
    )
}





