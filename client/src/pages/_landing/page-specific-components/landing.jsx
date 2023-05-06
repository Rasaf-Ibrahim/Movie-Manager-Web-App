// hook
import { useTheme } from '@mui/material';

// store
import { user_store } from '@/store/user-store';

// styled-components
import { styled } from '@mui/material/styles';
import ROUTER_LINK___STYLED from '@/styles/styled-components/router-link/router-link.js';

// utils
import media_queries from '@/utils/media-queries/media-queries';
import responsiveSpacing from '@/utils/responsive-spacing/responsive-spacing';


// components
import { Typography, Button } from '@mui/material';

import SVG_ILLUSTRATION_HEADER___COMPONENT from './svg-jsx/svg-illustration-header';
import SVG_ILLUSTRATION_MOVIE___COMPONENT from './svg-jsx/svg-illustration-movie';




/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function LANDING___COMPONENT() {


    // 🍪 get the state properties 
    const { user_info } = user_store(state => ({
        user_info: state?.user_info
    }))



    /*-------------------------------------------------------------------
     ✅ JSX
    ----------------------------------------------------------------------*/
    return (


        <CALL_TO_ACTION_SECTION___STYLED>


            <EVERYTHING_BUT_THE_ILLUSTRATION___STYLED>


                <HEADER_TITLE___STYLED>
                    Your Personal Movie Manager App
                </HEADER_TITLE___STYLED>

                <HEADER_SUBTITLE___STYLED>
                    Search any movie, know details info of a movie, bookmark your favorite movie and more!
                </HEADER_SUBTITLE___STYLED>


                {/* only show the sign up button if the user is not logged in */}
                {!user_info &&
                    <ROUTER_LINK___STYLED to='/sign-up'>

                        <REGISTER_BUTTON___STYLED>
                            Sign Up Now
                        </REGISTER_BUTTON___STYLED>

                    </ROUTER_LINK___STYLED>
                }


            </EVERYTHING_BUT_THE_ILLUSTRATION___STYLED>


            <WRAPPER_OF_ILLUSTRATION___STYLED>


                <SVG_ILLUSTRATION_MOVIE___COMPONENT
                    background_is_always_light={false}
                    background_is_always_dark={false}
                    background_has_opposite_theme_color=
                    {false}
                />


            </WRAPPER_OF_ILLUSTRATION___STYLED>



        </CALL_TO_ACTION_SECTION___STYLED>




    )
}







/*-------------------------------------------------------------------
✅ Styled Components for <HEADER_1___COMPONENT/>
----------------------------------------------------------------------*/




/* 🍔 */
const CALL_TO_ACTION_SECTION___STYLED = styled('div')(

    ({ theme }) => `

    background-color: ${theme.palette.mode === 'dark' ? theme.palette.background.variation : theme.palette.primary.static_variant.light_1};


    ${responsiveSpacing.styledComponent.cssSyntax('padding', 2)};
    

    ${/* grid & text-align */ ''}
    display:grid;
    justify-items: center;
    align-items:center;

    ${responsiveSpacing.styledComponent.cssSyntax('gap', 2)}


    ${media_queries.name_xs_sm_md('text-align', 'center', 'center', 'left')}


    ${media_queries.name_xs_sm_md('grid-template-columns', '1fr', '1fr', '1fr 1fr')}

`)




/* 🍔 */
const EVERYTHING_BUT_THE_ILLUSTRATION___STYLED = styled('div')(

    ({ theme }) => `

    ${media_queries.name_xs_sm_md_lg('max-width', '18rem', '26rem', '26rem', '30rem')}
      
`)



/* 🍔 */
const HEADER_TITLE___STYLED = styled((props) =>

    <Typography variant='h3' {...props} />
)

    (({ theme }) => `

  margin-bottom: 1rem;
  font-family: 'Yatra One', cursive;
    
`)



/* 🍔 */
const HEADER_SUBTITLE___STYLED = styled((props) =>

    <Typography variant='body1' {...props} />
)

    (({ theme }) => `

  margin-bottom: 1.75rem;
  font-family: 'Source Code Pro', monospace;
    
`)


/* 🍔 */
const REGISTER_BUTTON___STYLED = styled((props) =>

    <Button variant='contained' {...props} />

)

    (({ theme }) => ` `)





/* 🍔 */
const WRAPPER_OF_ILLUSTRATION___STYLED = styled('div')(

    ({ theme }) => `

    ${media_queries.name_xs_sm_md_lg('max-width', '18rem', '26rem', '26rem', '30rem')}
      
`)


