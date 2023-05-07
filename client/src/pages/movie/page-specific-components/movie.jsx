import { useState } from 'react';

// api hook
import { useSearchMovie } from '@/api/movie/search-movie';


import { Box, Tabs, Tab, TextField, InputAdornment } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search';


import ERROR_TEXT___COMPONENT from "@/components/reusable/for-any-project/error-text/error-text";
import LOADING_SPINNER___COMPONENT from "@/components/reusable/for-any-project/loading-spinner/loading-spinner";


// component
import MOVIE_CARD___COMPONENT from '@/components/reusable/just-for-this-project/movie-card/movie-card';
import { useLogger, useMount, useUpdateEffect } from 'react-use';







/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function MOVIE___COMPONENT() {



    // when we select a tab, the state changes
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }



    return (

        <>

            <Box sx={{ width: '100%', marginTop: '1.1rem' }}>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>

                    <Tabs value={selectedTab} onChange={handleChange} aria-label="Tabs" 	 >

                        <Tab label="Search Movie" />
                        <Tab label="Favorite" />
                        <Tab label="Watch Later" />

                    </Tabs>

                </Box>



                {/* Content of the tab */}

                {selectedTab === 0 && <SEARCH_MOVIE___SECTION />}


                {/* {selectedTab === 1 && <FAVORITE_MOVIE />}


                {selectedTab === 2 && <WATCH_LATER/>} */}


            </Box>

        </>

    )
}





/*-------------------------------------------------------------------
 ✅ Section of <MOVIE___COMPONENT/>
----------------------------------------------------------------------*/



// 🍪
function SEARCH_MOVIE___SECTION() {


    const [searchedKeyword, setSearchedKeyword] = useState('')
    const [random_placeholder_movie, set_random_placeholder_movie] = useState('')




    const handleSearchKeyword = (e) => {
        setSearchedKeyword(e.target.value)
    }


    // On the handleSubmit, there is no functionality.  But I am still having this so that the page doesn't get refreshed while clicking on the 'Enter' button after writing something on the search input field.

    const handleSubmit = (e) => {

        e.preventDefault()

    }



    // random placeholder movie

    useMount(()=> {


        

        const placeholder_movie = get_random_placeholder_movie()

        set_random_placeholder_movie(placeholder_movie)

    })

    useLogger(random_placeholder_movie, 'placeholder')


    // css
    const from_wrapper_css = {
        margin: '2.2rem',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: '1.1rem'
    }

    const search_icon_css = {

        fontSize: '1.4rem',
        color: 'primary.light',

    }

    return (

        <>

            {/* from_wrapper */}
            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ ...from_wrapper_css }}>


                <TextField onChange={handleSearchKeyword} value={searchedKeyword} id="filled-basic" label="Search by name" placeholder={random_placeholder_movie} variant="standard"
                    InputProps={{ endAdornment: <InputAdornment position="start"><SearchIcon sx={{ ...search_icon_css }} /></InputAdornment> }} />

            </Box>


            {/* MOVIE_SEARCH_RESULT___COMPONENT Component*/}
            <MOVIE_SEARCH_RESULT___COMPONENT

                searchedKeyword={

                    /*While passing the prop, I am using trim() so that  whitespace from both sides of the searchedKeyword string can be ignored */
                    searchedKeyword.trim()
                }

                random_placeholder_movie = {random_placeholder_movie}
            />

        </>
    )
}





/*-------------------------------------------------------------------
 ✅ Section of <SEARCH_MOVIE___SECTION/>
----------------------------------------------------------------------*/



// functional component
function MOVIE_SEARCH_RESULT___COMPONENT({ searchedKeyword, random_placeholder_movie }) {


    // Note: In the 'useSearchMovieQuery', I am passing 'searchedKeyword' prop as a argument. Also, I have passed a alternative argument 'Frozen'. 'Frozen' is a name of a movie. Initially after the page load, when 'searchedKeyword' is empty, then the api will search for the alternative value 'Frozen' and populate some results on the page. I don't want the page to be empty at the initial load. So, I have passed this alternative default argument.


    // 🍪  useSearchMovie hook
    const { isLoading, isSuccess, isError, data, error, refetch } = useSearchMovie(searchedKeyword || random_placeholder_movie)


    // refetch whenever input changes
    useUpdateEffect(()=>{
        refetch()
    },[searchedKeyword, random_placeholder_movie])

    useLogger('data', data)


    return (

        <Box>

            {

                /*  Immediately invoked anonymous function */
                (() => {

                    if (isLoading) {
                        return (
                            <LOADING_SPINNER___COMPONENT fullPage={false} margin='3rem' />
                        )
                    }

                    else if (isError) {
                        return (


                            <ERROR_TEXT___COMPONENT text='Something is wrong.' />


                        )
                    }

                    else if (isSuccess) {


                        if (data.Response === 'True') {

                            return (

                                <MOVIE_CARD___COMPONENT data={data.Search} />
                            )


                        }

                        else if (data.Response === 'False') {


                            if (data.Error === 'Movie not found!') {

                                return (


                                    <ERROR_TEXT___COMPONENT error_text='No matching results. Maybe give it another shot with different keywords or exact name of the movie.' />


                                )

                            }

                            else if (data.Error === 'Too many results.') {

                                return (


                                    <ERROR_TEXT___COMPONENT error_text='Search with a longer word.' />


                                )
                            }


                        }



                    }


                })()  /* End: Immediately invoked anonymous function */


            }


        </Box>

    )
}







/*-------------------------------------------------------------------
 ✅ Helper function
----------------------------------------------------------------------*/

function get_random_placeholder_movie() {

    // we will have short movie name here, for example Frozen. Because with short keyword, we will get more result and the UI will be filled. Before adding any movie in the array, search the movie and check what result we are getting.
    const short_name_but_famous_movie = [

        'Batman',
        'Superman',
        'Iron Man',
        'Thor',
        'Captain America',
        'Life'
      ]


    const randomIndex = Math.floor(Math.random() * short_name_but_famous_movie.length);
    return short_name_but_famous_movie[randomIndex];
  }

