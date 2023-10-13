/*__________________________________________

 ✅ import 
____________________________________________*/

// react query
import { useMutation } from '@tanstack/react-query';

// axios instance
import { axios_movie_manager_instance } from '../_axios-movie-manager-instance'

// toast
import { toast } from 'react-toastify'


/*__________________________________________

 ✅ types 
____________________________________________*/

type type_of_user_input_of_add_to_bookmark_hook = {
    bookmark_type: string
    content_type: string
    content_id: string
    title: string
    year: string
    poster_url: string
}


/*__________________________________________

 ✅ hook 
____________________________________________*/
export function useAddToBookmark() {


    // useMutation
    return useMutation<unknown, unknown, type_of_user_input_of_add_to_bookmark_hook, unknown>(


        (user_input) => {

            return axios_movie_manager_instance.post('/bookmark/add', user_input)

        },


        {
            onSuccess: (data: any) => {
                
                toast.success(data.data.message, {

                    toastId: data.data.message
                })
            },


            onError: (error: any) => {
                // show error toast
                const error_message = error.response.data.message

                toast.error(error_message, {
                    toastId: 'error_message'
                })
            }
        }

    )
}




