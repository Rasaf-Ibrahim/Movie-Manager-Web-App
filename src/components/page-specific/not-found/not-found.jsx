import { useContext } from "react";

import { Link } from "react-router-dom";

import { Box, Button } from '@mui/material'

import { themeSwitchContext } from 'styles/mui-theme/mui-theme'


// CSS
import {wrapper_css, svg_css} from './style'


// SVG Component
import SvgDark404 from 'styles/svg-component/404/svg-dark-404';
import SvgLight404 from 'styles/svg-component/404/svg-light-404';





export default function NOT_FOUND() {

  const { darkMode } = useContext(themeSwitchContext)


  return (
 
      /* wrapper */

      <Box sx={{ ...wrapper_css }}>


        {/* svg < wrapper */}
        {darkMode ?
          <SvgLight404 sx={{ ...svg_css }}
          />

          :

          <SvgDark404 sx={{ ...svg_css}}
          />

        }

        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button>Back to Home</Button>
        </Link>

      </Box> /* End: wrapper */

 
  )
}

