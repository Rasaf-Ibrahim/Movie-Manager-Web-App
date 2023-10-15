/*__________________________________________

 ✅ import 
____________________________________________*/

// hook
import { useState, useEffect } from "react"

// api hook
import { useFetchUserBookmarks } from "@/api-calls/movie-manager/bookmark/fetch-all-bookmark-of-a-user-hook"
import { useRemoveFromBookmark } from "@/api-calls/movie-manager/bookmark/remove-from-bookmark"

// components
import { Box, Button, Typography, Skeleton, Pagination } from '@mui/material'

import MODAL_OF_DETAILS_INFO___COMPONENT from "@/components/reusable/just-for-this-project/movie-manager-app/details-info-modal/details-info-modal"

import ERROR_TEXT___COMPONENT from "@/components/reusable/for-any-project/error-text/error-text"
import LOADING_SPINNER___COMPONENT from "@/components/reusable/for-any-project/loading-spinner/loading-spinner"



/*__________________________________________

 ✅ Functional Component 
____________________________________________*/
export default function BOOKMARKED_CARDS___COMPONENT({
    bookmark_type,
    content_type
}) {


    // page state
    const [page_state, set_page_state] = useState(1)

    // useFetchUserBookmarks
    const {
        refetch,
        fetchStatus,
        isFetching,
        isSuccess,
        isError,
        error,
        data
    } = useFetchUserBookmarks({
        bookmark_type: bookmark_type,
        content_type: content_type,
        page: page_state
    })


    // Fetch on mount and refetch when page state changes
    useEffect(() => {

        refetch()

    }, [page_state])


    useEffect(() => {

        if (isError) {

            let error_message = (error as any).response.data.message

            let total_pages = error_message.match(/Total pages available: \d+/)?.[0].split(":")[1]?.trim();

            if (total_pages) {
                set_page_state(total_pages)
            }
        }

    }, [fetchStatus])




    // TSX
    return (
        (() => {

            if (isFetching) {
                return (

                    <LOADING_SPINNER___COMPONENT full_screen={false} margin="10rem" />
                )
            }


            else if (isError && !(error as any).response.data.message.toLowerCase().includes('total pages')
            ) {

                return (

                    <Box sx={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

                        <ERROR_TEXT___COMPONENT error_text="Something is wrong"
                        />

                        <Button
                            variant="outlined"
                            onClick={() => refetch()}>
                            Retry
                        </Button>

                    </Box>
                )
            }


            else if (isSuccess) {

                return (

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>

                        <DISPLAY_BOOKMARKS___COMPONENT
                            data={data.fetched_documents}
                            bookmark_type={bookmark_type}
                            content_type={content_type}
                            refetch_bookmarks={refetch}
                        />

                        <PAGINATION___CHILD
                            total_pages={data.info.total_pages}
                            page_state={page_state}
                            set_page_state={set_page_state}
                        />

                    </Box>

                )
            }

        })()
    )
}




function DISPLAY_BOOKMARKS___COMPONENT({
    data,
    bookmark_type,
    content_type,
    refetch_bookmarks
}) {

    // open details info modal state
    const [open_details_info_modal_state, set_open_details_info_modal_state] = useState(null)

    const handle_click_on_more_info_button = (content_id) => {
        set_open_details_info_modal_state(content_id)
    }

    const handle_close_of_details_info_modal = () => {
        set_open_details_info_modal_state(null)
    }


    // remove from bookmark
    const {
        mutate: delete_from_bookmark,
        isSuccess: deleted_successfully,
        status: status_of_removing_from_bookmark
    } = useRemoveFromBookmark()


    const handle_delete_from_bookmark = async (content_id) => {

        delete_from_bookmark({
            content_ids: [`${content_id}`],
            content_type: content_type,
            bookmark_type: bookmark_type
        })

    }


    useEffect(() => {

        if (deleted_successfully) {
            refetch_bookmarks()
        }

    }, [status_of_removing_from_bookmark])



    // ✅ TSX
    return (

        <WRAPPER_OF_ALL_CARD___STYLED>

            {data.length === 0 &&

                <Typography variant='body1' color='error.main' sx={{ marginTop: '1rem' }}>
                    There is no {content_type} in this list!
                </Typography>

            }

            {data.length !== 0 && data.map((data_one_card) =>

                <CARD___STYLED key={data_one_card._id}>

                    <CARD_IMAGE_WRAPPER___STYLED>

                        <CARD_IMAGE___CHILD data={data_one_card} />

                    </CARD_IMAGE_WRAPPER___STYLED>



                    <CARD_ALL_CONTENT_EXCEPT_IMAGE___STYLED>

                        <CARD_TITLE___STYLED>
                            {data_one_card.title}
                        </CARD_TITLE___STYLED>

                        <CARD_SUBTITLE_TEXT_WRAPPER___STYLED>

                            <CARD_SUBTITLE___STYLED>
                                Year: {data_one_card.year}
                            </CARD_SUBTITLE___STYLED>

                        </CARD_SUBTITLE_TEXT_WRAPPER___STYLED>


                        <WRAPPER_OF_CARD_BUTTON___STYLED>

                            <CARD_BUTTON___STYLED onClick={() => handle_click_on_more_info_button(data_one_card.content_id)}>
                                More Info
                            </CARD_BUTTON___STYLED>


                            <CARD_BUTTON___STYLED onClick={() => handle_delete_from_bookmark(data_one_card.content_id)}>
                                Remove
                            </CARD_BUTTON___STYLED>


                        </WRAPPER_OF_CARD_BUTTON___STYLED>


                    </CARD_ALL_CONTENT_EXCEPT_IMAGE___STYLED>



                    {/* MODAL of Details Info - This is hidden */}
                    <MODAL_OF_DETAILS_INFO___COMPONENT
                        open_details_info_modal={open_details_info_modal_state === data_one_card.content_id}
                        handle_close_of_details_info_modal={handle_close_of_details_info_modal}
                        content_id={data_one_card.content_id}
                        content_type={content_type}
                    />


                </CARD___STYLED>

            )}

        </WRAPPER_OF_ALL_CARD___STYLED>

    )
}



/*__________________________________________

 ✅ PAGINATION___CHILD - Child Components of 
 <TOP_RATED___COMPONENT/>
____________________________________________*/

function PAGINATION___CHILD({ page_state, set_page_state, total_pages }) {


    const handleChange = (event, value) => {
        set_page_state(value)
    }


    return (

        <>

            <Pagination
                onChange={handleChange}
                count={total_pages}
                page={Number(page_state)}
                variant="outlined"
            />

        </>

    )

}



/*__________________________________________

 ✅ CARD_IMAGE___CHILD - Child Component 
 of <CARD___COMPONENT/>
____________________________________________*/


function CARD_IMAGE___CHILD({ data }) {

    const [isImageLoading, setIsImageLoading] = useState(true)

    return (

        <>

            {(() => {


                if (data.poster_url.includes('null')) {
                    return (

                        <CARD_IMAGE___STYLED
                            src="https://via.placeholder.com/750x750.png?text=Sorry,+No+Poster" />

                    )
                }

                else {

                    return (

                        <>

                            {isImageLoading &&

                                <CARD_IMAGE_SKELETON___STYLED />

                            }

                            <CARD_IMAGE___STYLED
                                style={{ display: isImageLoading ? 'none' : 'block' }}
                                src={data.poster_url}
                                onLoad={() => setIsImageLoading(false)}
                            />


                        </>

                    )
                }

            })()}



        </>

    )
}





/*__________________________________________

 ✅ Styled Components of 
 <CARD___COMPONENT/>
____________________________________________*/

// 🍪
function WRAPPER_OF_ALL_CARD___STYLED({ children, ...props }) {

    return (
        <Box
            sx={{
                margin: '1rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center'
            }}

            {...props}
        >

            {children}

        </Box>
    )
}


// 🍪
function CARD___STYLED({ children, ...props }) {

    return (
        <Box
            sx={(theme) => ({

                // width, 17rem in the phone, 34rem on other devices
                width: {
                    xs: '17rem',
                    sm: '34rem',
                    md: '34rem',
                    lg: '34rem',
                    xl: '34rem'
                },

                padding: '1rem',

                // padding-top
                paddingTop: {
                    xs: '0.5rem',
                    sm: '1rem',
                    md: '1rem',
                    lg: '1rem',
                    xl: '1rem'
                },

                // no background-color in the light mode
                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.variation_1 : 'inherit',

                // no border in the dark mode
                border: theme.palette.mode === 'dark' ? 'none' : `1px solid ${theme.palette.divider}`,

                borderRadius: '0.5rem',
                boxShadow: 1,

                display: 'grid',
                alignItems: 'center',

                // gap
                gap: {
                    xs: '1rem',
                    sm: '2rem',
                    md: '2rem',
                    lg: '2rem',
                    xl: '2rem'
                },

                // grid-template-areas
                gridTemplateAreas: {
                    xs: `'card_image_wrapper' 
                    'card_all_content_except_image'`,

                    sm: `'card_all_content_except_image card_all_content_except_image  card_image_wrapper'`,

                    md: `'card_all_content_except_image card_all_content_except_image  card_image_wrapper'`,

                    lg: `'card_all_content_except_image card_all_content_except_image  card_image_wrapper'`,

                    xl: `'card_all_content_except_image card_all_content_except_image  card_image_wrapper'`
                }

            })}

            {...props}
        >

            {children}

        </Box>
    )

}


// 🍪
function CARD_IMAGE_WRAPPER___STYLED({ children, ...props }) {

    return (
        <Box
            sx={{
                gridArea: 'card_image_wrapper',

                display: 'flex',
                justifyContent: 'center'
            }}

            {...props}
        >

            {children}
        </Box>
    )
}


// 🍪
function CARD_ALL_CONTENT_EXCEPT_IMAGE___STYLED({ children, ...props }) {

    return (

        <Box
            sx={{
                gridArea: 'card_all_content_except_image',

                display: 'flex',
                flexDirection: 'column',
                justifyItems: 'center',
                gap: '1.5rem'
            }}

            {...props}
        >

            {children}

        </Box>

    )
}


// 🍪
function CARD_TITLE___STYLED({ children, ...props }) {

    return (
        <Typography
            variant='h6'

            sx={{
                textAlign: { xs: 'center', sm: 'left' }
            }}

            {...props}
        >

            {children}

        </Typography>
    )

}


// 🍪
function CARD_SUBTITLE_TEXT_WRAPPER___STYLED({ children, ...props }) {

    return (
        <Box
            sx={{
                textAlign: { xs: 'center', sm: 'left' }
            }}

            {...props}
        >

            {children}

        </Box>
    )

}


// 🍪
function CARD_SUBTITLE___STYLED({ children, ...props }) {

    return (
        <Typography
            variant='body2'
            {...props}
        >

            {children}

        </Typography>
    )
}




// 🍪
function WRAPPER_OF_CARD_BUTTON___STYLED({ children, ...props }) {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'flex-start' },
                gap: '1.5rem'
            }}
            {...props}
        >

            {children}

        </Box>
    )
}



// 🍪
function CARD_BUTTON___STYLED({ children, ...props }) {

    return (
        <Button
            variant='outlined'
            size='small'
            {...props}
        >

            {children}

        </Button>
    )
}




/*__________________________________________

 ✅ Styled Components of 
 <CARD_IMAGE___CHILD/>
____________________________________________*/


// 🍪
function CARD_IMAGE___STYLED({ ...props }) {

    return (
        <Box
            component='img'
            sx={{

                /*  
                    🚩 Here, I shouldn't use width more than 15rem because the card width is 17rem and we want some space around the image.
            
                    🚩 width 15rem & height 10rem will create aspect ratio of 3:2. On the other hand, width 10rem & height 8rem also creates aspect ratio of 5:4
                */

                width: { xs: '15rem', sm: '12rem' },

                height: { xs: '10rem', sm: '8rem' },

                objectFit: 'cover',

                borderRadius: '1rem'
            }}

            {...props}
        />
    )
}



// 🍪
function CARD_IMAGE_SKELETON___STYLED({ ...props }) {

    return (
        <Skeleton
            sx={{
                width: { xs: '15rem', sm: '12rem' },

                height: { xs: '10rem', sm: '8rem' },

                borderRadius: '1rem'
            }}

            {...props}
        />
    )
}

