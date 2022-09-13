import { useState } from "react"

import { Box, TextField, InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';


import MovieResult from "./child-2.1/movie-result"

// CSS
import {from_wrapper_css, search_icon_css} from './style'




// functional component
export default function MovieSearch() {



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
            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{...from_wrapper_css}}>


                <TextField  onChange={handleSearchKeyword} value={searchedKeyword} id="filled-basic" label="Search by name" variant="standard" 
                InputProps={{endAdornment: <InputAdornment position="start"><SearchIcon sx={{...search_icon_css}}/></InputAdornment>}}/>

            </Box>


            <MovieResult searchedKeyword={searchedKeyword} />

        </>
    )
}

