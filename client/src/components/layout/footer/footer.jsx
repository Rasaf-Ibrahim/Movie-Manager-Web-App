// date-fns
import { format } from 'date-fns'

// styled-components
import { styled } from "@mui/material/styles";
import ROUTER_LINK___STYLED from "@/styles/styled-components/router-link/router-link";

// utils
import media_queries from '@/utils/media-queries/media-queries';

// data
import { footer_data } from './data/data';


// components
import { Box, Typography } from "@mui/material";



/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function FOOTER___COMPONENT() {


    return (

        <>
            {Object.keys(footer_data).length !== 0 ?

                <FOOTER_HAS_CONTENT___SECTION />

                :

                <FOOTER_HAS_NO_CONTENT___SECTION />

            }

        </>

    )
}





/*-------------------------------------------------------------------
 ✅ Sections of <FOOTER_1___COMPONENT/> 
----------------------------------------------------------------------*/

/* 🍪 */
const FOOTER_HAS_CONTENT___SECTION = () => {

    return (
        <WRAPPER_OF_FOOTER___STYLED>

            <FOOTER_TOP___SECTION />

            <FOOTER_BOTTOM___SECTION />

        </WRAPPER_OF_FOOTER___STYLED>
    )
}


/* 🍪 */
const FOOTER_HAS_NO_CONTENT___SECTION = () => {

    //current year
    const year = format(new Date(), 'yyyy');


    return (

        <Box sx={(theme) => ({
            backgroundColor: theme.palette.background.variation_1,
            padding: '2rem',
        })}>


            <Typography variant='body2' sx={{ textAlign: 'center' }}>

                &copy; Copyright {` ${year}`} {import.meta.env.VITE_SITE_NAME} | All Rights Reserved

            </Typography>


        </Box>
    )
}




/*-------------------------------------------------------------------
 ✅ Sections of <FOOTER_HAS_CONTENT___SECTION/> 
----------------------------------------------------------------------*/


/* 🍪 */
const FOOTER_TOP___SECTION = () => {


    return (

        <WRAPPER_OF_FOOTER_TOP___STYLED>


            {/* Every section is optional, depending on the 'footer_data' object */}

            {footer_data?.basic &&

                <SITE_INFO___SECTION />
            }


            {footer_data?.groups_of_link &&

                <GROUPS_OF_LINK___SECTION />
            }


            {footer_data?.social_accounts &&

                <SOCIAL_ICONS___SECTION />
            }


            {footer_data?.payment_methods_img_src &&

                <PAYMENT_METHODS___SECTION />
            }

        </WRAPPER_OF_FOOTER_TOP___STYLED>

    )
}



/* 🍪 */
const FOOTER_BOTTOM___SECTION = () => {

    //current year
    const year = format(new Date(), 'yyyy');


    return (

        <Box sx={(theme) => ({
            marginTop: '2rem',
            paddingTop: '2rem',

            borderTop: `2px solid ${theme.palette.divider}`,
        })}>


            <Typography variant='body2' sx={{ textAlign: 'center' }}>

                &copy; Copyright {` ${year}`} {import.meta.env.VITE_SITE_NAME} | All Rights Reserved

            </Typography>


        </Box>
    )
}





/*-------------------------------------------------------------------
 ✅ Sections of <FOOTER_TOP___SECTION/> 
----------------------------------------------------------------------*/


/* 🍪 */
const SITE_INFO___SECTION = () => {

    return (


        <WRAPPER_OF_SITE_INFO___STYLED>

            {/* logo component */}
            {footer_data?.basic?.logo_component &&

                <Box sx={{ alignSelf: 'center' }}>
                    <footer_data.basic.logo_component />
                </Box>

            }


            {/* about */}
            {footer_data?.basic?.about &&

                <Typography variant='body2' sx={{ textAlign: 'justify', textAlignLast: 'center' }}>
                    {footer_data.basic.about}
                </Typography>
            }


            {/* address */}
            {footer_data?.basic?.address &&

                <Typography variant='body2' sx={{ textAlign: 'justify' }}>
                    Address: {footer_data.basic.address}
                </Typography>
            }



            {/* helpline */}
            {footer_data?.basic?.helpline &&

                <Typography variant='body2' sx={{ textAlign: 'justify' }}>
                    Helpline: {footer_data.basic.helpline}
                </Typography>
            }


            {/* available */}
            {footer_data?.basic?.available &&

                <Typography variant='body2' sx={{ textAlign: 'justify' }}>
                    Available: {footer_data.basic.available}
                </Typography>
            }



        </WRAPPER_OF_SITE_INFO___STYLED>



    )
}




/* 🍪 */

const GROUPS_OF_LINK___SECTION = () => {

    return (

        <>

            {footer_data.groups_of_link.map((group) => (

                <WRAPPER_OF_TITLE_AND_LINKS___STYLED key={group.title}>

                    {/* group title */}
                    <FOOTER_SUB_TITLE___STYLED>
                        {group.title}
                    </FOOTER_SUB_TITLE___STYLED>


                    <WRAPPER_OF_LINKS___STYLED>

                        {/*  all the links of a group */}
                        {group.links.map((link) => (

                            <ROUTER_LINK___STYLED to={link.url} key={link.text}>

                                <Typography variant='body2' sx={{
                                    "&:hover": {
                                        color: "primary.dark",
                                    }
                                }}>
                                    {link.text}
                                </Typography>

                            </ROUTER_LINK___STYLED>
                        ))}

                    </WRAPPER_OF_LINKS___STYLED>

                </WRAPPER_OF_TITLE_AND_LINKS___STYLED>
            ))}

        </>
    )

}



/* 🍪 */
const SOCIAL_ICONS___SECTION = () => {

    return (

        <Box>

            <FOOTER_SUB_TITLE___STYLED>
                Follow Us
            </FOOTER_SUB_TITLE___STYLED>

            <SOCIAL_ICONS___STYLED>

                {footer_data.social_accounts.map((account) => (

                    <ROUTER_LINK___STYLED to={account.link} key={account.link}>
                        {<account.icon_component />}
                    </ROUTER_LINK___STYLED>
                ))}

            </SOCIAL_ICONS___STYLED>

        </Box>

    )
}




/* 🍪 */
const PAYMENT_METHODS___SECTION = () => {

    return (

        <Box>

            <FOOTER_SUB_TITLE___STYLED>
                Payment Methods
            </FOOTER_SUB_TITLE___STYLED>

            <WRAPPER_OF_PAYMENT_METHODS___STYLED  >

                {footer_data.payment_methods_img_src.map((src) => (


                    <img height="30" src={src} key={src} />

                ))}

            </WRAPPER_OF_PAYMENT_METHODS___STYLED>

        </Box>
    )
}








/*-------------------------------------------------------------------
✅ Styled Components for Multiple Components
----------------------------------------------------------------------*/

/* 🍪 

The following styled component will be used as the root component for some other styled components
*/

const COLUMN_CONTAINER___STYLED = styled((props) =>

    <Box {...props} />

)(({ theme }) => `

    ${/* size */''} 
    max-width: 18rem;

`)


/* 🍪 */

const FOOTER_SUB_TITLE___STYLED = styled((props) =>

    <Typography {...props} variant='body1' />

)(({ theme }) => `
    
     text-align:center;
    font-weight:500;
    margin-bottom: 1.1rem;

`)






/*-------------------------------------------------------------------
✅ Styled Components for 'FOOTER_HAS_CONTENT___SECTION' Component
----------------------------------------------------------------------*/



/* 🍪 */

const WRAPPER_OF_FOOTER___STYLED = styled((props) =>

    <Box {...props} />

)(({ theme }) => `

    ${/* color */''} 
    background-color: ${theme.palette.background.variation_1};

    
   ${/* spacing */''}
   padding:2rem;

   ${media_queries.name_xs_sm_md_lg_xl('paddingRight', '1.5rem', '2rem', '2.5rem', '3rem', '3.5rem')};

   ${media_queries.name_xs_sm_md_lg_xl('paddingLeft', '1.5rem', '2rem', '2.5rem', '3rem', '3.5rem')};

`)




/*-------------------------------------------------------------------
✅ Styled Components for 'FOOTER_TOP___SECTION' Component
----------------------------------------------------------------------*/


/* 🍪 */

const WRAPPER_OF_FOOTER_TOP___STYLED = styled((props) =>

    <Box {...props} />

)(({ theme }) => `

    ${/* layout */''}
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;

   ${media_queries.name_xs_sm_md_lg_xl('justify-content', 'center', 'center', 'space-between', 'space-around', 'space-around')};

`)







/*-------------------------------------------------------------------
✅ Styled Components for 'SITE_INFO___SECTION' Component
----------------------------------------------------------------------*/



/* 🍪 */

const WRAPPER_OF_SITE_INFO___STYLED = styled((props) =>

    <COLUMN_CONTAINER___STYLED {...props} />

)(({ theme }) => `


    ${/* layout */''}
    display:flex;
    flex-direction:column;
    gap:1.5rem;

 


        
`)



/* 🍪 */

const SOCIAL_ICONS___STYLED = styled((props) =>

    <COLUMN_CONTAINER___STYLED {...props} />

)(({ theme }) => `

    ${/* targeting child icons and styling */''}
    & .MuiSvgIcon-root {

        font-size: 1.5rem;

        &:hover {
            color: ${theme.palette.primary.main};
            cursor:pointer;
        }
    }


    ${/* layout */''}
    display: flex;
    gap: 0.8rem;

`)




/*-------------------------------------------------------------------
✅ Styled Components for 'GROUPS_OF_LINK___SECTION' Component
----------------------------------------------------------------------*/


/* 🍪 */

const WRAPPER_OF_TITLE_AND_LINKS___STYLED = styled((props) =>

    <COLUMN_CONTAINER___STYLED {...props} />

)(({ theme }) => `


    ${/* layout */''}
    display: flex;
    flex-direction: column;
    text-align: center;
`)




/* 🍪 */

const WRAPPER_OF_LINKS___STYLED = styled((props) =>

    <Box {...props} />

)(({ theme }) => `


    ${/* layout */''}
    display: flex;
    flex-direction: column;
    gap:0.2rem;
    text-align: center;
`)









/*-------------------------------------------------------------------
✅ Styled Components for 'PAYMENT_METHODS___SECTION' Component
----------------------------------------------------------------------*/


/* 🍪 */

const WRAPPER_OF_PAYMENT_METHODS___STYLED = styled((props) =>

    <COLUMN_CONTAINER___STYLED {...props} />

)(({ theme }) => `


    ${/* layout */''}
    display:flex;
    gap:0.8rem;
    flex-wrap:wrap;
        
`)
