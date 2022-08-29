import { Link } from "react-router-dom"

import { Box, Button, Typography, Paper } from "@mui/material"

import {  all_cards_wrapper_css, card_wrapper_css, card_image_css,movie_type_css, card_title_css, card_more_info_button_css} from './style'



export default function MovieResultSuccessful({ data }) {


    return (

       <>

        {/*  all_cards_wrapper */}
        <Box sx={{ ...all_cards_wrapper_css }}>

            {/*  Note: mapping all result here */}
            {data.Search.map((movie) => (

               
                /* card_wrapper < all_cards_wrapper */
                <Paper key={movie.imdbID} elevation={2} sx={{...card_wrapper_css }}>

                 

                    {/* card_image_wrapper > card_wrapper */}
                    <Box sx={{ position: 'relative' }}>

                        {
                            /* Note: Some movie's poster is missing */
                            movie.Poster === 'N/A' ?

                
                                <img style={{...card_image_css}}
                                    src="https://via.placeholder.com/750x750.png?text=Sorry,+No+Poster" alt={movie.Title} loading="lazy"/>

                                :

                                <img style={{ ...card_image_css}}
                                    src={movie.Poster} alt={movie.Title} loading="lazy"/>
                        }


                    {/* movie_type < card_image_wrapper */}
                    <Box sx={{...movie_type_css}}>{movie.Type}</Box>


                 </Box> {/* End: card_image_wrapper > card_wrapper */}



                    {/* card_title < card_wrapper */}
                    
                    <Typography variant="subtitle1" component="div" sx={{...card_title_css}} >

                            {movie.Title} ({movie.Year})

                    </Typography>


               
                    {/* card_more_info_button < card_wrapper */}
                    <Box sx={{...card_more_info_button_css}}>

                        <Link to={`/search-movie/${movie.imdbID}`} style={{textDecoration: 'none'}}>
                                <Button size="small" color="primary">
                                    More Info
                                </Button>
                        </Link>

                    </Box>


                </Paper> /* End: card_wrapper < all_cards_wrapper */


               
            ))}

        </Box> {/* End:all_cards_wrapper */}


      </>
    )
}