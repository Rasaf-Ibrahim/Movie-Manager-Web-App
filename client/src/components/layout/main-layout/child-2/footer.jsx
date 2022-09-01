
import { Box, Typography } from '@mui/material'

// css
import {footer_wrapper_css} from './style'


const { format } = require('date-fns');



// functional component
export default function FOOTER() {

    //current year
    const year = format(new Date(), 'yyyy');


    return (

        /* footer wrapper */
        <Box sx={{ ...footer_wrapper_css }}>

            <Typography sx={{ color: 'text.opp.v1' }} align="center">
                <span > &copy;</span> {` ${year}`}
            </Typography>

        </Box>


    )
}