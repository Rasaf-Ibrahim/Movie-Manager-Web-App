import { useContext } from 'react';

import { Link } from "react-router-dom";

import { Box, Paper, Typography, IconButton } from '@mui/material';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


import { themeSwitchContext } from 'styles/mui-theme/mui-theme'


// CSS
import { navbar_wrapper_css, logo_and_title_wrapper_css, logo_wrapper_css, logo_css, title_wrapper_css, theme_switch_icon_wrapper_css, theme_switch_icon_css } from './style'


// Brand icon
import SvgLightBrandLogo from 'styles/svg-component/brand-logo/svg-light-brand-logo.jsx';

import SvgDarkBrandLogo from 'styles/svg-component/brand-logo/svg-dark-brand-logo';



// functional component
export default function NAVBAR() {

  const { switchTheme, darkMode } = useContext(themeSwitchContext)

  return (

    /* navbar_wrapper */
    <Paper sx={{ ...navbar_wrapper_css }} elevation={1}>


      {/* link_logo_title_wrapper < navbar_wrapper */}
      <Box>

        <Link to='/' style={{ textDecoration: 'none' }}>

          {/* logo_title_wrapper < link_logo_title_wrapper */}
          <Box sx={{ ...logo_and_title_wrapper_css }}>


            {/* logo_wrapper < logo_title_wrapper */}
            <Box sx={{ ...logo_wrapper_css }}>

              {darkMode ?

                <SvgDarkBrandLogo sx={{ ...logo_css }} />
                :
                <SvgLightBrandLogo sx={{ ...logo_css }} />
              }
            </Box>


            {/* title_wrapper < logo_title_wrapper */}
            <Box>
              <Typography variant='h5' component='h1' sx={{ ...title_wrapper_css }}>
                Brand Name
              </Typography>
            </Box>

          </Box> {/* End: logo_title_wrapper < link_logo_title_wrapper */}

        </Link>

      </Box> {/* End: link_logo_title_wrapper < navbar_wrapper */}




      {/* theme_switch_icon_wrapper < navbar_wrapper */}
      <Box sx={{ ...theme_switch_icon_wrapper_css }}>

        {/* theme_switch_icon < theme_switch_icon_wrapper */}
        <IconButton sx={{ ...theme_switch_icon_css }} onClick={switchTheme} >

          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}

        </IconButton>

      </Box> {/* End: theme_switch_icon_wrapper < navbar_wrapper */}


    </Paper> /* End: navbar_wrapper */




  )
}

