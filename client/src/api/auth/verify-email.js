// importing hook of react query
import { useMutation } from '@tanstack/react-query';

// importing axios instance
import { authAxios } from "./axios-instances/auth-axios";

// importing zustand store & immer
import { user_store } from '../store/user-store'
import produce from 'immer'



// creating custom hook for handling request
export function useVerifyEmail() {


    return useMutation(

        (data) => authAxios.patch('/auth/verify-email', data),

        {
            onSuccess: (data) => {

                // update state
                user_store.setState(produce((draft) => {

                    draft.user_info.is_email_confirmed = true
                }))

            },

            onError: (error) => {
                
                const error_message = error.response.data.message

                // do nothing
                // we will show the error on the UI, so no need to display any toast

            },
        }

    )
}
