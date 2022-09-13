import { ERROR_TEXT, LOADING_SPINNER } from 'components/reusable/ui';
import MOVIE_CARD from 'components/reusable/ui/movie-card/movie-card';

import { useFetchWatchLaterQuery } from 'redux-toolkit/api/watch-later-api';


export default function WATCH_LATER() {


    const { data, error, isLoading, isSuccess } = useFetchWatchLaterQuery()


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

                        <MOVIE_CARD data={data}/>

                    )

                }



              } )()  /* End: Immediately invoked anonymous function */

        )

}