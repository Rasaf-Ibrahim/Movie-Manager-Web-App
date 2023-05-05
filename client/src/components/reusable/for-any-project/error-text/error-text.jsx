// icon
import SentimentDissatisfiedSharpIcon from '@mui/icons-material/SentimentDissatisfiedSharp';

// PropTypes
import { PropTypes } from "prop-types";


// components
import { Box, Typography } from "@mui/material";


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function ERROR_TEXT___COMPONENT({ error_text }) {


  
/*-------------------------------------------------------------------
 ✅ JSX 
----------------------------------------------------------------------*/
  return (

      <Box sx={(theme) => ({
        marginTop:'1rem',

        textAlign:'center',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        gap:'0.5rem'
      })}>


        <Typography sx={(theme) => ({
            color: theme.palette.error.main,
        })} 
        variant='body1'>
          {error_text}
        </Typography>

        <SentimentDissatisfiedSharpIcon sx={(theme) => ({
          color: theme.palette.error.main,
          fontSize:'3rem'
        })} />

      </Box>
  )
}



/*-------------------------------------------------------------------
 ✅ propTypes of <ERROR_TEXT___COMPONENT/>
----------------------------------------------------------------------*/

ERROR_TEXT___COMPONENT.propTypes = {

  error_text: PropTypes.string.isRequired,

}
