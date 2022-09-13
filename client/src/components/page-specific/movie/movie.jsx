import { useState } from 'react';

import { Box, Typography, Tabs, Tab } from '@mui/material'
import responsiveSpacing from 'utils/responsive-spacing/responsive-spacing';


import SEARCH_MOVIE from './search-movie/search-movie';
import FAVORITE_MOVIE from './favorite/favorite-movie';



export default function FAVORITE() {



    // when we select a tab, the state changes
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }



    return (

        <>

            <Box sx={{ width: '100%', marginTop: responsiveSpacing(1) }}>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>

                    <Tabs value={selectedTab} onChange={handleChange} aria-label="Tabs" 	 >

                        <Tab label="Search Movie" />
                        <Tab label="Favorite" />
                        <Tab label="Watch Later" />

                    </Tabs>

                </Box>



                {/* Content of the tab */}

                {selectedTab === 0 && <SEARCH_MOVIE />}


                {selectedTab === 1 && <FAVORITE_MOVIE />}


                {selectedTab === 2 && <Typography>Hello, this is ibrahim</Typography>}


            </Box>

        </>

    )
}