'use client'

/*__________________________________________

 ✅ import 
____________________________________________*/
// types
import { type_of_obj_with_any_values } from '@/types/commonly-used-types'

// config
import config_obj from '@/config';

// store
import { auth_store } from '@/store/auth-store';

// router
import ROUTER_NAVIGATION___COMPONENT from '@/utils/route/router-navigation';

// style
import { styled } from '@mui/material/styles';
import CONTAINER___STYLED from '@/components/styled/for-any-project/container';


// utils
import css_media_queries from '@/styles/css-utils/media-queries';
import responsiveSpacing from '@/styles/css-utils/responsive-spacing';


// components
import { Typography, Button } from '@mui/material';

import SVG_ILLUSTRATION_HEADER___COMPONENT from './_svg_illustration-hero';





/*__________________________________________

 ✅ Functional Component 
____________________________________________*/
export default function HERO___COMPONENT() {


    // 🍪 get the state properties 
    const { user_state } = auth_store(state => ({
        user_state: state?.user_state
    }))



    // ✅ JSX
    return (


        <CONTAINER___STYLED
            elevation={{
                light: {
                    value: 1
                },
                dark: {
                    value: 1,
                    inset: true
                },
            }}

            background_color={{ light: 0, dark: 0 }}>

            <CALL_TO_ACTION_SECTION___STYLED>


                <EVERYTHING_BUT_THE_ILLUSTRATION___STYLED>


                    <HEADER_TITLE___STYLED>
                        Your Ultimate Cinematic Manager
                    </HEADER_TITLE___STYLED>

                    <HEADER_SUBTITLE___STYLED>
                        Effortlessly manage movies and series: Search, explore trending and top-rated selections, and  organize your bookmarks into categories.
                    </HEADER_SUBTITLE___STYLED>


                    {/* Only show the "Register Now" button if the user is not logged in */}
                    {user_state.signed_out &&

                        <ROUTER_NAVIGATION___COMPONENT href={config_obj.page_path.sign_up}>

                            <Button variant='contained'>
                                Register Now
                            </Button>

                        </ROUTER_NAVIGATION___COMPONENT>

                    }


                    {user_state.signed_in_or_up &&

                        <ROUTER_NAVIGATION___COMPONENT href={config_obj.page_path.movie}>

                            <Button variant='contained'>
                                Explore Movies
                            </Button>

                        </ROUTER_NAVIGATION___COMPONENT>

                    }


                </EVERYTHING_BUT_THE_ILLUSTRATION___STYLED>


                <WRAPPER_OF_ILLUSTRATION___STYLED>


                    <SVG_ILLUSTRATION_HEADER___COMPONENT
                        background_is_always_light={false}
                        background_is_always_dark={false}
                        background_has_opposite_theme_color=
                        {false}
                    />


                </WRAPPER_OF_ILLUSTRATION___STYLED>



            </CALL_TO_ACTION_SECTION___STYLED>


        </CONTAINER___STYLED>


    )
}







/*__________________________________________

✅ Styled Components for 
<HERO___COMPONENT/>
____________________________________________*/




/* 🥔 */
const CALL_TO_ACTION_SECTION___STYLED = styled('div')(

    ({ theme }) => `


    ${responsiveSpacing.styledComponent.cssSyntax('padding', 2)};
    

    ${/* grid & text-align */ ''}
    display:grid;
    justify-items: center;
    align-items:center;

    ${responsiveSpacing.styledComponent.cssSyntax('gap', 2)}


    ${css_media_queries.name_xs_sm_md('text-align', 'center', 'center', 'left')}


    ${css_media_queries.name_xs_sm_md('grid-template-columns', '1fr', '1fr', '1fr 1fr')}

`)




/* 🥔 */
const EVERYTHING_BUT_THE_ILLUSTRATION___STYLED = styled('div')(

    ({ theme }) => `

    ${css_media_queries.name_xs_sm_md_lg('max-width', '18rem', '26rem', '26rem', '30rem')}
      
`)



/* 🥔 */
const HEADER_TITLE___STYLED = styled((props: type_of_obj_with_any_values) =>

    <Typography variant='h4' {...props} />
)

    (({ theme }) => `

  margin-bottom: 1rem;
  font-family: 'Yatra One', cursive;
    
`)



/* 🥔 */
const HEADER_SUBTITLE___STYLED = styled((props: type_of_obj_with_any_values) =>

    <Typography variant='body2' {...props} />
)

    (({ theme }) => `

  margin-bottom: 1.75rem;
  font-family: 'Source Code Pro', monospace;
    
`)






/* 🥔 */
const WRAPPER_OF_ILLUSTRATION___STYLED = styled('div')(

    ({ theme }) => `

    ${css_media_queries.name_xs_sm_md_lg('max-width', '18rem', '26rem', '26rem', '30rem')}
      
`)

