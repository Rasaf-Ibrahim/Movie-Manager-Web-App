import { useState } from "react"

import { Box, TextField, InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';


import MOVIE_SEARCH_RESULT from "./child-1/movie-search-result"

// CSS
import { from_wrapper_css, search_icon_css } from './style'




// functional component
export default function SEARCH_MOVIE() {



    const [searchedKeyword, setSearchedKeyword] = useState('')




    const handleSearchKeyword = (e) => {
        setSearchedKeyword(e.target.value)
    }


    // On the handleSubmit, there is no functionality.  But I am still having this so that the page doesn't get refreshed while clicking on the 'Enter' button after writing something on the search input field.

    const handleSubmit = (e) => {

        e.preventDefault()

    }


    return (

        <>

            {/* from_wrapper */}
            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ ...from_wrapper_css }}>


                <TextField onChange={handleSearchKeyword} value={searchedKeyword} id="filled-basic" label="Search by name" placeholder="Frozen" variant="standard"
                    InputProps={{ endAdornment: <InputAdornment position="start"><SearchIcon sx={{ ...search_icon_css }} /></InputAdornment> }} />

            </Box>


            {/* MOVIE_SEARCH_RESULT Component*/}
            <MOVIE_SEARCH_RESULT

                searchedKeyword={

                    /*While passing the prop, I am using trim() so that  whitespace from both sides of the searchedKeyword string can be ignored */
                    searchedKeyword.trim()
                }
            />

        </>
    )
}

