import { Box, Typography } from '@mui/material'
import responsiveSpacing from 'utils/responsive-spacing/responsive-spacing'


export default function LANDING() {

    return (

        <Box sx={{ textAlign: 'center', marginTop:responsiveSpacing(2) }}>

            <Typography variant='h4' component='h1'>LANDING Page</Typography>

        </Box>

    )
}