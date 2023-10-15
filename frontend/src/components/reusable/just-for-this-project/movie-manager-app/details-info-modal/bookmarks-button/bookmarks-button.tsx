/*__________________________________________

 ✅ import 
____________________________________________*/

// hook
import { useEffect } from "react"
import { useImmer } from "use-immer"

// api hook
import { useAddToBookmark } from "@/api-calls/movie-manager/bookmark/add-to-bookmark-hook"
import { useFetchUserBookmark } from "@/api-calls/movie-manager/bookmark/fetch-a-bookmark-of-a-user-hook";
import { useRemoveFromBookmark } from "@/api-calls/movie-manager/bookmark/remove-from-bookmark"

// styled-components
import { useTheme } from '@mui/material/styles'

// icons
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import QueueIcon from "@mui/icons-material/Queue"
import DoneAllIcon from '@mui/icons-material/DoneAll'

// components
import { Box, IconButton, Tooltip, CircularProgress } from "@mui/material"
import { type_of_anything, type_of_func_prop_with_no_rule } from "@/types/commonly-used-types";



/*__________________________________________

 ✅ Functional Component 
____________________________________________*/
export default function BOOKMARK_BUTTONS___COMPONENT({ content_type, content_id, content_data }) {

    // 🍪 States

    // bookmark state
    const [bookmark_state, update_bookmark_state] = useImmer({
        watchlist: null,
        favorite: null,
        watched: null,
    })


    // async operation is going on state
    const [async_operation_is_going_on_state, update_async_operation_is_going_on_state] = useImmer({
        watchlist: false,
        favorite: false,
        watched: false,
    })


    // 🍪 Fetch, Add & Remove Bookmark

    // fetch bookmark 
    const {
        refetch: refetch_the_bookmark,
        fetchStatus: bookmark_fetch_status,
        isFetching: fetching_the_bookmark,
        isSuccess: the_content_is_already_in_the_bookmark,
        isError: the_content_is_not_already_in_the_bookmark,
        data: data_of_fetched_bookmark
    } = useFetchUserBookmark({
        content_id: content_id,
        content_type: content_type
    })


    // add to bookmark
    const {
        mutate: add_to_bookmark,
        isLoading: adding_to_bookmark,
        status: status_of_adding_to_bookmark,
        data: data_of_adding_to_bookmark,
    } = useAddToBookmark()


    const handle_add_to_bookmark = async (bookmark_type) => {

        update_async_operation_is_going_on_state(draft => {
            draft[bookmark_type] = true
        })

        await add_to_bookmark({
            bookmark_type: bookmark_type,
            content_type: content_type,
            content_id: content_id,
            title: content_data.title,
            year: content_data.year,
            poster_url: content_data.poster_url
        })

    }


    // remove from bookmark
    const {
        mutate: delete_from_bookmark,
        isLoading: deleting_from_bookmark,
        status: status_of_removing_from_bookmark,
        data: data_of_deleting_from_bookmark,
    } = useRemoveFromBookmark()



    const handle_delete_from_bookmark = async (bookmark_type) => {

        update_async_operation_is_going_on_state(draft => {
            draft[bookmark_type] = true
        })

        await delete_from_bookmark({
            content_ids: [`${content_id}`],
            content_type: content_type,
            bookmark_type: bookmark_type
        })
    }



    // 🍪 Update State

    // update bookmark state on initial fetch
    useEffect(() => {

        if (the_content_is_already_in_the_bookmark) {

            const bookmarkTypes = data_of_fetched_bookmark.fetched_document.bookmark_types


            // watchlist
            if (bookmarkTypes.includes('watchlist')) {
                update_bookmark_state(draft => {
                    draft.watchlist = true
                })
            }

            // favorite
            if (bookmarkTypes.includes('favorite')) {
                update_bookmark_state(draft => {
                    draft.favorite = true
                })
            }

            // watched
            if (bookmarkTypes.includes('watched')) {
                update_bookmark_state(draft => {
                    draft.watched = true
                })
            }

        }


    }, [bookmark_fetch_status])




    // update bookmark state after adding to bookmark
    useEffect(() => {

        if (status_of_adding_to_bookmark === 'success') {

            let message = (data_of_adding_to_bookmark as any).data.message

            if (message.includes('watchlist')) {

                update_bookmark_state(draft => {
                    draft.watchlist = true
                })

                update_async_operation_is_going_on_state(draft => {
                    draft.watchlist = false
                })
            }


            else if (message.includes('favorite')) {

                update_bookmark_state(draft => {
                    draft.favorite = true
                })

                update_async_operation_is_going_on_state(draft => {
                    draft.favorite = false
                })
            }


            else if (message.includes('watched')) {

                update_bookmark_state(draft => {
                    draft.watched = true
                })

                update_async_operation_is_going_on_state(draft => {
                    draft.watched = false
                })
            }

        }

    }, [status_of_adding_to_bookmark])



    // update bookmark state after adding to bookmark
    useEffect(() => {

        if (status_of_removing_from_bookmark === 'success') {

            let message = (data_of_deleting_from_bookmark as any).data.message

            if (message.includes('watchlist')) {

                update_bookmark_state(draft => {
                    draft.watchlist = false
                })

                update_async_operation_is_going_on_state(draft => {
                    draft.watchlist = false
                })
            }


            else if (message.includes('favorite')) {

                update_bookmark_state(draft => {
                    draft.favorite = false
                })

                update_async_operation_is_going_on_state(draft => {
                    draft.favorite = false
                })
            }


            else if (message.includes('watched')) {

                update_bookmark_state(draft => {
                    draft.watched = false
                })

                update_async_operation_is_going_on_state(draft => {
                    draft.watched = false
                })
            }

        }

    }, [status_of_removing_from_bookmark])





    // ✅ TSX
    return (
        <>

            <Box sx={{
                padding: '0.2rem', paddingTop: '1.5rem', backgroundColor: 'background.variation_2', boxShadow: 1,
                borderTopColor: 'primary.main',
                borderTop: 3,

                borderRadius: 3,

                gridTemplateColumns: '1fr',

                position: 'relative', display: 'flex', gap: '1.5rem'
            }}>


                <Box sx={{
                    position: 'absolute',
                    top: '-1.5rem',
                    left: '-0.5rem',
                    padding: '0.55rem',
                    borderRadius: 3,
                    typography: 'body2',
                    fontWeight: 'medium',
                    backgroundColor: 'background.variation_3',
                    boxShadow: 2
                }}>
                    Bookmark
                </Box>


                <WATCHLIST_BUTTONS___CHILD

                    bookmark_state={bookmark_state}
                    handle_delete_from_bookmark={handle_delete_from_bookmark}
                    handle_add_to_bookmark={handle_add_to_bookmark}
                    async_operation_is_going_on_state={async_operation_is_going_on_state}
                />


                <FAVORITE_BUTTONS___CHILD
                    bookmark_state={bookmark_state}
                    handle_delete_from_bookmark={handle_delete_from_bookmark}
                    handle_add_to_bookmark={handle_add_to_bookmark}
                    async_operation_is_going_on_state={async_operation_is_going_on_state}
                />


                <WATCHED_BUTTONS___CHILD

                    bookmark_state={bookmark_state}
                    handle_delete_from_bookmark={handle_delete_from_bookmark}
                    handle_add_to_bookmark={handle_add_to_bookmark}
                    async_operation_is_going_on_state={async_operation_is_going_on_state}
                />



            </Box>

        </>
    )
}



/*__________________________________________

 ✅ WATCHLIST_BUTTONS___CHILD - 
 Child Component of <BOOKMARK_BUTTONS___COMPONENT/>
____________________________________________*/

function WATCHLIST_BUTTONS___CHILD({
    bookmark_state,
    handle_delete_from_bookmark,
    handle_add_to_bookmark,
    async_operation_is_going_on_state
}) {

    return (

        <>

            {bookmark_state.watchlist ?

                <ADD_OR_REMOVE_BUTTON____CHILD
                    onClick={() => handle_delete_from_bookmark('watchlist')}
                    purpose='removing_from_bookmark'
                    tooltip_title="Remove from Watchlist"
                    Icon={QueueIcon}
                    is_async_operation_going_on={async_operation_is_going_on_state.watchlist}
                />

                :

                <ADD_OR_REMOVE_BUTTON____CHILD
                    onClick={() => handle_add_to_bookmark('watchlist')}
                    purpose='adding_to_bookmark'
                    tooltip_title="Add to Watchlist"
                    Icon={QueueIcon}
                    is_async_operation_going_on={async_operation_is_going_on_state.watchlist}
                />

            }
        </>


    )
}



/*__________________________________________

 ✅ FAVORITE_BUTTONS___CHILD - 
 Child Component of <BOOKMARK_BUTTONS___COMPONENT/>
____________________________________________*/

function FAVORITE_BUTTONS___CHILD({
    bookmark_state,
    handle_delete_from_bookmark,
    handle_add_to_bookmark,
    async_operation_is_going_on_state
}) {

    return (

        <>

            {bookmark_state.favorite ?

                <ADD_OR_REMOVE_BUTTON____CHILD
                    onClick={() => handle_delete_from_bookmark('favorite')}
                    purpose='removing_from_bookmark'
                    tooltip_title="Remove from Favorite"
                    Icon={FavoriteRoundedIcon}
                    is_async_operation_going_on={async_operation_is_going_on_state.favorite}
                />

                :

                <ADD_OR_REMOVE_BUTTON____CHILD
                    onClick={() => handle_add_to_bookmark('favorite')}
                    purpose='adding_to_bookmark'
                    tooltip_title="Add to Favorite"
                    Icon={FavoriteRoundedIcon}
                    is_async_operation_going_on={async_operation_is_going_on_state.favorite}
                />

            }

        </>

    )
}



/*__________________________________________

 ✅ WATCHED_BUTTONS___CHILD - 
 Child Component of <BOOKMARK_BUTTONS___COMPONENT/>
____________________________________________*/

function WATCHED_BUTTONS___CHILD({
    bookmark_state,
    handle_delete_from_bookmark,
    handle_add_to_bookmark,
    async_operation_is_going_on_state
}) {

    return (

        <>
            {bookmark_state.watched ?

                <ADD_OR_REMOVE_BUTTON____CHILD
                    onClick={() => handle_delete_from_bookmark('watched')}
                    purpose='removing_from_bookmark'
                    tooltip_title="Remove from Watched"
                    Icon={DoneAllIcon}
                    is_async_operation_going_on={async_operation_is_going_on_state.watched}
                />

                :

                <ADD_OR_REMOVE_BUTTON____CHILD
                    onClick={() => handle_add_to_bookmark('watched')}
                    purpose='adding_to_bookmark'
                    tooltip_title="Add to Watched"
                    Icon={DoneAllIcon}
                    is_async_operation_going_on={async_operation_is_going_on_state.watched}
                />

            }
        </>

    )
}





/*__________________________________________

 ✅ ADD_OR_REMOVE_BUTTON____CHILD - 
 Child Component of multiple components
____________________________________________*/

type type_of_payload = {
    onClick: type_of_func_prop_with_no_rule

    purpose: 'adding_to_bookmark' | 'removing_from_bookmark'
    tooltip_title: string

    Icon: type_of_anything
    is_async_operation_going_on: boolean
}


function ADD_OR_REMOVE_BUTTON____CHILD(payload: type_of_payload) {

    const {
        onClick,
        purpose,
        tooltip_title,
        Icon,
        is_async_operation_going_on
    } = payload


    const theme = useTheme()


    return (

        <Tooltip title={tooltip_title} arrow>

            <IconButton
                onClick={onClick}
                sx={{
                    fontSize: '1.8rem',
                    color: purpose === 'adding_to_bookmark' ? `${theme.palette.primary.main}` : `${theme.palette.error.main}`
                }}
                disabled={is_async_operation_going_on}
            >

                {is_async_operation_going_on ?

                    <CircularProgress size='1.7rem' />

                    :

                    <Icon />
                }

            </IconButton>

        </Tooltip>
    )
}



