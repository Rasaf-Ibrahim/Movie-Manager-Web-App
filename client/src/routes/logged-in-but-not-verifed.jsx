// store
import { user_store } from '@/projects/authentication/store/user-store';

// router
import { Navigate } from 'react-router-dom'


// importing react-toastify
import { toast } from "react-toastify";




export default function LOGGED_IN_BUT_NOT_VERIFIED({ children }) {



    // user_info
    const { user_info } = user_store(state => ({
        user_info: state?.user_info,
    }))


    // if  logged in but not verified, can access the desired page
    if (user_info && user_info.is_email_confirmed === false) {
        return children
    }


    // otherwise, redirecting 
    return (

        <>

            {/* not logged in */}
            {!user_info &&

                <>

                    {toast.info('You need to sign in first')}

                    <Navigate to='/sign-in' />

                </>

            }


            {/* logged in and email is verified */}
            {user_info && user_info.is_email_confirmed === true &&

                <>

                    {/* 🔖 Don't change the following toast to 'Your email is already verified' because this toast will be visible not only when the user mistakenly visit the verify email page, also when the user verifies the email. So, the following toast would be the appropriate message. */}
                    {toast.info('Your email is verified')}

                    <Navigate to='/' />

                </>

            }


        </>


    )

}

