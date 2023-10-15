/*__________________________________________

 ✅ import
____________________________________________*/

import config_obj from "@/config"

// components
import { Box, Typography } from "@mui/material"

import NAVIGATION_TABS___REUSABLE from "../../../for-any-project/navigation-tabs/navigation-tabs"



/*__________________________________________

 ✅ Functional Component
____________________________________________*/
export default function MOVIE_NAVIGATION_TABS___REUSABLE() {

    return (
        <Box sx={{marginTop:'2rem', marginBottom:'2rem'}}>


            <NAVIGATION_TABS___REUSABLE 
                    
                    tabs_info={[

                        {
                            tab_name_jsx: <Typography variant='body2'> Movie </Typography>,
                            tab_href: config_obj.page_path.movie,
                        },

                        
                        {
                            tab_name_jsx: <Typography variant='body2'> Series </Typography>,
                            tab_href: config_obj.page_path.series,
                        },


                        {
                            tab_name_jsx: <Typography variant='body2'> Bookmark </Typography>,
                            tab_href: config_obj.page_path.bookmark,
                        },

                    
                    ]}

                    tab_style={{
                        bottom_border_size: 'short'
                    }}

                   
            />
        
        </Box>
    )


}