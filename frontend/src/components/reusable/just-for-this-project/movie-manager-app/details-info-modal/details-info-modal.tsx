/*__________________________________________

 ✅ import
____________________________________________*/
// forwardRef
import { forwardRef } from "react"

// hook
import { useEffect } from "react"

// types
import { TransitionProps } from '@mui/material/transitions'

// api hook
import { useFetchMovieDetails } from "@/api-calls/movie-manager/tmdb-api/fetch-movie-details-hook"
import { useFetchSeriesDetails } from "@/api-calls/movie-manager/tmdb-api/fetch-series-details-hook"

// icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'


// components
import { Box, Typography, Button, Dialog, Slide, DialogContent } from "@mui/material"

import ERROR_TEXT___COMPONENT from "@/components/reusable/for-any-project/error-text/error-text"
import LOADING_SPINNER___COMPONENT from "@/components/reusable/for-any-project/loading-spinner/loading-spinner"

import BOOKMARK_BUTTONS___COMPONENT from "./bookmarks-button/bookmarks-button"



/*__________________________________________

 ✅ Functional Component
____________________________________________*/
export default function MODAL_OF_DETAILS_INFO___COMPONENT({
    open_details_info_modal,
    handle_close_of_details_info_modal,
    content_type,
    content_id
}) {


    return (
        <Dialog
            fullScreen
            open={open_details_info_modal}
            onClose={handle_close_of_details_info_modal}
            TransitionComponent={TRANSITION_FOR_MODAL___CHILD}
        >

            <TOP_BAR___STYLED>

                <Typography variant='h6'>Details Info</Typography>

                <Button
                    onClick={handle_close_of_details_info_modal}
                    variant='outlined'
                    color='error'
                    startIcon={<CloseRoundedIcon />}
                >
                    Close
                </Button>

            </TOP_BAR___STYLED>


            <DialogContent
                sx={{
                    backgroundColor: 'background.default'
                }}>



                <FETCH_DETAILS_INFO___COMPONENT
                    content_id={content_id}
                    content_type={content_type}
                />


            </DialogContent>
        </Dialog>
    )
}





/*__________________________________________

 ✅ TRANSITION_FOR_MODAL___CHILD - 
 Child Component of
 <MODAL_OF_DETAILS_INFO___COMPONENT/>
____________________________________________*/

// 🍪

interface ModalTransitionProps extends TransitionProps {
    children: React.ReactElement
}


const TRANSITION_FOR_MODAL___CHILD = forwardRef<unknown, ModalTransitionProps>((props, ref) => {

    return <Slide direction="up" ref={ref} {...props} />
})


TRANSITION_FOR_MODAL___CHILD.displayName = "TRANSITION_FOR_MODAL___CHILD"




/*__________________________________________

 ✅ FETCH_DETAILS_INFO___COMPONENT - 
 Child Component of
 <MODAL_OF_DETAILS_INFO___COMPONENT/>
____________________________________________*/


function FETCH_DETAILS_INFO___COMPONENT({ content_id, content_type }) {


    return (

        <>

            {content_type === 'movie' &&

                <FETCH_MOVIE_DETAILS___COMPONENT content_id={content_id} content_type={content_type} />

            }


            {content_type === 'series' &&

                <FETCH_SERIES_DETAILS___COMPONENT content_id={content_id} content_type={content_type} />

            }

        </>
    )
}





/*__________________________________________

 ✅ Child Components of 
 <FETCH_DETAILS_INFO___COMPONENT/>
____________________________________________*/

// 🍪
function FETCH_MOVIE_DETAILS___COMPONENT({ content_id, content_type }) {


    const { isLoading, isSuccess, isError, data, refetch } = useFetchMovieDetails(content_id)

    useEffect(() => {

        refetch()

    }, [])



    // TSX
    return (

        <Box>

            {

                /* Immediately invoked anonymous function */
                (() => {


                    if (isLoading) {
                        return (
                            <LOADING_SPINNER___COMPONENT full_screen={false} margin='10rem' />
                        )
                    }


                    else if (isError) {
                        return (
                            <ERROR_TEXT___COMPONENT error_text='Something is wrong.' />
                        )
                    }


                    else if (isSuccess) {
                        return (
                            <DISPLAYING_DETAILS___CHILD data={data.info.movie_details} content_type={content_type} />
                        )
                    }



                })()

            }

        </Box>

    )

}



// 🍪
function FETCH_SERIES_DETAILS___COMPONENT({ content_id, content_type }) {

    const { isLoading, isSuccess, isError, data, refetch } = useFetchSeriesDetails(content_id)

    useEffect(() => {

        refetch()

    }, [])


    // TSX
    return (

        <Box>

            {

                /* Immediately invoked anonymous function */
                (() => {


                    if (isLoading) {
                        return (
                            <LOADING_SPINNER___COMPONENT full_screen={false} margin='10rem' />
                        )
                    }


                    else if (isError) {

                        return (
                            <ERROR_TEXT___COMPONENT error_text='Something is wrong.' />
                        )
                    }


                    else if (isSuccess) {

                        return (
                            <DISPLAYING_DETAILS___CHILD data={data.info.series_details} content_type={content_type} />
                        )
                    }

                })()

            }

        </Box>

    )


}



/*__________________________________________

 ✅ Child Components of 
 <FETCH_MOVIE_DETAILS___COMPONENT/> &
 <FETCH_SERIES_DETAILS___COMPONENT/>
____________________________________________*/

// 🍪
function DISPLAYING_DETAILS___CHILD({ data, content_type }) {


    const whole_component_css = {
        marginTop: '2rem',
        marginBottom: '2rem',

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
        borderTop: 3,

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

        typography: 'body2',
        fontWeight: 'medium',
        backgroundColor: 'background.variation_3',
        boxShadow: 2
    }


    const info_value_css = {
        padding: '0.55rem',
        typography: 'body1',
    }




    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
    }, [])



    // TSX
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
                            data.poster_url.includes('null') ?


                                <Box component="img" sx={{ ...poster_img_css }} src="https://via.placeholder.com/750x750.png?text=Sorry,+No+Poster" alt={data.title} />

                                :

                                <Box component="img" sx={{ ...poster_img_css }} src={data.poster_url} alt={data.title} />
                        }

                    </Box> {/* End: poster_wrapper < movie_detail_wrapper */}


                    {/* title < movie_detail_wrapper */}
                    <Typography variant="h4" color='primary.main'>{data.title}
                    </Typography>



                    <Box sx={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>

                        <BOOKMARK_BUTTONS___COMPONENT
                            content_type={content_type}
                            content_id={data.id}
                            content_data={data}
                        />

                    </Box>


                    {/* everything_without_poster_title < movie_detail_wrapper */}
                    <Box sx={{ ...everything_without_poster_title_css }}>


                        {/* genre < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Genre
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.genre}
                            </Box>

                        </Box>


                        {/* viewer approval < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Viewer Approval
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.viewer_approval}
                            </Box>

                        </Box>


                        {/* release_year < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Year
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.year}
                            </Box>

                        </Box>



                        {/* language < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Language
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.language}
                            </Box>

                        </Box>



                        {/* Only if it's a series, there will be totalSeasons property*/}
                        {
                            content_type === 'series' && (

                                <>

                                    {/* seasons < movie_detail_wrapper */}
                                    <Box sx={{ ...a_info_section_css }}>

                                        <Box sx={{ ...info_title_css }}>
                                            Total Seasons
                                        </Box>

                                        <Box sx={{ ...info_value_css }} >
                                            {data.total_seasons}
                                        </Box>

                                    </Box>

                                    {/* seasons < movie_detail_wrapper */}
                                    <Box sx={{ ...a_info_section_css }}>

                                        <Box sx={{ ...info_title_css }}>
                                            Total Episodes
                                        </Box>

                                        <Box sx={{ ...info_value_css }} >
                                            {data.total_episodes}
                                        </Box>

                                    </Box>

                                </>

                            )
                        }




                        {/* Only if it's a movie, then there will be boxOffice property*/}
                        {
                            content_type === 'movie' && (

                                <>

                                    {/* duration < movie_detail_wrapper */}
                                    <Box sx={{ ...a_info_section_css }}>

                                        <Box sx={{ ...info_title_css }}>
                                            Runtime (minute)
                                        </Box>

                                        <Box sx={{ ...info_value_css }} >
                                            {data.runtime}
                                        </Box>

                                    </Box>


                                    {/* boxOffice < movie_detail_wrapper  */}
                                    <Box sx={{ ...a_info_section_css }}>

                                        <Box sx={{ ...info_title_css }}>
                                            Budget
                                        </Box>

                                        <Box sx={{ ...info_value_css }}>

                                            {data.budget}

                                        </Box>

                                    </Box>



                                    {/* boxOffice < movie_detail_wrapper  */}
                                    <Box sx={{ ...a_info_section_css }}>

                                        <Box sx={{ ...info_title_css }}>
                                            Box Office
                                        </Box>

                                        <Box sx={{ ...info_value_css }}>

                                            {data.box_office}

                                        </Box>

                                    </Box>

                                </>

                            )
                        }





                        {/* country < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Production Countries
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.production_countries}
                            </Box>

                        </Box>


                        {/* plot < movie_detail_wrapper */}
                        <Box sx={{ ...a_info_section_css, gridRow: 'span 2' }}>

                            <Box sx={{ ...info_title_css }} >
                                Overview
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.overview}
                            </Box>

                        </Box>






                    </Box> {/* End: everything_without_poster_title < movie_detail_wrapper */}



                </Box> {/* End: movie_detail_wrapper < movie_detail_wrapper_parent  */}


            </Box> {/* End: movie_detail_wrapper_parent */}
        </>

    )

}




/*__________________________________________

 ✅ Styled Components of
  <MODAL_OF_DETAILS_INFO___COMPONENT/>
____________________________________________*/


function TOP_BAR___STYLED({ children }) {

    return (
        <Box sx={{
            padding: '2rem',
            backgroundColor: 'background.variation_2',

            boxShadow: 2,

            display: 'flex',
            justifyContent: 'space-between'
        }}>

            {children}

        </Box>
    )
}
