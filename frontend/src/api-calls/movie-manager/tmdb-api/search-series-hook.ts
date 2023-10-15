/*__________________________________________

 ✅ import 
____________________________________________*/

// hook
import { useQuery } from '@tanstack/react-query';

// axios instance
import { axios_movie_manager_instance } from '../_axios-movie-manager-instance'



/*__________________________________________

 ✅ hook 
____________________________________________*/
export function useSearchSeries(search_term) {

    return useQuery({

        queryKey: ["search_series_hook"],

        queryFn: async () => {

            try {
                const response = await axios_movie_manager_instance.get(`/tmdb/search-series?search=${search_term}`)

                return response.data
            }

            catch (error) {
                console.error("Error fetching user info:", error);
                throw error;
            }
        },


        // don't fetch when component mounts
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



