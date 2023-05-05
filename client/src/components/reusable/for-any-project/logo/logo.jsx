// components
import { Box, Typography } from '@mui/material'

import ROUTER_LINK___STYLED from '@/styles/styled-components/router-link/router-link'
import SVG_BRAND_LOGO___COMPONENT from './svg-jsx/svg-brand-logo'





/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function LOGO___COMPONENT(props) {


    const {
        background_is_always_light,
        background_is_always_dark,
        background_has_opposite_theme_color
    } = props


    return (

        <>

            {/* Logo & Title */}

            <ROUTER_LINK___STYLED to='/'>

                <Box sx={{
                    color: 'inherit',
                    display: 'flex',
                    gap: '0.5rem'
                }}>

                    <SVG_BRAND_LOGO___COMPONENT
                        background_is_always_light={background_is_always_light}
                        background_is_always_dark={background_is_always_dark}
                        background_has_opposite_theme_color=
                        {background_has_opposite_theme_color}
                    />

                    <Typography variant='h5' sx={{ fontFamily: 'Lobster Two' }}>{import.meta.env.VITE_SITE_NAME}</Typography>

                </Box>

            </ROUTER_LINK___STYLED>

        </>

    )
}



/*-------------------------------------------------------------------
 ✅ defaultProps of <LOGO___COMPONENT/>
----------------------------------------------------------------------*/

LOGO___COMPONENT.defaultProps = {

    background_has_opposite_theme_color: false,
    background_is_always_dark: false,
    background_is_always_light: false
}



