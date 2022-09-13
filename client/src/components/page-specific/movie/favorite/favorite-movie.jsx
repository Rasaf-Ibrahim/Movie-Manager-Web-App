
import DISPLAYING_FAVORITE_MOVIE from './child-1/displaying-favorite-movie';

import { ERROR_TEXT, LOADING_SPINNER } from 'components/reusable/ui';

import { useFetchFavoritesQuery } from 'redux-toolkit/api/favorite-api';


export default function FAVORITE_MOVIE() {


    const { data, error, isLoading, isSuccess } = useFetchFavoritesQuery()


    return (
    
            /*  Immediately invoked anonymous function */
            (() => {

                if (isLoading) {
                    return (
                        <LOADING_SPINNER />
                    )
                }

                else if (error) {
                    return (


                        <ERROR_TEXT text='Something is wrong.' />


                    )
                }

                else if (isSuccess) {

                    return (

                        <DISPLAYING_FAVORITE_MOVIE data={data} />

                    )

                }



              } )()  /* End: Immediately invoked anonymous function */

        )

}