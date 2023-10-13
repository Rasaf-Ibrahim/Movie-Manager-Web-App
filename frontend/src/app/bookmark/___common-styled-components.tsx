import { Box } from "@mui/material"


// ✅
export function WRAPPER_OF_JSX___STYLED({children}) {

    return (
        <Box sx={{marginTop:'1rem', display:'flex', flexDirection:'column', justifyContent:'center', gap:'1rem'}}>

            {children}

        </Box>
    )
}


// ✅
export function WRAPPER_OF_CHIPS___STYLED({children}) {

    return (
        <Box sx={{display:'flex', justifyContent:'center', gap:'1rem'}}>

            {children}

        </Box>
    )
}