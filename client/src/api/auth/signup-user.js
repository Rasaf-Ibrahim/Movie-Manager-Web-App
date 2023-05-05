// importing hook of react query
import { useMutation } from '@tanstack/react-query';

// importing axios instance
import { authAxios } from "./axios-instances/auth-axios";

// importing zustand store & immer
import { user_store } from '../store/user-store'
import produce from 'immer'

// importing router
import { useNavigate } from 'react-router-dom';

// importing react-toastify
import { toast } from "react-toastify";



// creating custom hook for handling request
export function useSignupUser() {

    const navigate = useNavigate()

    return useMutation(

        (userData) => authAxios.post('/auth/signup', userData),

        {
            onSuccess: (data) => {

                // show success toast
                toast.success('You are registered successfully')

                // update the store
                user_store.setState(produce((draft) => {
                    draft.user_info = data.data.user_info
                    draft.access_token = data.data.access_token
                }))

                // redirect to another page
                navigate('/authentication-project/send-email-verification-mail')
            },

            onError: (error) => {
                // show error toast
                const error_message = error.response.data.message

                toast.error(error_message)
            },
        }

    )
}
