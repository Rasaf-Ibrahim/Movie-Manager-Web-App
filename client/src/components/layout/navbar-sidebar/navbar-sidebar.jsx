// hook
import { useState } from "react";

// styled-components
import { styled } from '@mui/material/styles'
import ROUTER_LINK___STYLED from "@/styles/styled-components/router-link/router-link";

// store
import { user_store } from "@/store/user-store"

// components
import { Button } from "@mui/material";
import MENU_ICON_LOGO_TITLE_ON_NAVBAR___COMPONENT from "./menu-icon-logo-title-on-navbar/menu-icon-logo-title-on-navbar";
import DRAWER___COMPONENT from "./drawer/drawer";
import PROFILE_POPOVER___COMPONENT from "./profile-popover/profile-popover";





/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function NAVBAR_SIDEBAR___COMPONENT() {


    // 🍪 state to show and hide drawer 
    const [showDrawer, setShowDrawer] = useState(false);

    const handleClick = () => {
        setShowDrawer(true)
    }

    const handleClose = () => {
        setShowDrawer(false)
    }


    // 🍪 get the state properties 
    const { user_info } = user_store(state => ({
        user_info: state?.user_info
    }))



    /*-------------------------------------------------------------------
        ✅ JSX
    ----------------------------------------------------------------------*/
    return (

        <>

            {/* Navbar */}
            <NAVBAR___STYLED>

                <MENU_ICON_LOGO_TITLE_ON_NAVBAR___COMPONENT handleShowDrawer={handleClick} />


                {user_info ?

                    <PROFILE_POPOVER___COMPONENT />

                    :

                    <ROUTER_LINK___STYLED to='/sign-in'>

                        <Button variant='contained'>
                            Sign In
                        </Button>

                    </ROUTER_LINK___STYLED>
                }



            </NAVBAR___STYLED>


            {/* Drawer */}
            {/* <DRAWER___COMPONENT showDrawer={showDrawer} handleClose={handleClose} /> */}


        </>
    )
}



/*-------------------------------------------------------------------
✅ Styled Components for <NAVBAR_SIDEBAR_2___COMPONENT/>
----------------------------------------------------------------------*/

const NAVBAR___STYLED = styled('nav')(

    ({ theme }) => `

        background-color: ${theme.palette.mode === 'dark' ? theme.palette.background.variation_1 : theme.palette.primary.main};
        
        color: ${theme.palette.text.static_variant.light_primary};
    
        padding:1rem;
        padding-right:2rem;

        display:flex;
        align-items:center;
        justify-content:space-between;

    `
)