import { Box, Typography, } from "@mui/material"


// CSS

import { whole_component_css, all_contents_css, poster_image_wrapper_css, poster_img_css, title_css, a_info_section_css, info_title_css, info_value_css, everything_without_poster_title_css } from './style'


export default function DISPLAYING_MOVIE_DETAILS({ data }) {

    return (

        <>

            {/* movie_detail_wrapper_parent */}
            <Box sx={{ ...whole_component_css }}>


                {/* movie_detail_wrapper < movie_detail_wrapper_parent */}
                <Box sx={{ ...all_contents_css }}>


                    {/* poster_wrapper < movie_detail_wrapper */}

                    <Box sx={{ ...poster_image_wrapper_css }}>

                        {
                            /* Note: Some movie's poster is missing */
                            data.Poster === 'N/A' ?


                                <Box component="img" sx={{ ...poster_img_css }} src="https://via.placeholder.com/750x750.png?text=Sorry,+No+Poster" alt={data.Title} />

                                :

                                <Box component="img" sx={{ ...poster_img_css }} src={data.Poster} alt={data.Title} />
                        }

                    </Box> {/* End: poster_wrapper < movie_detail_wrapper */}



                    {/* title < movie_detail_wrapper */}
                    <Typography variant="h3" sx={{ ...title_css }}>{data.Title}</Typography>


                    {/* everything_without_poster_title < movie_detail_wrapper */}
                    <Box sx={{ ...everything_without_poster_title_css }}>

                        {/* release_year < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Release Year
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.Year}
                            </Box>

                        </Box>


                        {/* duration < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Duration
                            </Box>

                            <Box sx={{ ...info_value_css }} >
                                {data.Runtime}
                            </Box>

                        </Box>


                        {/* Only if it's a series, there will be totalSeasons property*/}
                        {
                            data.Type === 'series' && (

                                /* seasons < movie_detail_wrapper */
                                <Box sx={{ ...a_info_section_css }}>

                                    <Box sx={{ ...info_title_css }}>
                                        Total Seasons
                                    </Box>

                                    <Box sx={{ ...info_value_css }} >
                                        {data.totalSeasons}
                                    </Box>

                                </Box>

                            )
                        }



                        {/* imdbRating < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                IMDB Rating
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.imdbRating}
                            </Box>

                        </Box>


                        {/* imdbRating < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Total Rating Providers
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.imdbVotes}
                            </Box>

                        </Box>




                        {/* Only if it's a movie, then there will be boxOffice property*/}
                        {
                            data.Type === 'movie' && (

                                /* boxOffice < movie_detail_wrapper */
                                <Box sx={{ ...a_info_section_css }}>

                                    <Box sx={{ ...info_title_css }}>
                                        Box Office
                                    </Box>

                                    <Box sx={{ ...info_value_css }}>

                                        {data.BoxOffice}

                                    </Box>

                                </Box>

                            )
                        }







                        {/* awards < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Awards
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.Awards}
                            </Box>

                        </Box>


                        {/* genre < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Genre
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.Genre}
                            </Box>

                        </Box>


                        {/* language < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Language
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.Language}
                            </Box>

                        </Box>


                        {/* country < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Country
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.Country}
                            </Box>

                        </Box>




                        {/* actors < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }} >
                                Actors
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.Actors}
                            </Box>

                        </Box>


                        {/* director < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }} >
                                Director
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.Director}
                            </Box>

                        </Box>


                        {/* writer < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }} >
                                Writer
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.Writer}
                            </Box>

                        </Box>



                        {/* plot < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css, gridRow: 'span 2' }}>

                            <Box sx={{ ...info_title_css }} >
                                Plot
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.Plot}
                            </Box>

                        </Box>






                    </Box> {/* End: everything_without_poster_title < movie_detail_wrapper */}



                </Box> {/* End: movie_detail_wrapper < movie_detail_wrapper_parent  */}


            </Box> {/* End: movie_detail_wrapper_parent */}
        </>

    )

}