/*
 Both 'features/add-remove-favorite-button.js' & 'features/add-remove-watch-later-button.js' has similar structure. Just different text, icon and api. 
*/


import { IconButton, Tooltip } from "@mui/material"



import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';



import {useFetchFavoritesQuery, useSearchFavoriteQuery, useAddFavoriteMutation, useDeleteFavoriteMutation } from 'redux-toolkit/api/favorite-api';

import responsiveSpacing from "utils/responsive-spacing/responsive-spacing";




export default function ADD_REMOVE_FAVORITE_BUTTON({movie}) {


    /* Note: In the 'search-movie' section, we need to check whether any of the fetched movie is already in the database's favorite collection or not (because if a movie is already in the database's favorite collection', then we need to show the remove button but if a movie is not in the 's database's favorite collection', we need to show the add button.) To check this, we will need 'useSearchFavoriteQuery' hook. */


    /* Note: If we add or remove a movie as favorite, we need to update the 'favorite' section. To update the 'favorite' section, we need to refetch all the favorite movies there. To refetch we need 'useFetchFavoritesQuery' hook.*/


    /* Note: We are having two query hooks(useSearchFavoriteQuery & useFetchFavoriteQuery) here. Both of them return us a object with same propertyNames(data, refetch, error, etc.). So, while we destructure these hooks' returned object, we need to rename the destructured properties. */


    const { error: searchedFavoriteError, refetch: searchedFavoriteRefetch} = useSearchFavoriteQuery(movie.imdbID)


    const {  refetch: fetchedFavoritesRefetch } = useFetchFavoritesQuery()


    /* Note: If a movie is not already added in the database's favorite collection, you can add it. */
    const [addFavorite] = useAddFavoriteMutation()


    const handleAddFavorite = async (favoriteItems) => {

        await addFavorite(favoriteItems)


        /* Note: refetch the useSearchFavoriteQuery hook so that the UI knows that the movie is added on the database and the 'add button' can be changed to 'remove button' */
        searchedFavoriteRefetch()


        /* Note: This will refetch all the favorite movies  in the favorite movie section */
        fetchedFavoritesRefetch()
    }




    /* Note: If a movie is not already added in the database's favorite collection, you can delete it.*/

    const [deleteFavorite] = useDeleteFavoriteMutation()

    const handleDeleteFavorite = async (imdbID) => {

        await deleteFavorite(imdbID)

        /* Note: refetch the useSearchFavoriteQuery hook so that the UI knows that the movie is added on the database and the 'remove button' can be changed to 'add button' */
        searchedFavoriteRefetch()

        /* Note: This will refetch all the favorite movies  in the favorite movie section */
        fetchedFavoritesRefetch()
    }





    return (

        <>

            {/* If any fetched movie is not already in the database's favorite collection, then useSearchFavoriteQuery will return us an 'error'. So, if a movie gets an error, then we will need to show 'Add to favorite' button. */}

            {searchedFavoriteError ?

                <Tooltip title="Add to Favorite" arrow>

                    <IconButton sx={{ fontSize: responsiveSpacing(1.2), color:'primary.main'}}  onClick={async () => handleAddFavorite({

                        "Title": `${movie.Title}`,
                        "Poster": `${movie.Poster}`,
                        "Type": `${movie.Type}`,
                        "Year": `${movie.Year}`,
                        "imdbID": `${movie.imdbID}`

                    })}>

                        <BookmarkAddIcon />

                    </IconButton>

                </Tooltip>


                :


                <Tooltip title="Remove from Favorite" arrow>

                    <IconButton sx={{ fontSize: responsiveSpacing(1.2), color:'pink.v3' }} onClick={async () => handleDeleteFavorite(`${movie.imdbID}`)}>

                        <BookmarkRemoveIcon />

                    </IconButton>

                </Tooltip>


            }


        </>

    )


}