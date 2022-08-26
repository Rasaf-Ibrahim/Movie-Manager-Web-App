import { Box, Typography } from '@mui/material'
import responsiveSpacing from 'utils/responsive-spacing/responsive-spacing'


export default function Landing() {

    return (

        <Box sx={{ textAlign: 'center', marginTop:responsiveSpacing(2) }}>

            <Typography variant='h4' component='h1'>Landing Page</Typography>

        </Box>

    )
}