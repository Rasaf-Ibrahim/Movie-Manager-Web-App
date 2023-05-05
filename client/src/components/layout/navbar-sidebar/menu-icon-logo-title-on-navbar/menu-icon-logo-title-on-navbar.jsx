// styled-components
import { styled } from '@mui/material/styles'

// icon
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

// components
import { IconButton } from "@mui/material"
import LOGO___COMPONENT from '@/components/reusable/for-any-project/logo/logo';


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function MENU_ICON_LOGO_TITLE_ON_NAVBAR___COMPONENT(props) {

    // these props are coming from 'navbar-sidebar-with-mui.jsx' file.
    const { handleShowDrawer } = props



    /*-------------------------------------------------------------------
        ✅ JSX
    ----------------------------------------------------------------------*/
    return (

        <JSX_WRAPPER___STYLED>

            {/* hamburger icon */}
            <IconButton onClick={handleShowDrawer} sx={{ fontSize: '2rem', color: 'inherit' }}>

                <MenuOutlinedIcon />

            </IconButton>


            {/* logo and title */}
            <LOGO___COMPONENT background_is_always_dark={true} />

        </JSX_WRAPPER___STYLED>

    )
}




/*-------------------------------------------------------------------
✅ Styled Components for <MENU_ICON_LOGO_TITLE_ON_NAVBAR___COMPONENT/>
----------------------------------------------------------------------*/

const JSX_WRAPPER___STYLED = styled('nav')(

    ({ theme }) => `

            display:flex;
            align-items:center;
            gap:1.5rem;
    `
)