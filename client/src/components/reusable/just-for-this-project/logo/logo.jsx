// components
import { Box, Typography } from '@mui/material'

import ROUTER_LINK___STYLED from '@/styles/styled-components/router-link/router-link'


import { styled } from '@mui/material/styles';

import responsiveSpacing from '@/utils/responsive-spacing/responsive-spacing';


// useTheme hook
import { useTheme } from "@mui/material";



/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function LOGO___COMPONENT(props) {

    // useTheme
    const theme = useTheme()



    const color_based_on_props = () => {

        /* We are accepting 3 props in this component: 
            background_is_always_light,
            background_is_always_dark,
            background_has_opposite_theme_color
        */

        if (!props.background_is_always_light && !props.background_is_always_dark && !props.background_has_opposite_theme_color) {

            return theme.palette.primary.main
        }

        else if (props.background_is_always_light) {

            return theme.palette.primary.static_variant.dark_1
        }

        else if (props.background_is_always_dark) {

            return theme.palette.primary.static_variant.light_1
        }

        else if (props.background_has_opposite_theme_color) {

            return theme.palette.primary.opposite_theme.main
        }
    }


    return (

        <ROUTER_LINK___STYLED to='/'>
            
            <Box sx={{

                // layout 
                padding: '0.3rem',

                // appearance
                borderRadius: '0.3rem',
                boxShadow: `0px 0px 5px 2px ${color_based_on_props()}`,

                // child layout
                display: 'flex',
                gap: '0.2rem'
            }}>


                <Typography sx={{
                    fontFamily: "'Lobster Two', 'cursive'",
                    fontSize: '11px',
                    lineHeight: '0.7'
                }}>

                    <Box>Rasaf's</Box>
                    <Box>&nbsp; Project</Box>

                </Typography>


                <Typography
                    variant='body1'
                    sx={{ fontFamily: "'Lobster Two', 'cursive'" }}>

                    Movie Manager
                </Typography>


            </Box>

        </ROUTER_LINK___STYLED>
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



