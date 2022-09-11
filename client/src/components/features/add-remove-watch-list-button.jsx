import { IconButton, Tooltip } from "@mui/material"

import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';

import { useSearchFavoriteQuery, useAddFavoriteMutation, useDeleteFavoriteMutation } from 'redux-toolkit/api/favorite-api';

import responsiveSpacing from "utils/responsive-spacing/responsive-spacing";




export default function ADD_REMOVE_FAVORITE_BUTTON({ movie }) {


    /* Note: Need to check whether any of the fetched movie is already in the database's favorite collection or not (if a movie is already in the database's favorite collection', then we need to show the remove button but if a movie is not in the 's database's favorite collection', we need to show the add button.) */
    const { data, error, refetch } = useSearchFavoriteQuery(movie.imdbID)



    /* Note: You can add the movie if it's not already added in the database's favorite collection */
    const [addFavorite] = useAddFavoriteMutation()


    const handleAddFavorite = async (favoriteItems) => {

        await addFavorite(favoriteItems)


        /* Note: refetch the useSearchFavoriteQuery so that the UI knows that the movie is added on the database and can change the 'add button' to 'remove button' */
        refetch()
    }




    /* Note: You can remove the movie if it's already added in the  database's favorite collection */

    const [deleteFavorite] = useDeleteFavoriteMutation()

    const handleDeleteFavorite = async (imdbID) => {

        await deleteFavorite(imdbID)

        /* refetch the useSearchFavoriteQuery so that the UI knows that the movie is removed from the database and can change the 'remove button' to 'add button' */
        refetch()
    }



    console.log(data)

    return (

        <>

            {/* If any fetched movie is not already in the database's favorite collection, then useSearchFavoriteQuery will return us an 'error'. So, if movie gets an error, then we will need to show 'Add to favorite' button. */}

            {error ?

                <Tooltip title="Add to Favorite" arrow>

                    <IconButton sx={{ fontSize: responsiveSpacing(1) }} color='primary' onClick={async () => handleAddFavorite({

                        "title": `${movie.Title}`,
                        "imageUrl": `${movie.Poster}`,
                        "type": `${movie.Type}`,
                        "year": `${movie.Year}`,
                        "imdbID": `${movie.imdbID}`

                    })}>

                        <AddToQueueIcon />

                    </IconButton>

                </Tooltip>


                :


                <Tooltip title="Remove from Favorite" arrow>

                    <IconButton sx={{ fontSize: responsiveSpacing(1) }} color='primary' onClick={async () => handleDeleteFavorite(`${movie.imdbID}`)}>

                        <RemoveFromQueueIcon />

                    </IconButton>

                </Tooltip>


            }


        </>

    )


}