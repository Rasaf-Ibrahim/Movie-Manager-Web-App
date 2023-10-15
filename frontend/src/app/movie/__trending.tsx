/*__________________________________________

 ✅ import
____________________________________________*/

// hook
import { useState, useEffect } from "react"
import { useFetchTrendingMovies } from "@/api-calls/movie-manager/tmdb-api/fetch-trending-movies-hook"


// components
import { Box, Button, Pagination } from "@mui/material"

import LOADING_SPINNER___COMPONENT from "@/components/reusable/for-any-project/loading-spinner/loading-spinner"

import ERROR_TEXT___COMPONENT from "@/components/reusable/for-any-project/error-text/error-text"

import MOVIE_CARD___REUSABLE from "@/components/reusable/just-for-this-project/movie-manager-app/movie-card/movie-card"





/*__________________________________________

 ✅ Functional Component
____________________________________________*/

export default function TOP_RATED___COMPONENT() {

    const [page_state, set_page_state] = useState(1)

    //  useFetchNote hook
    const { data, refetch, isFetching, isSuccess, isError, error } = useFetchTrendingMovies(page_state)


    useEffect(() => {

        refetch()

        window.scrollTo(0, 0)

    }, [page_state])



    return (
        <>
            {

                (() => {

                    if (isFetching) {
                        return (

                            <LOADING_SPINNER___COMPONENT full_screen={false} margin="10rem" />
                        )
                    }


                    else if (isError) {

                        return (

                            <Box sx={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

                                <ERROR_TEXT___COMPONENT error_text="Something is wrong"
                                />

                                <Button
                                    variant="outlined"
                                    onClick={() => refetch()}>
                                    Retry
                                </Button>

                            </Box>
                        )
                    }


                    else if (isSuccess) {

                        return (

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>

                                <MOVIE_CARD___REUSABLE
                                    data={data.info.trending_movies}
                                    content_type='movie'
                                />


                                <PAGINATION___CHILD
                                    page_state={page_state}
                                    set_page_state={set_page_state}
                                />

                            </Box>

                        )
                    }

                })()

            }


        </>
    )
}




/*__________________________________________

 ✅ Child Components of 
 <TRENDING___COMPONENT/>
____________________________________________*/

function PAGINATION___CHILD({ page_state, set_page_state }) {


    const handleChange = (event, value) => {
        set_page_state(value)
    }


    return (

        <>

            <Pagination
                onChange={handleChange}
                count={30}
                page={Number(page_state)}
                variant="outlined"
            />

        </>

    )

}
