import {Box, Typography} from '@mui/material'

const { format } = require('date-fns');


export default function Footer() {

    //current year
    const year = format(new Date(), 'yyyy');


    return (

        <Box sx={{bgcolor: 'blueGrey.v2', mt: '1rem', p: '1rem'}}>

                <Typography sx={{color: 'text.opp.v1'}} align="center"> 
                    <span > &copy;</span> {` ${year}`} 
                </Typography>

        </Box>

      
    )
}