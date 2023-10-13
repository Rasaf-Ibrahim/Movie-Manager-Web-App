
/*__________________________________________

 ✅ import 
____________________________________________*/

// component
import DYNAMIC___LAYOUT from "@/components/layouts/dynamic-layout/dynamic-layout"
import LOADING_SPINNER___COMPONENT from "@/components/reusable/for-any-project/loading-spinner/loading-spinner"


// dynamic component import
import dynamic from 'next/dynamic'

const BOOKMARK___COMPONENT = dynamic(
    () => import('./_bookmark'),
    {
        ssr: true,
        loading: () => <LOADING_SPINNER___COMPONENT full_screen={true} />,
    }
)


/*__________________________________________

 ✅ Metadata 
____________________________________________*/
export const metadata = {
    title: 'Bookmark',
}


/*__________________________________________

 ✅ Functional Component 
____________________________________________*/
export default function BOOKMARK___PAGE() {

    return (

        <DYNAMIC___LAYOUT 
            auth_layout={true}
            no_navigation_drawer={true}>

            <BOOKMARK___COMPONENT />

        </DYNAMIC___LAYOUT>
    )
}