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

type type_of_user_input_of_fetch_a_bookmark_of_a_user = {
    content_type: 'movie' | 'series'
    content_id: string
}


/*__________________________________________

 ✅ hook 
____________________________________________*/
export function useFetchUserBookmark(user_input:type_of_user_input_of_fetch_a_bookmark_of_a_user) {


    return useQuery({

        queryKey: ["fetch_a_bookmark_of_a_user"],

        queryFn: async () => {

            try {
                const response = await axios_movie_manager_instance.get(`/bookmark/fetch-one-of-a-user/${user_input.content_type}/${user_input.content_id}`)

                return response.data
            }

            catch (error) {
                console.error("Error fetching user info:", error);
                throw error;
            }
        },


        // fetch when component mounts
        enabled: true,

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


