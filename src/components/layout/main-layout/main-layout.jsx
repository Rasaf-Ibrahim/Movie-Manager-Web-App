import { Box } from '@mui/material'

import Navbar from './navbar';
import Footer from './footer';




export default function MainLayout({ children }) {


  return (

    <>
      {/* the following css styles and layout structure is essential for keeping the footer at the bottom of the page even when the page size is small.  (https://stackoverflow.com/a/67846892/14120900) */}


      <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

        <Box> {/* Wrapper (Without footer) */}

          <Navbar />

          <Box>{children}</Box>

        </Box>  {/* End: Wrapper (Without footer) */}


        <Footer />

      </Box>


    </>

  )

}



