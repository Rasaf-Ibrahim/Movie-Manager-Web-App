// react
import React, { useState } from 'react';


// icons
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';


// styled components
import { styled } from '@mui/material/styles';
import media_queries from '@/utils/media-queries/media-queries';
import ROUTER_LINK___STYLED from '@/styles/styled-components/router-link/router-link';

// components
import { Button, Typography, Divider, Box } from '@mui/material'

import LOGIN_WITH_EMAIL___COMPONENT from './login-with-email/login-with-email';
import LOGO___COMPONENT from '@/components/reusable/just-for-this-project/logo/logo';





/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function SIGN_IN___COMPONENT() {



    /*-------------------------------------------------------------------
       ✅ JSX
    ----------------------------------------------------------------------*/
    return (

        <WRAPPER_OF_FORM___STYLED>

            <WRAPPER_OF_FORM_CONTENT___STYLED>

                <FORM_TITLE_AND_LOGO___SECTION />

                <FORM_ALL_LOGIN_OPTIONS___SECTION />

                <FORM_FOOTER___SECTION />

            </WRAPPER_OF_FORM_CONTENT___STYLED>

        </WRAPPER_OF_FORM___STYLED>

    )
}





/*-------------------------------------------------------------------
 ✅ Sections of <SIGN_IN___COMPONENT/>
----------------------------------------------------------------------*/


/* 🍔 */

const FORM_TITLE_AND_LOGO___SECTION = () => {

    return (

        <React.Fragment>

            <Box sx={(theme) => ({
                display: 'flex',
                justifyContent: 'center'
            })}>

                <LOGO___COMPONENT />

            </Box>

            <Typography sx={(theme) => ({
                marginTop: '2rem',
                marginBottom: '1rem',
                color: theme.palette.primary.light,
                fontFamily: "'Source Code Pro', monospace",
                textAlign: 'center'
            })}
                variant='h5'>
                Sign In
            </Typography>

        </React.Fragment>

    )

}



/* 🍔 */
const FORM_ALL_LOGIN_OPTIONS___SECTION = () => {


    // state to show and hide dropdown
    const [showDropdown, setShowDropdown] = useState(false)

    const handleClick = () => {

        setShowDropdown(!showDropdown)
    }



    const googleAuth = () => {
        window.open(
            `${import.meta.env.VITE_API_URL}/auth/social/google`,
            "_self"

        )
    }



    return (

        <React.Fragment>

            <Button
                onClick={googleAuth}
                startIcon={<GoogleIcon />}
                variant='contained'
                sx={{ justifyContent: 'flex-start' }}>

                Sign in with Google
            </Button>


            <Divider />


            <Button
                onClick={handleClick}
                startIcon={<EmailIcon />}
                variant='contained'
                sx={{ justifyContent: 'flex-start' }}>

                Sign in with Email
            </Button>


            {showDropdown &&

                <LOGIN_WITH_EMAIL___COMPONENT />

            }

        </React.Fragment>

    )

}



/* 🍔 */
const FORM_FOOTER___SECTION = () => {


    return (

        <Box
            sx={(theme) => ({
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
            })}>


            <Typography variant='body2'>
                Don't have an account?
            </Typography>


            <ROUTER_LINK___STYLED to='/sign-up'>

                <LINK_TEXT___STYLED>
                    Sign Up
                </LINK_TEXT___STYLED>

            </ROUTER_LINK___STYLED>


        </Box>
    )

}






/*-------------------------------------------------------------------
✅ Styled Components for <SIGN_IN___COMPONENT/>
----------------------------------------------------------------------*/

/* 🍔 */
const WRAPPER_OF_FORM___STYLED = styled((props) =>

    <Box  {...props} />
)
    (({ theme }) => `
        margin-top:2rem; 
        margin-bottom: 2rem;

        display:flex;
        flex-direction:column;
        align-items: center;
    `)



/* 🍔 */
const WRAPPER_OF_FORM_CONTENT___STYLED = styled((props) =>

    <Box  {...props} />
)
    (({ theme }) => `

        ${media_queries.name_xs_sm_md_lg('width', '18rem', '20rem', '22rem', '24rem')};

        ${/*when the width is increasing 2, we need to increase the padding the padding 1 because padding has right and left. */ ''}
        ${media_queries.name_xs_sm_md_lg('padding-right', '1rem', '2rem', '3rem', '4rem')};
        ${media_queries.name_xs_sm_md_lg('padding-left', '1rem', '2rem', '3rem', '4rem')};
        padding-top:1rem;
        padding-bottom:1rem;

        background-color: ${theme.palette.background.variation_1};
        box-shadow: 5px 5px 2px 0px;

        border-radius:1rem;


        ${/* Button's size is getting changed while toggling the email form if we use display:'grid' instead of display:'flex' & flex-direction:'column' */ ''}
        display: flex;
        flex-direction: column;
        justify-content: center; 
        gap: 1.2rem; 
    `)



/*-------------------------------------------------------------------
 ✅ Styled Components for <FORM_FOOTER___SECTION/>
----------------------------------------------------------------------*/

/* 🍔 */
const LINK_TEXT___STYLED = styled((props) =>

    <Typography  {...props} variant='body2' />

)(({ theme }) => `

    color: ${theme.palette.primary.main};
    :hover {
        color: ${theme.palette.primary.dark}
    }
    
`)

