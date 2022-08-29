import { Box, Typography, } from "@mui/material"


// CSS

import { movie_detail_wrapper_parent_css, movie_detail_wrapper_css, image_css, info_wrapper_css, info_title_css, info_value_css } from './style'

        
export default function MOVIE_DETAIL({ data }) {

    return (

        <>

            {/* movie_detail_wrapper_parent */}
            <Box sx={{ ...movie_detail_wrapper_parent_css }}>


                {/* movie_detail_wrapper < movie_detail_wrapper_parent */}
                <Box sx={{ ...movie_detail_wrapper_css }}>


                    {/* poster_wrapper < movie_detail_wrapper */}

                    <Box>

                        {
                            /* Note: Some movie's poster is missing */
                            data.Poster === 'N/A' ?


                                <img style={{...image_css}} src="https://via.placeholder.com/750x750.png?text=Sorry,+No+Poster" alt={data.Title} loading="lazy" />

                                :

                                <img style={{...image_css}} src={data.Poster} alt={data.Title} loading="lazy" />
                        }

                    </Box> {/* End: poster_wrapper < movie_detail_wrapper */}



                    {/* title < movie_detail_wrapper */}
                    <Typography variant="h4">{data.Title}</Typography>

                        
                    {/* release_year < movie_detail_wrapper */}
                    <Box sx={{ ...info_wrapper_css }}>

                        <Box sx={{ ...info_title_css }}>
                            Release Year
                        </Box>

                        <Box sx={{ ...info_value_css }}>
                            {data.Year}
                        </Box>

                    </Box>


                    {/* duration < movie_detail_wrapper */}
                    <Box sx={{ ...info_wrapper_css }}>

                        <Box sx={{ ...info_title_css }}>
                            Duration
                        </Box>

                        <Box sx={{ ...info_value_css }} >
                            {data.Runtime}
                        </Box>

                    </Box>


                    {/* imdbRating < movie_detail_wrapper */}
                    <Box sx={{ ...info_wrapper_css }}>

                        <Box sx={{ ...info_title_css }}>
                            IMDB Rating
                        </Box>

                        <Box sx={{ ...info_value_css }}>
                            {data.imdbRating}
                        </Box>

                    </Box>



                    {/* genre < movie_detail_wrapper */}
                    <Box sx={{ ...info_wrapper_css }}>

                        <Box sx={{ ...info_title_css }}>
                            Genre
                        </Box>

                        <Box sx={{ ...info_value_css }}>
                            {data.Genre}
                        </Box>

                    </Box>


                    {/* language < movie_detail_wrapper */}
                    <Box sx={{ ...info_wrapper_css }}>

                        <Box sx={{ ...info_title_css }}>
                            Language
                        </Box>

                        <Box sx={{ ...info_value_css }}>
                            {data.Language}
                        </Box>

                    </Box>




                    {/* plot < movie_detail_wrapper */}
                    <Box sx={{ ...info_wrapper_css }}>

                        <Box sx={{ ...info_title_css }} >
                            Plot
                        </Box>

                        <Box sx={{ ...info_value_css }}>
                            {data.Plot}
                        </Box>

                    </Box>



                    {/* actors < movie_detail_wrapper */}
                    <Box sx={{ ...info_wrapper_css }}>

                        <Box sx={{ ...info_title_css }} >
                            Actors
                        </Box>

                        <Box sx={{ ...info_value_css }}>
                            {data.Actors}
                        </Box>

                    </Box>


                    {/* director < movie_detail_wrapper */}
                    <Box sx={{ ...info_wrapper_css }}>

                        <Box sx={{ ...info_title_css }} >
                            Director
                        </Box>

                        <Box sx={{ ...info_value_css }}>
                            {data.Director}
                        </Box>

                    </Box>


                    {/* writer < movie_detail_wrapper */}
                    <Box sx={{ ...info_wrapper_css }}>

                        <Box sx={{ ...info_title_css }} >
                            Writer
                        </Box>

                        <Box sx={{ ...info_value_css }}>
                            {data.Writer}
                        </Box>

                    </Box>


                    {/* boxOffice < movie_detail_wrapper */}
                    <Box sx={{ ...info_wrapper_css }}>

                        <Box sx={{ ...info_title_css }}>
                            Box Office
                        </Box>

                        <Box sx={{ ...info_value_css }}>
                            {data.BoxOffice}
                        </Box>

                    </Box>



                    {/* awards < movie_detail_wrapper */}
                    <Box sx={{ ...info_wrapper_css }}>

                        <Box sx={{ ...info_title_css }}>
                            Awards
                        </Box>

                        <Box sx={{ ...info_value_css }}>
                            {data.Awards}
                        </Box>

                    </Box>





                </Box> {/* End: movie_detail_wrapper < movie_detail_wrapper_parent  */}


            </Box> {/* End: movie_detail_wrapper_parent */}
        </>

    )

}


