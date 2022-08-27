import { Box } from '@mui/material'

import NAVBAR from './navbar/navbar';
import FOOTER from './footer/footer';




export default function MAIN_LAYOUT({ children }) {


  return (

    <>
      {/* the following css styles and layout structure is essential for keeping the footer at the bottom of the page even when the page size is small.  (https://stackoverflow.com/a/67846892/14120900) */}


      <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

        <Box> {/* wrapper_without_footer */}

          <NAVBAR />

          <Box>{children}</Box>

        </Box>  {/* End: wrapper_without_footer */}


        <FOOTER />

      </Box>


    </>

  )

}



