import { Box, Typography, } from "@mui/material"

import { useMovieSearchQuery } from "redux-toolkit/api/movie-search-api"


import MovieResultSuccessful from "./child-1.2/movie-result-successful"
import MovieResultLoading from "./child-1.1/movie-result-loading"
import { typography } from "@mui/system"
import ERROR_TEXT from "components/ui/error-text/error-text"


export default function MovieResult({ searchedKeyword }) {


    // Note: In the 'useMovieSearchQuery', I am passing 'searchedKeyword' prop as a argument. Also, I have passed a alternative argument 'Frozen'. 'Frozen' is a name of a movie. Initially after the page load, when 'searchedKeyword' is empty, then the api will search for the alternative value 'Frozen' and populate some results on the page. I don't want the page to be empty at the initial load. So, I have passed this alternative default argument.

    

    const { data, error, isLoading, isSuccess } = useMovieSearchQuery(searchedKeyword || 'Frozen')


    return (

        <Box>

            {

                (() => {

                    if (isLoading) {
                        return (
                            <MovieResultLoading />
                        )
                    }

                    else if (error) {
                        return (

                             <>
                                 
                                <ERROR_TEXT text='Something is wrong.'/>

                             </>
                        )
                    }

                    else if (isSuccess) {


                        if (data.Response === 'True') {

                            return (


                                <MovieResultSuccessful data={data} />
                            )


                        }

                        else if (data.Response === 'False') {


                            if (data.Error === 'Movie not found!') {

                                return (

                                 <>
                                    <ERROR_TEXT text='No matching results. Maybe give it another shot with different keywords.'/>

                                  </>
                                )

                            }

                            else if (data.Error === 'Too many results.') {

                                return (

                                    <>
                                 
                                    <ERROR_TEXT text='Search with a longer word.'/>

                                    </>
                                )
                            }


                        }



                    }


                })()


            }


        </Box>

    )
}