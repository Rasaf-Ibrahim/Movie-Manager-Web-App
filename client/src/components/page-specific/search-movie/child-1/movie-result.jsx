import { Box } from "@mui/material"

import { useMovieSearchQuery } from "redux-toolkit/api/movie-api"


import DISPLAYING_MOVIE_RESULT from "./child-1.1/displaying-movie-result"


import { ERROR_TEXT, LOADING_SPINNER } from "components/ui"


// functional component
export default function MovieResult({ searchedKeyword }) {


    // Note: In the 'useMovieSearchQuery', I am passing 'searchedKeyword' prop as a argument. Also, I have passed a alternative argument 'Frozen'. 'Frozen' is a name of a movie. Initially after the page load, when 'searchedKeyword' is empty, then the api will search for the alternative value 'Frozen' and populate some results on the page. I don't want the page to be empty at the initial load. So, I have passed this alternative default argument.



    const { data, error, isLoading, isSuccess } = useMovieSearchQuery(searchedKeyword || 'Frozen')


    return (

        <Box>

            {

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


                        if (data.Response === 'True') {

                            return (


                                <DISPLAYING_MOVIE_RESULT data={data} />
                            )


                        }

                        else if (data.Response === 'False') {


                            if (data.Error === 'Movie not found!') {

                                return (


                                    <ERROR_TEXT text='No matching results. Maybe give it another shot with different keywords or exact name of the movie.' />


                                )

                            }

                            else if (data.Error === 'Too many results.') {

                                return (


                                    <ERROR_TEXT text='Search with a longer word.' />


                                )
                            }


                        }



                    }


                })()  /* End: Immediately invoked anonymous function */


            }


        </Box>

    )
}