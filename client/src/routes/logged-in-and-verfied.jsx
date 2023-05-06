// store
import { user_store } from '@/store/user-store';

// router
import { Navigate } from 'react-router-dom'


// importing react-toastify
import { toast } from "react-toastify";




export default function LOGGED_IN_AND_VERIFIED({ children }) {



    // user_info
    const { user_info } = user_store(state => ({
        user_info: state?.user_info,
    }))


    // if  logged in and email is verified, can access the desired page
    if (user_info && user_info.is_email_confirmed === true) {
        return children
    }


    // if not logged in, redirecting to the login page
    return (

        <>

            {/* not logged in */}
            {!user_info &&

                <>

                    {toast.info('You need to sign in first')}

                    <Navigate to='/sign-in' />

                </>

            }


            {/* logged in but email is  not verified */}
            {user_info && user_info.is_email_confirmed === false &&

                <>

                    {toast.info('You must verify your email first')}

                    <Navigate to="/send-email-verification-mail" />

                </>

            }


        </>

    )

}

