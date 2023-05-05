// styled-components
import { styled } from '@mui/material/styles'

// components
import { Box, Drawer } from '@mui/material'

import MENU_ICON_LOGO_TITLE_ON_DRAWER___COMPONENT from './menu-icon-logo-title-on-drawer/menu-icon-logo-title-on-drawer.jsx';
import NAV_LIST___COMPONENT from './nav-list/nav-list.jsx';


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function DRAWER___COMPONENT(props) {

    // these props are from navbar-sidebar-3.jsx
    const { showDrawer, handleClose } = props


    /*-------------------------------------------------------------------
     ✅ JSX
    ----------------------------------------------------------------------*/
    return (

        <Drawer anchor='left' open={showDrawer} onClose={handleClose}>

            <DRAWER_CONTENT_WRAPPER___STYLED>

                {/* Menu Icon, Logo Title */}
                <Box sx={{ marginTop: '1rem', marginLeft: '1rem' }}>

                    <MENU_ICON_LOGO_TITLE_ON_DRAWER___COMPONENT handleClose={handleClose} />

                </Box>


                {/* Navigation Items (List) */}
                <Box sx={{ marginTop: '1rem' }}>

                    <NAV_LIST___COMPONENT />

                </Box>

            </DRAWER_CONTENT_WRAPPER___STYLED>

        </Drawer>


    )
}



/*-------------------------------------------------------------------
✅ Styled Components for <DRAWER___COMPONENT/>
----------------------------------------------------------------------*/



const DRAWER_CONTENT_WRAPPER___STYLED = styled('div')(

    ({ theme }) => `
    
        width: 300px;
        height:100vh;
         
        background-color: ${theme.palette.background.default};
        border-right: 0.4rem inset ${theme.palette.primary.light};

     }

    `

)