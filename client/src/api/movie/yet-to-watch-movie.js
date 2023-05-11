// importing hook of react query
import { useQuery, useMutation } from '@tanstack/react-query';

// importing axios
import axios from "axios"



// importing react-toastify
import { toast } from "react-toastify";



// creating new axios instance
export const axios_yet_to_watch_movie = axios.create({

    baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/movie/yet-to-watch`,

    headers: {
        'Content-Type': 'application/json'
    }

})





function add_to_yet_to_watch_hook() {


    return useMutation(

        (movie_data) => axios_yet_to_watch_movie.post('/create-one', movie_data),

        {
            onSuccess: (data) => {

                // show success toast
                toast.success('The movie has successfully been added to the Yet to Watch list')
            },

            onError: (error) => {
                // show error toast
                const error_message = error.response.data.message

                toast.error(error_message)
            },
        }

    )
}



function fetch_yet_to_watch_movies_hook(payload) {



    return useQuery({

        queryKey: ["yet_to_watch_movies"],

        queryFn: async () => {

            const response = await axios_yet_to_watch_movie.get(

                `/fetch-all-of-a-user/${payload.user_id}`,
            )

            return response.data
        },


        enabled: true,

        refetchOnWindowFocus: false,

        retry: true,




    })
}



function fetch_a_yet_to_watch_movie_hook(payload) {



    return useQuery({

        queryKey: ["yet_to_watch_movie"],

        queryFn: async () => {

            const response = await axios_yet_to_watch_movie.get(

                `/fetch-one-of-a-user/${payload.user_id}/${payload.imdb_id}`,


            )

            return response.data
        },


        enabled: false,

        refetchOnWindowFocus: false,

        retry: false,

        cacheTime: 0,


    })
}


function delete_from_yet_to_watch_hook() {

    return useMutation(

        (payload) => axios_yet_to_watch_movie.delete(`/delete-one/${payload.user_id}/${payload.imdb_id}`),

        {

            onSuccess: () => {
                // show success toast
                toast.success('The movie has been successfully removed from the Yet to Watch list');
            },

            onError: (error) => {
                // show error toast
                const error_message = error.response.data.message;
                toast.error(error_message);
            },

        }

    )

}




export {
    add_to_yet_to_watch_hook,
    fetch_yet_to_watch_movies_hook,
    fetch_a_yet_to_watch_movie_hook,
    delete_from_yet_to_watch_hook
}