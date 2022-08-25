import { useContext } from "react";

import { Link } from "react-router-dom";

import { Box, Button } from '@mui/material'

import { themeSwitchContext } from 'styles/mui-theme/mui-theme'

// responsive-spacing
import responsiveSpacing from 'utils/responsive-spacing/responsive-spacing';


// SVG Component
import SvgDark404 from 'styles/svg-component/404/svg-dark-404';
import SvgLight404 from 'styles/svg-component/404/svg-light-404';



  

export default function NotFound() {

  const { darkMode } = useContext(themeSwitchContext)


  return (
    <>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: responsiveSpacing(3), alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>


        {darkMode ?
          <SvgLight404 sx={{ m: '1rem', width: { xs: '75%', sm: '60%', md: '55%', lg: '40%', xl: '25%' }, height: { xs: '75%', sm: '60%', md: '55%', lg: '40%', xl: '25%' } }}
          />

          :

          <SvgDark404 sx={{ m: '1rem', width: { xs: '75%', sm: '60%', md: '55%', lg: '40%', xl: '25%' }, height: { xs: '75%', sm: '60%', md: '55%', lg: '40%', xl: '25%' } }}
          />

        }

        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button>Back to Home</Button>
        </Link>

      </Box>

    </>
  );
}

