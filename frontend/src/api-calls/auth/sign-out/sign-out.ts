/*__________________________________________

 ✅ import 
____________________________________________*/

// types
import { type_of_obj_with_any_values } from '@/types/commonly-used-types'

// react query
import { useMutation } from '@tanstack/react-query';

// axios instance
import { axios_auth_instance } from "../_axios-auth-instance";

// user store & immer
import { auth_store } from '@/store/auth-store';
import { produce } from 'immer'



/*__________________________________________

 ✅ types 
____________________________________________*/

export type type_of_user_input_of_sign_out_hook = void



/*__________________________________________

 ✅ hook 
____________________________________________*/
export function useSignOutUser() {

    return useMutation<unknown, unknown, type_of_user_input_of_sign_out_hook, unknown>(



        (user_input) => {

            return axios_auth_instance.post('/sign-out', user_input)

        },


        {
            onSuccess: (data) => {

                auth_store.setState(produce((draft) => {
                    
                    // don't make it undefined, make it an empty object
                    draft.user_info = {}


                    draft.last_sign_out_unix_timestamp = Date.now()
                }))

            },

            onError: (error: type_of_obj_with_any_values) => {

                // do nothing


            },
        }

    )
}

