/*__________________________________________

 ✅ import 
____________________________________________*/

// hook
import { useState, useEffect } from 'react';
import { useSearchSeries } from '@/api-calls/movie-manager/tmdb-api/search-series-hook'


// icon
import SearchIcon from '@mui/icons-material/Search';


// component
import { Box, Button, TextField, InputAdornment } from '@mui/material'

import ERROR_TEXT___COMPONENT from "@/components/reusable/for-any-project/error-text/error-text";
import LOADING_SPINNER___COMPONENT from "@/components/reusable/for-any-project/loading-spinner/loading-spinner";

import MOVIE_CARD___REUSABLE from '@/components/reusable/just-for-this-project/movie-manager-app/movie-card/movie-card';




/*__________________________________________

 ✅ Functional Component 
____________________________________________*/

export default function SEARCH_MOVIE___COMPONENT() {

    // state
    const [searchedKeyword, setSearchedKeyword] = useState('')

    const [random_placeholder_movie, set_random_placeholder_movie] = useState('')


    const handleSearchKeyword = (e) => {
        setSearchedKeyword(e.target.value)
    }

    const handleSubmit = (e) => {

        e.preventDefault()
    }



    // random placeholder movie
    useEffect(() => {

        const placeholder_movie = get_random_placeholder_tv_series()

        set_random_placeholder_movie(placeholder_movie)

    }, [])



    // TSX
    return (

        <WRAPPER_OF_JSX___STYLED>

            {/* Search Input Field */}
            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">


                <TextField
                    onChange={handleSearchKeyword}
                    value={searchedKeyword}
                    id="filled-basic"
                    label="Search by name"
                    placeholder={random_placeholder_movie} variant="standard"

                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">

                                <SearchIcon sx={{
                                    fontSize: '1.4rem',
                                    color: 'primary.light'
                                }} />

                            </InputAdornment>
                        )
                    }} />

            </Box>


            <MOVIE_SEARCH_RESULT___CHILD

                searchedKeyword={
                    searchedKeyword.trim()
                }

                random_placeholder_movie={random_placeholder_movie}
            />

        </WRAPPER_OF_JSX___STYLED>
    )
}





/*__________________________________________

 ✅ Child Components of 
 <SEARCH_MOVIE___SECTION/>
____________________________________________*/

// functional component
function MOVIE_SEARCH_RESULT___CHILD({ searchedKeyword, random_placeholder_movie }) {


    // 🍪  useSearchSeries hook
    const { isFetching, isSuccess, isError, data, error, refetch } = useSearchSeries(searchedKeyword || random_placeholder_movie)


    // refetch whenever input changes
    useEffect(() => {

        if (random_placeholder_movie === '') return

        refetch()

    }, [searchedKeyword, random_placeholder_movie])


    return (

        <Box>

            {

                /*  Immediately invoked anonymous function */
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

                            <>

                                {data.info.search_result.length === 0 ?
                                    <ERROR_TEXT___COMPONENT error_text='No results found. Try using different keywords or the exact movie name.'

                                        typography='body1'

                                        error_icon_size='1.5rem'

                                    />

                                    :

                                    <MOVIE_CARD___REUSABLE data={data.info.search_result}

                                        content_type='series'

                                    />

                                }

                            </>

                        )

                    }


                })()


            }


        </Box>

    )
}




/*__________________________________________

 ✅ Styled Components 
____________________________________________*/


function WRAPPER_OF_JSX___STYLED({ children }) {

    return (

        <Box sx={{
            marginTop: '1.8rem',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.7rem'
        }}>

            {children}

        </Box>
    )
}



/*__________________________________________

 ✅ Helper function
____________________________________________*/

function get_random_placeholder_tv_series() {

    // An array of popular TV series
    const popular_tv_series = [
        'Vikings',
        'The Crown',
        'Succession',
        'Friends',
        'Sherlock',
        'Chernobyl',
        'Rome',

        // Parks and Recreation
        'Parks'
    ]

    // Calculate a random index based on the length of the TV series array.
    const randomIndex = Math.floor(Math.random() * popular_tv_series.length)

    // Return a random TV series name from the array.
    return popular_tv_series[randomIndex]
}
