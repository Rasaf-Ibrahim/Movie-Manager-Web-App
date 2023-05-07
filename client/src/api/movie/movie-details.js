import { useQuery } from '@tanstack/react-query';
import { omdbapi_axios } from './axios-instances/omdbapi-axios';




export function useMovieDetails(imdb_id) {

  return useQuery({

    queryKey: ["movie_details"],

    queryFn: async () => {

       const response = await omdbapi_axios.get(

         `/?i=${imdb_id}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`
        )

        return response.data
    },


    enabled: true,

    refetchOnWindowFocus: false,

    retry: true,

  })

}
