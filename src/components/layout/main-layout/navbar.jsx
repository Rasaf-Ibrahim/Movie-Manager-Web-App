import React from 'react'

import { useContext } from 'react';

import { Link } from "react-router-dom";

import { themeSwitchContext } from 'styles/mui-theme/mui-theme'


import { Box, Paper, Typography, IconButton } from '@mui/material';


import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



// Brand icon
import SvgLightBrandLogo from 'styles/svg-component/brand-logo/svg-light-brand-logo.jsx';

import SvgDarkBrandLogo from 'styles/svg-component/brand-logo/svg-dark-brand-logo';

// responsive-spacing
import responsiveSpacing from 'utils/responsive-spacing/responsive-spacing';


function Navbar() {

  const { switchTheme, darkMode } = useContext(themeSwitchContext)

  return (


    <Paper sx={{ bgcolor: 'brand.t1.v2', padding: responsiveSpacing(1), display: 'grid', gridTemplateColumns: '11fr 1fr', alignItems: 'center' }} elevation={1}>

      {/* Logo & Title */}
      <Box>

        <Link to='/' style={{ textDecoration: 'none' }}>

          <Box sx={{ cursor: 'pointer', display: 'flex', gap: '1rem', alignItems: 'center' }}>

            {/* Logo */}
            <Box sx={{ marginTop: responsiveSpacing(0.7) }}>
              {darkMode ? <SvgDarkBrandLogo sx={{ fontSize: 35 }} /> : <SvgLightBrandLogo sx={{ fontSize: 35 }} />}
            </Box>

            {/*  Title */}
            <Box>
              <Typography variant='h5' component='h1' sx={{ color: 'text.opp.v1', fontFamily: 'Source Code Pro, monospace' }}>Brand Name</Typography>
            </Box>

          </Box>

        </Link>

      </Box> {/* End: Logo & Title */}


      {/* Dark Mode Icon */}
      <Box sx={{ justifySelf: 'end' }}>

        <IconButton sx={{ ml: 1, color: 'text.opp.v1', fontSize: 'h5.fontSize' }} onClick={switchTheme} >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

      </Box>


    </Paper>

  )
}

export default Navbar