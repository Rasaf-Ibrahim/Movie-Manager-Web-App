// hook
import { useTheme } from '@mui/material/styles';

// PropTypes
import { PropTypes } from "prop-types";

// react-spinner library
import RingLoader from "react-spinners/RingLoader";
import ScaleLoader from "react-spinners/ScaleLoader";

// components
import { Box } from '@mui/material';




/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function LOADING_SPINNER___COMPONENT(props) {


    const { fullPage, margin } = props

  
    /*-------------------------------------------------------------------
     ✅ JSX 
    ----------------------------------------------------------------------*/
    return (

        <>

            {fullPage &&

                <FULL_PAGE_SPINNER___SECTION />
            }


            {!fullPage &&

                <NOT_FULL_PAGE_SPINNER___SECTION margin={margin} />
            }

        </>
    )

}



/*-------------------------------------------------------------------
 ✅ Sections of <LOADING_SPINNER___COMPONENT/>
----------------------------------------------------------------------*/


/* 🍔 */
const FULL_PAGE_SPINNER___SECTION = () => {


    // useTheme
    const theme = useTheme()

    return (

        <Box sx={(theme) => ({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        })}>

            <RingLoader
                color={theme.palette.primary.main}
                size={100}
                aria-label="Loading Spinner"
            />

        </Box>

    )


}



/* 🍔 */
const NOT_FULL_PAGE_SPINNER___SECTION = ({ margin }) => {


    // useTheme
    const theme = useTheme()

    return (

        <Box sx={(theme) => ({
            margin: { margin },

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        })}>

            <ScaleLoader
                color={theme.palette.primary.main}
                aria-label="Loading Spinner"
            />

        </Box>

    )

}





/*-------------------------------------------------------------------
 ✅ propTypes of <LOADING_SPINNER___COMPONENT/>
----------------------------------------------------------------------*/

LOADING_SPINNER___COMPONENT.propTypes = {

    fullPage: PropTypes.bool.isRequired,
    margin: PropTypes.string.isRequired

}
