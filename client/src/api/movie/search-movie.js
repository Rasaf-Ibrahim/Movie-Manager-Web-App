import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



// creating new axios instance
const movieAxios = axios.create({

    baseURL: "https://www.omdbapi.com",

    headers: {
        'Content-Type': 'application/json'
    }

})



export function useSearchMovie(searched_word) {

  return useQuery({

    queryKey: ["search_movie"],

    queryFn: async () => {

       const response = await movieAxios.get(

         `/?s=${searched_word}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`,
        )

        return response.data
    },


    /* We're disabling automatic data fetching when the component loads. Since we want to fetch data only when the search query changes or when get_random_placeholder_movie() returns a movie on component mount, we'll use `useEffect` to trigger the fetching manually. */
    enabled: false,

    refetchOnWindowFocus: false,

    retry: false,

  })

}
