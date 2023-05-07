// router hook
import { useParams } from "react-router-dom";

// api hook
import { useMovieDetails } from "@/api/movie/movie-details";


// components
import { Box, Typography } from "@mui/material";

import ERROR_TEXT___COMPONENT from "@/components/reusable/for-any-project/error-text/error-text";
import LOADING_SPINNER___COMPONENT from "@/components/reusable/for-any-project/loading-spinner/loading-spinner";






/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/

export default function MOVIE_DETAILS___COMPONENT() {


    const { id } = useParams()

    const { isLoading, isSuccess, isError, data, error, refetch } = useMovieDetails(id)



    return (


        <Box>

            {

                /* Immediately invoked anonymous function */
                (() => {


                    if (isLoading) {
                        return (
                            <LOADING_SPINNER___COMPONENT fullPage={false} margin='3rem' />
                        )
                    }


                    else if (isError) {

                        return (

                            <ERROR_TEXT___COMPONENT error_text='Something is wrong.' />
                        )
                    }


                    else if (isSuccess) {

                        return (

                            <DISPLAYING_MOVIE_DETAILS data={data} />


                        )
                    }



                })() /* End: Immediately invoked anonymous function */


            }

        </Box>


    )

}



/*-------------------------------------------------------------------
 ✅ Section of <MOVIE_DETAILS___COMPONENT/>
----------------------------------------------------------------------*/


// 🍪
function DISPLAYING_MOVIE_DETAILS({ data }) {




    // 🍔 CSS

    /* Note about Width:
    
    Haven't added any width to the 'whole_component_css' or 'all_contents_css' or 'everything_without_poster_title_css' because these are just wrappers. I don't want to add width to any wrappers. I want to add width to every individual section. So, I have added width to 'poster_img_css' &  'a_info_section_css' 
    
    
     I have created all the breakpoints by multiplying 20rem(320px). So, any individual section's width must be smaller than 20rem(320px). Actually, one section must not have larger than 18rem because then It would be possible to provide 1rem margin to the left and right side. 
    
    */




    const whole_component_css = {
        marginTop: '2.2rem',

        // centering the the content horizontally
        display: 'grid',
        justifyItems: 'center'
    }


    const all_contents_css = {
        padding: '1.1rem',

        backgroundColor: 'background.variation_1',
        boxShadow: 1,

        borderRadius: '1rem',

        display: 'grid',
        justifyItems: 'center',
        textAlign: 'center',
        gap: '2.2rem',
    }


    const poster_image_wrapper_css = {

        boxShadow: 4,

        padding: '0.55rem',
        borderRadius: '1rem',

        // centering the the content horizontally and vertically
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center'

    }



    const poster_img_css = {

        objectFit: 'cover',
        borderRadius: '1rem',
        height: { xs: '26rem', sm: '28rem', md: '32rem', lg: '34rem' },
        width: { xs: '16rem', sm: '19rem', md: '22rem', lg: '25rem' },
    }

    const title_css = {
        marginTop: '1.1rem',
        marginBottom: '1.1rem'
    }


    const everything_without_poster_title_css = {
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },


        // by default, alignItems is 'stretch', it makes lot of section larger than it needs to be. so, changing to 'start'
        alignItems: 'start'



        /* If any section is bigger than than other sections, then you may provide at least "gridRow: 'span 2'" to that section. For example, plot section is larger than other section. So, in the 'movie-detail.jsx' file,on the sx={{}} object of plot section, use gridRow:'span 2'.  */

    }




    const a_info_section_css = {


        width: '18rem',
        minHeight: '8rem',
        padding: '1.5rem',
        backgroundColor: 'background.variation_2',
        boxShadow: 1,
        borderTopColor: 'primary.main',
        borderTop: 6,

        borderRadius: 3,

        gridTemplateColumns: '1fr',

        position: 'relative',


        // centering the the content horizontally & vertically
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center'

    }


    const info_title_css = {

        position: 'absolute',
        top: '-1.5rem',
        left: '-0.5rem',
        padding: '0.55rem',


        borderRadius: 3,

        typography: 'subtitle2',
        fontWeight: 'medium',
        backgroundColor: 'background.variation_2',
        boxShadow: 2
    }


    const info_value_css = {
        padding: '0.55rem',
        typography: 'h6',
    }





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