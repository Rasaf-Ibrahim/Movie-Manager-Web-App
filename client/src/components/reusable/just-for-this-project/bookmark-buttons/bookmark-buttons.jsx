// api hook
import {
    add_to_favorite_hook,
    fetch_a_favorite_movie_hook,
    delete_from_favorite_hook
} from "@/api/movie/favorite-movie";

import {
    add_to_yet_to_watch_hook,
    fetch_a_yet_to_watch_movie_hook,
    delete_from_yet_to_watch_hook
} from "@/api/movie/yet-to-watch-movie"


import {
    add_to_already_watched_hook,
    fetch_a_already_watched_movie_hook,
    delete_from_already_watched_hook
} from "@/api/movie/already-watched-movie"


// importing zustand store
import { user_store } from "@/store/user-store"



// styled-components
import { styled } from '@mui/material/styles'


// icons
import BookmarkIcon from "@mui/icons-material/Bookmark";
import QueueIcon from "@mui/icons-material/Queue";
import DoneAllIcon from '@mui/icons-material/DoneAll';



// components
import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";


import { useEffect } from "react";
import { useLogger, useMount, useUpdateEffect } from "react-use";
import { useImmer } from "use-immer";



export default function BOOKMARK_BUTTONS___COMPONENT({movie_data,imdb_id}) { 

        // 🍪 get the user state properties 
        const { user_info } = user_store(state => ({
            user_info: state?.user_info
        }))
    
    
        // 🍪 bookmark state
        const initial_state_of_bookmark_state = {
            favorite: null,
            yet_to_watch: null,
            already_watched: null
        }


        
        const [bookmark_state, update_bookmark_state] = useImmer(initial_state_of_bookmark_state)
    

        useLogger(bookmark_state, 'bookmark_state')
        // ✅✅✅✅✅
    
        // 🍪 fetch a favorite movie and update bookmark state
        const {
           refetch: fetch_the_favorite_movie, 
           isSuccess: the_movie_is_in_the_favorite_list,
           isError: the_movie_is_not_in_the_favorite_list,
        } = fetch_a_favorite_movie_hook({
            user_id: user_info._id, 
            imdb_id: movie_data.imdbID
        })
    

        useMount(()=> {
            fetch_the_favorite_movie()
        })
    
    

        useUpdateEffect(()=> {

          if(the_movie_is_in_the_favorite_list) {

            update_bookmark_state(draft=> {
                draft.favorite = true
            })
          }

          else if (the_movie_is_not_in_the_favorite_list) {
            update_bookmark_state(draft=> {
                draft.favorite = false
            })
          }
    
        },[the_movie_is_in_the_favorite_list, the_movie_is_not_in_the_favorite_list ])
    
    
    
        // 🍪 add a movie to the favorite list and update bookmark state
        const {
            mutate: add_movie_to_favorite, 
            isSuccess: movie_is_added_to_favorite,
            isError: movie_is_not_added_to_favorite
        } = add_to_favorite_hook()
    
    
        const handle_add_movie_to_favorite = async () => {
    
            await add_movie_to_favorite({    
                "user_id": `${user_info._id}`,
                "Title": `${movie_data.Title}`,
                "Poster": `${movie_data.Poster}`,
                "Type": `${movie_data.Type}`,
                "Year": `${movie_data.Year}`,
                "imdbID": `${movie_data.imdbID}`
            })
    
        }
    
    
        useUpdateEffect(()=> {
    
            update_bookmark_state(draft => {
    
                if(movie_is_added_to_favorite) {
                    draft.favorite = true
                }

                else if(movie_is_not_added_to_favorite) {
                    draft.favorite = false
                }

            })
    
        },[movie_is_added_to_favorite, movie_is_not_added_to_favorite])
    
    
    

        // 🍪 delete a movie from the favorite list and update bookmark state

        const {
            mutate: delete_movie_from_favorite_list,
            isSuccess: movie_is_deleted_from_favorite,
            isError: movie_is_not_deleted_from_favorite
        } = delete_from_favorite_hook()
    

        const handle_delete_movie_from_favorite = async () => {
    
            await delete_movie_from_favorite_list({user_id: user_info._id, imdb_id: movie_data.imdbID})
    
        }
    
    
        useUpdateEffect(()=> {
    
            update_bookmark_state(draft => {
    
                if(movie_is_deleted_from_favorite) {
                    draft.favorite = false
                }

                else if(movie_is_not_deleted_from_favorite) {
                    draft.favorite = true
                }
        
            })
    
        },[movie_is_deleted_from_favorite, movie_is_not_deleted_from_favorite])
    
    


        // ✅✅✅✅✅
        
            
        // 🍪 fetch a yet_to_watch movie and update bookmark state
        const {
            refetch: fetch_the_yet_to_watch_movie, 
            isSuccess: the_movie_is_in_the_yet_to_watch_list,
            isError: the_movie_is_not_in_the_yet_to_watch_list,
         } = fetch_a_yet_to_watch_movie_hook({
             user_id: user_info._id, 
             imdb_id: movie_data.imdbID
         })
     
    

         useMount(()=> {
            fetch_the_yet_to_watch_movie()
        })
     
     
 

         useUpdateEffect(()=> {

            if(the_movie_is_in_the_yet_to_watch_list) {
        
              update_bookmark_state(draft=> {
                  draft.yet_to_watch = true
              })
            }
        
            else if (the_movie_is_not_in_the_yet_to_watch_list) {
              update_bookmark_state(draft=> {
                  draft.yet_to_watch = false
              })
            }
        
          },[the_movie_is_in_the_yet_to_watch_list, the_movie_is_not_in_the_yet_to_watch_list ])
     
     
     
         // 🍪 add a movie to the yet_to_watch list and update bookmark state
         const {
             mutate: add_movie_to_yet_to_watch, 
             isSuccess: movie_is_added_to_yet_to_watch,
             isError: movie_is_not_added_to_yet_to_watch
         } = add_to_yet_to_watch_hook()
     
     
         const handle_add_movie_to_yet_to_watch = async () => {
     
             await add_movie_to_yet_to_watch({    
                 "user_id": `${user_info._id}`,
                 "Title": `${movie_data.Title}`,
                 "Poster": `${movie_data.Poster}`,
                 "Type": `${movie_data.Type}`,
                 "Year": `${movie_data.Year}`,
                 "imdbID": `${movie_data.imdbID}`
             })
     
         }
     
     
         useUpdateEffect(()=> {
     
             update_bookmark_state(draft => {
     
                 if(movie_is_added_to_yet_to_watch) {
                     draft.yet_to_watch = true
                 }
 
                 else if(movie_is_not_added_to_yet_to_watch) {
                     draft.yet_to_watch = false
                 }
 
             })
     
         },[movie_is_added_to_yet_to_watch, movie_is_not_added_to_yet_to_watch])
     
     
     
 
         // 🍪 delete a movie from the yet_to_watch list and update bookmark state
 
         const {
             mutate: delete_movie_from_yet_to_watch_list,
             isSuccess: movie_is_deleted_from_yet_to_watch,
             isError: movie_is_not_deleted_from_yet_to_watch
         } = delete_from_yet_to_watch_hook()
     
 
         const handle_delete_movie_from_yet_to_watch = async () => {
     
             await delete_movie_from_yet_to_watch_list({user_id: user_info._id, imdb_id: movie_data.imdbID})
     
         }
     
     
         useUpdateEffect(()=> {
     
             update_bookmark_state(draft => {
     
                 if(movie_is_deleted_from_yet_to_watch) {
                     draft.yet_to_watch = false
                 }
 
                 else if(movie_is_not_deleted_from_yet_to_watch) {
                     draft.yet_to_watch = true
                 }
         
             })
     
         },[movie_is_deleted_from_yet_to_watch, movie_is_not_deleted_from_yet_to_watch])
            
            
     

        
        // ✅✅✅✅✅
        
            
        // 🍪 fetch a already_watched movie and update bookmark state
        const {
            refetch: fetch_the_already_watched_movie, 
            isSuccess: the_movie_is_in_the_already_watched_list,
            isError: the_movie_is_not_in_the_already_watched_list,
         } = fetch_a_already_watched_movie_hook({
             user_id: user_info._id, 
             imdb_id: movie_data.imdbID
         })
     

         useMount(()=>{
            fetch_the_already_watched_movie()
         })

     
         useUpdateEffect(()=> {

            if(the_movie_is_in_the_already_watched_list) {
        
              update_bookmark_state(draft=> {
                  draft.already_watched = true
              })
            }
        
            else if (the_movie_is_not_in_the_already_watched_list) {
              update_bookmark_state(draft=> {
                  draft.already_watched = false
              })
            }
        
          },[the_movie_is_in_the_already_watched_list, the_movie_is_not_in_the_already_watched_list ])
     
     
     
         // 🍪 add a movie to the already_watched list and update bookmark state
         const {
             mutate: add_movie_to_already_watched, 
             isSuccess: movie_is_added_to_already_watched,
             isError: movie_is_not_added_to_already_watched
         } = add_to_already_watched_hook()
     
     
         const handle_add_movie_to_already_watched = async () => {
     
             await add_movie_to_already_watched({    
                 "user_id": `${user_info._id}`,
                 "Title": `${movie_data.Title}`,
                 "Poster": `${movie_data.Poster}`,
                 "Type": `${movie_data.Type}`,
                 "Year": `${movie_data.Year}`,
                 "imdbID": `${movie_data.imdbID}`
             })
     
         }
     
     
         useUpdateEffect(()=> {
     
             update_bookmark_state(draft => {
     
                 if(movie_is_added_to_already_watched) {
                     draft.already_watched = true
                 }
 
                 else if(movie_is_not_added_to_already_watched) {
                     draft.already_watched = false
                 }
 
             })
     
         },[movie_is_added_to_already_watched, movie_is_not_added_to_already_watched])
     
     
     
 
         // 🍪 delete a movie from the already_watched list and update bookmark state
 
         const {
             mutate: delete_movie_from_already_watched_list,
             isSuccess: movie_is_deleted_from_already_watched,
             isError: movie_is_not_deleted_from_already_watched
         } = delete_from_already_watched_hook()
     
 
         const handle_delete_movie_from_already_watched = async () => {
     
             await delete_movie_from_already_watched_list({user_id: user_info._id, imdb_id: movie_data.imdbID})
     
         }
     
     
         useUpdateEffect(()=> {
     
             update_bookmark_state(draft => {
     
                 if(movie_is_deleted_from_already_watched) {
                     draft.already_watched = false
                 }
 
                 else if(movie_is_not_deleted_from_already_watched) {
                     draft.already_watched = true
                 }
         
             })
     
         },[movie_is_deleted_from_already_watched, movie_is_not_deleted_from_already_watched])
    
        

    
    


    return (
        <>

        
          <Box sx={{padding:'0.2rem',paddingTop:'1.5rem', backgroundColor:'background.variation_2',  boxShadow: 1,
        borderTopColor: 'primary.main',
        borderTop: 3,

        borderRadius: 3,

        gridTemplateColumns: '1fr',

        position: 'relative',    display:'flex', gap:'1.5rem'}}>


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

                <FAVORITE_BUTTONS___SECTION 
                        bookmark_state={bookmark_state}
                        handle_delete_movie_from_favorite={handle_delete_movie_from_favorite} 
                        handle_add_movie_to_favorite={handle_add_movie_to_favorite}
                
                />


                <YET_TO_WATCH_BUTTONS___SECTION 

                        bookmark_state={bookmark_state}
                        handle_delete_movie_from_yet_to_watch={handle_delete_movie_from_yet_to_watch} 
                        handle_add_movie_to_yet_to_watch={handle_add_movie_to_yet_to_watch}           
                />


                     
                <ALREADY_WATCHED_BUTTONS___SECTION 

                    bookmark_state={bookmark_state}
                    handle_delete_movie_from_already_watched={handle_delete_movie_from_already_watched} 
                    handle_add_movie_to_already_watched={handle_add_movie_to_already_watched}           
                />

          </Box>
 
        
        </>
    )
}



// 🍪🍪

const FAVORITE_BUTTONS___SECTION = ({
bookmark_state,
handle_delete_movie_from_favorite,
handle_add_movie_to_favorite
}) => {



    return (

        <>
            {bookmark_state.favorite?
            

            <Tooltip title="Remove from Favorite" arrow>

                <DELETE_ICON_BUTTON___STYLED onClick={handle_delete_movie_from_favorite}>

                    <BookmarkIcon />

                </DELETE_ICON_BUTTON___STYLED>

            </Tooltip>
            
            :
            

            <Tooltip title="Add to Favorite" arrow>

                <ADD_ICON_BUTTON___STYLED  onClick={handle_add_movie_to_favorite}>

                    <BookmarkIcon />

                </ADD_ICON_BUTTON___STYLED>

            </Tooltip>

        }
        </>


    )
}


// 🍪🍪

const YET_TO_WATCH_BUTTONS___SECTION = ({
    bookmark_state,
    handle_delete_movie_from_yet_to_watch,
    handle_add_movie_to_yet_to_watch
 }) => {
    
    
    
        return (
    
            <>
                {bookmark_state.yet_to_watch?
                
    
                <Tooltip title="Remove from Yet to Watch" arrow>
    
                    <DELETE_ICON_BUTTON___STYLED onClick={handle_delete_movie_from_yet_to_watch}>
    
                        <QueueIcon />
    
                    </DELETE_ICON_BUTTON___STYLED>
    
                </Tooltip>
                
                :
                
    
                <Tooltip title="Add to Yet to Watch" arrow>
    
                    <ADD_ICON_BUTTON___STYLED  onClick={handle_add_movie_to_yet_to_watch}>
    
                        <QueueIcon />
    
                    </ADD_ICON_BUTTON___STYLED>
    
                </Tooltip>
    
            }
            </>
    
    
        )
    }
    





//  🍪🍪
    const ALREADY_WATCHED_BUTTONS___SECTION = ({
        bookmark_state,
        handle_delete_movie_from_already_watched,
        handle_add_movie_to_already_watched
     }) => {
        
        
        
            return (
        
                <>
                    {bookmark_state.already_watched?
                    
        
                    <Tooltip title="Remove from Already Watched" arrow>
        
                        <DELETE_ICON_BUTTON___STYLED onClick={handle_delete_movie_from_already_watched}>
        
                            <DoneAllIcon />
        
                        </DELETE_ICON_BUTTON___STYLED>
        
                    </Tooltip>
                    
                    :
                    
        
                    <Tooltip title="Add to Already Watched" arrow>
        
                        <ADD_ICON_BUTTON___STYLED  onClick={handle_add_movie_to_already_watched}>
        
                            <DoneAllIcon />
        
                        </ADD_ICON_BUTTON___STYLED>
        
                    </Tooltip>
        
                }
                </>
        
        
            )
        }




/*-------------------------------------------------------------------
✅ Styled Components for multiple components
----------------------------------------------------------------------*/



const DELETE_ICON_BUTTON___STYLED = styled(IconButton)
(({ theme }) => `  

    font-size: 1.8rem;
    color: ${theme.palette.error.main};

}`)



const ADD_ICON_BUTTON___STYLED = styled(IconButton)
(({ theme }) => `  

    font-size: 1.8rem;
    color: ${theme.palette.primary.main};

}`)