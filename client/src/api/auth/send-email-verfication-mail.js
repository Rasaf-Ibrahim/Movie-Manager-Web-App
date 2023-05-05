// importing  hook of react query
import { useMutation } from '@tanstack/react-query';

// importing axios instance
import { authAxios } from "./axios-instances/auth-axios";

// importing zustand store & immer
import { user_store } from '../store/user-store'
import produce from 'immer'





// creating custom hook for handling request
export function useSendEmailVerificationMail() {

    return useMutation(

        (userData) => authAxios.post('/auth/send-email-verification-mail', userData),

        {
            onSuccess: (data) => {


                user_store.setState(produce((draft) => {
                    draft.email_verification = {


                        url_expiration_timestamp: Date.now() + 15 * 60 * 1000 //15 minutes
                    }
                }))

            },

            onError: (error) => {

                // show error toast
                const error_message = error.response.data.message

                toast.error(error_message)
            },
        }

    )
}

