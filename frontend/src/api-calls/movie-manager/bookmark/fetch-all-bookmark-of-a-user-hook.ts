/*__________________________________________

 ✅ import 
____________________________________________*/

// hook
import { useQuery } from '@tanstack/react-query';

// axios instance
import { axios_movie_manager_instance } from '../_axios-movie-manager-instance';


/*__________________________________________

 ✅ types 
____________________________________________*/

type type_of_user_input_of_fetch_all_bookmark_of_a_user = {
    bookmark_type: 'favorite' | 'watched' | 'watchlist'
    content_type: 'movie' | 'series'
    page: number
}



/*__________________________________________

 ✅ hook 
____________________________________________*/
export function useFetchUserBookmarks(user_input:type_of_user_input_of_fetch_all_bookmark_of_a_user) {


    return useQuery({

        queryKey: ["fetch_all_bookmark_of_a_user"],


        queryFn: async () => {

            try {
                const response = await axios_movie_manager_instance.get(`/bookmark/fetch-all-of-a-user?bookmark_type=${user_input.bookmark_type}&content_type=${user_input.content_type}&page=${user_input.page}`)

                return response.data
            }

            catch (error) {
                console.error("Error fetching user info:", error);
                throw error;
            }
        },


        // don't fetch when component mounts, we will handle this manually
        enabled: false,

        // if fetching fails for some reason, we want to retry one more time
        retry: 1,

        // refetch on specific situations
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,

        // no caching
        cacheTime: 0

    })

}


