/*__________________________________________

 ✅ import 
____________________________________________*/

// component
import DYNAMIC___LAYOUT from "@/components/layouts/dynamic-layout/dynamic-layout"
import LOADING_SPINNER___COMPONENT from "@/components/reusable/for-any-project/loading-spinner/loading-spinner"
import ROUTE_PROTECTION___COMPONENT from "@/utils/route/protection/route-protection"


// dynamic component import
import dynamic from 'next/dynamic'

const MOVIE___COMPONENT = dynamic(
    () => import('./_movie'),
    {
        ssr: true,
        loading: () => <LOADING_SPINNER___COMPONENT full_screen={true} />,
    }
)



/*__________________________________________

 ✅ Metadata 
____________________________________________*/
export const metadata = {
    title: 'Movie',
}


/*__________________________________________

 ✅ Functional Component 
____________________________________________*/
export default function MOVIE___PAGE() {

    return (

        <ROUTE_PROTECTION___COMPONENT
            can_access="signed_in_and_verified_user"
        >

            <DYNAMIC___LAYOUT
                auth_layout={true}
                no_navigation_drawer={true}>

                <MOVIE___COMPONENT />

            </DYNAMIC___LAYOUT>

        </ROUTE_PROTECTION___COMPONENT>
    )
}