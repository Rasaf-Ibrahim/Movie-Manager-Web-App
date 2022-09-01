import { Link } from "react-router-dom"

import { Box, Button } from "@mui/material"

import {
    whole_component_css,
    all_cards_wrapper_css,
    a_card_wrapper_css,
    card_image_wrapper_css,
    card_image_css,
    card_all_content_except_image_css,
    movie_type_year_wrapper_css,
    movie_title_css,
} from './style'


export default function DISPLAYING_MOVIE_RESULT({ data }) {


    return (

        /* whole_component */
        <Box sx={{ ...whole_component_css }}>


            {/*  all_cards_wrapper > whole_component */}
            <Box sx={{ ...all_cards_wrapper_css }}>


                {/*  Note: mapping all result here */}
                {data.Search.map((movie) => (


                    /* card_wrapper < all_cards_wrapper */
                    <Box key={movie.imdbID} sx={{ ...a_card_wrapper_css }}>


                        {/* card_image_wrapper > card_wrapper */}
                        <Box sx={{ ...card_image_wrapper_css }}>


                            {
                                /* Note: Some movie's poster is missing */
                                movie.Poster === 'N/A' ?


                                    <Box component='img' sx={{ ...card_image_css }} src="https://via.placeholder.com/750x750.png?text=Sorry,+No+Poster" alt={movie.Title} />

                                    :

                                    <Box component='img' sx={{ ...card_image_css }} src={movie.Poster} alt={movie.Title} />
                            }


                        </Box> {/* End: card_image_wrapper > card_wrapper */}





                        {/* card_all_content_except_image_css < card_wrapper */}
                        <Box sx={{ ...card_all_content_except_image_css }}>



                            {/* movie_title < card_all_content_except_image_css */}

                            <Box component="p" sx={{ ...movie_title_css }} >

                                {movie.Title}

                            </Box>


                            {/* movie_type_year_wrapper < card_all_content_except_image_css */}
                            <Box sx={{ ...movie_type_year_wrapper_css }}>

                                {/* movie_type < movie_type_year_wrapper */}
                                <Box component='p'>

                                    <Box component='span'>Type: </Box>

                                    <Box component='span'>
                                        {/* Capitalizing the first letter */}
                                        {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
                                    </Box>

                                </Box>


                                {/* movie_year < movie_type_year_wrapper */}
                                <Box component='p'>

                                    <Box component='span'>Year: </Box>

                                    <Box component='span'>
                                        {movie.Year}
                                    </Box>

                                </Box>





                            </Box> {/* End: movie_type_year_wrapper < card_all_content_except_image_css */}



                            {/* card_more_info_button < card_all_content_except_image_css */}
                            <Box>

                                <Link to={`/search-movie/${movie.imdbID}`} style={{ textDecoration: 'none' }}>

                                    <Button size="small" color="primary" variant='outlined'>
                                        More Info
                                    </Button>

                                </Link>

                            </Box>


                        </Box> {/* card_all_content_except_image_css < card_wrapper */}


                    </Box> /* End: card_wrapper < all_cards_wrapper */

                ))}

            </Box> {/* End:all_cards_wrapper > whole_component */}


        </Box> /* End: whole_component */
    )
}