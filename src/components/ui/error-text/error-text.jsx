import { Box, Typography } from "@mui/material";

import SentimentDissatisfiedSharpIcon from '@mui/icons-material/SentimentDissatisfiedSharp';



import {wrapper_css, icon_css} from './style'


export default function ERROR_TEXT({text}) {

  
    return (

        <>
          
          {/* wrapper */}
          <Box sx={{...wrapper_css}}>


            <Typography variant='h6' sx={{color:'brand.t1.v3'}}>{text}</Typography>

            <SentimentDissatisfiedSharpIcon sx={{...icon_css}}/>


        </Box>

      </>
    )
}