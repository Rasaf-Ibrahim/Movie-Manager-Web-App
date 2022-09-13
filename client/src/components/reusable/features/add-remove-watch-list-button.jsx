/*
 Both 'features/add-remove-favorite-button.js' & 'features/add-remove-watch-later-button.js' has similar structure. Just different text, icon and api. 
*/


import { IconButton, Tooltip } from "@mui/material"


import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';


import { useFetchWatchLaterQuery, useSearchWatchLaterQuery, useAddWatchLaterMutation, useDeleteWatchLaterMutation } from 'redux-toolkit/api/watch-later-api';

import responsiveSpacing from "utils/responsive-spacing/responsive-spacing";




export default function ADD_REMOVE_WATCH_LATER_BUTTON({movie}) {


    /* Note: In the 'search-movie' section, we need to check whether any of the fetched movie is already in the database's watch-later collection or not (because if a movie is already in the database's watch-later collection', then we need to show the remove button but if a movie is not in the 's database's watch-later collection', we need to show the add button.) To check this, we will need 'useSearchWatchLaterQuery' hook. */


    /* Note: If we add or remove a movie as watch-later, we need to update the 'watch-later' section. To update the 'watch-later' section, we need to refetch all the watch-later movies there. To refetch we need 'useFetchWatchLaterQuery' hook.*/


    /* Note: We are having two query hooks(useSearchWatchLaterQuery & useFetchWatchLaterQuery) here. Both of them return us a object with same propertyNames(data, refetch, error, etc.). So, while we destructure these hooks' returned object, we need to rename the destructured properties. */


    const { error: searchedWatchLaterError, refetch: searchedWatchLaterRefetch} = useSearchWatchLaterQuery(movie.imdbID)


    const {  refetch: fetchedWatchLaterRefetch } = useFetchWatchLaterQuery()

    /* Note: If a movie is not already added in the database's watch-later collection, you can add it. */
    const [addWatchLater] = useAddWatchLaterMutation()


    const handleAddWatchLater = async (watchLaterItems) => {

        await addWatchLater(watchLaterItems)


        /* Note: refetch the useSearchWatchLaterQuery hook so that the UI knows that the movie is added on the database and the 'add button' can be changed to 'remove button' */
        searchedWatchLaterRefetch()


        /* Note: This will refetch all the watch-later movies  in the watch-later movie section */
        fetchedWatchLaterRefetch()
    }




    /* Note: If a movie is not already added in the database's watch-later collection, you can delete it.*/

    const [deleteWatchLater] = useDeleteWatchLaterMutation()

    const handleDeleteWatchLater = async (imdbID) => {

        await deleteWatchLater(imdbID)

        /* Note: refetch the useSearchWatchLaterQuery hook so that the UI knows that the movie is added on the database and the 'remove button' can be changed to 'add button' */
        searchedWatchLaterRefetch()

        /* Note: This will refetch all the watch-later movies  in the watch-later movie section */
        fetchedWatchLaterRefetch()
    }





    return (

        <>

            {/* If any fetched movie is not already in the database's watch-later collection, then useSearchWatchLaterQuery will return us an 'error'. So, if a movie gets an error, then we will need to show 'Add to watch-later' button. */}

            {searchedWatchLaterError ?

                <Tooltip title="Add to Watch Later" arrow>

                    <IconButton sx={{ fontSize: responsiveSpacing(1.2), color:'primary.main'}} onClick={async () => handleAddWatchLater({

                        "Title": `${movie.Title}`,
                        "Poster": `${movie.Poster}`,
                        "Type": `${movie.Type}`,
                        "Year": `${movie.Year}`,
                        "imdbID": `${movie.imdbID}`
                        
                    })}>

                    
                    <AddToQueueIcon />

                    </IconButton>

                </Tooltip>


                :


                <Tooltip title="Remove from Watch Later" arrow>

                    <IconButton sx={{ fontSize: responsiveSpacing(1.2), color:'pink.v3' }}  onClick={async () => handleDeleteWatchLater(`${movie.imdbID}`)}>

                        <RemoveFromQueueIcon />

                    </IconButton>

                </Tooltip>


            }


        </>

    )


}