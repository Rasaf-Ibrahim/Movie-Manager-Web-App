import { useState } from 'react';

import { Box, Typography, Tabs, Tab } from '@mui/material'
import responsiveSpacing from 'utils/responsive-spacing/responsive-spacing';


import { useFetchFavoritesQuery } from 'redux-toolkit/api/favorite-api';

import { ERROR_TEXT, LOADING_SPINNER } from 'components/reusable/ui';

import DISPLAYING_FAVORITE_MOVIE from './favorite/displaying-movie';
import MovieSearch from './search-movie/movie-search';



export default function FAVORITE() {

    const { data, error, refetch, isLoading, isSuccess } = useFetchFavoritesQuery()


    console.log(data)


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

                {selectedTab === 0 && <MovieSearch/>}



                {/* tab = 1 */}
                {selectedTab === 1 &&


                    /*  Immediately invoked anonymous function */
                    (() => {

                        if (isLoading) {
                            return (
                                <LOADING_SPINNER />
                            )
                        }

                        else if (error) {
                            return (


                                <ERROR_TEXT text='Something is wrong.' />


                            )
                        }

                        else if (isSuccess) {

                            return (

                                <DISPLAYING_FAVORITE_MOVIE data={data} />

                            )

                        }



                    }


                    )()  /* End: Immediately invoked anonymous function */



                } {/* End: tab = 0 */}



                {selectedTab === 2 && <Typography>Hello, this is ibrahim</Typography>}


                {/* As content, we can have anything but just for example, We are having a single line of text here. */}


            </Box>

        </>

    )
}